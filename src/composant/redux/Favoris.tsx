import React, {ChangeEvent, useState, useEffect} from "react";
import {PokemonEntry} from '../../interface/interfacePokedex';
import {Pokedex} from '../../interface/interfacePokedex';

interface NewFavorisInputProps {
    addFavori(favori: string): void
    delFavori(favori: string): void
}


export const Favoris: React.FC<NewFavorisInputProps> = ({addFavori,delFavori}) => {

    const [favori, setFavori] = useState("");
    const [pokedex,setPokedex] = useState<PokemonEntry[] | null>(null); 

    const updateFavori = (event:ChangeEvent<HTMLSelectElement>) => {
        setFavori(event.target.value);
    }

    /**
     * @description Déclancheur de l'action Ajout Favori pour le reducer 
     */
    const addOnClique = () => {
        console.log("add");
        addFavori(favori);
        setFavori("");
    }

    /**
     * @description Déclancheur de l'action "Reset Favoris" pour le reducer 
     */
    const resetOnClique = () => {
        console.log("del");
        delFavori(favori);
    }

    /**
     * @description Initialisation de la liste de tous les pokemons
     */
    const getListPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
        let pokedex: Pokedex = await response.json();
        console.log(pokedex.pokemon_entries);
        setPokedex(pokedex.pokemon_entries);
    }

    /**
     * @description Appel de la méthode getListPokemon au chargement de la page
     */
    useEffect(() => {
        getListPokemon();
    },[]);

    return(
        <div className="">

            <select onChange={updateFavori} className="row form-select bg-dark mt-5 h-75" size={3} aria-label="size 3 select example">
                {pokedex && pokedex.map(pokemonPokedex => (
                <option key={pokemonPokedex.entry_number} value={pokemonPokedex.entry_number}> {pokemonPokedex.entry_number} {pokemonPokedex.pokemon_species.name}</option>
                ))}
            </select>

            <div className='row d-flex justify-content-center'>
                <button onClick={addOnClique} className="col-3 btn btn-dark mt-5 border border-white mx-4">
                    Ajouter à la liste
                </button>
                <button onClick={resetOnClique} className="col-3 btn btn-dark mt-5 border border-white mx-4">
                    Reset la liste
                </button>
            </div>

        </div>
    )
}
