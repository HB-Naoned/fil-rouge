import {useState,useEffect} from 'react';
import {Pokedex} from './interface/interfacePokedex';
import {PokemonEntry} from './interface/interfacePokedex';

const PokemonFav: React.FC = () => {    

    const [pokedex,setPokedex] = useState<PokemonEntry[] | null>(null); 


    const getListPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
        let pokedex: Pokedex = await response.json();
        console.log(pokedex.pokemon_entries);
        setPokedex(pokedex.pokemon_entries);
    }


    const addList = async () => {

    }


    useEffect(() => {
        getListPokemon();
    },[]);

    return(
        <div className='PokemonFav container d-flex flex-wrap justify-content-center'>

            <div className='row mt-5'>
                <h4 className='col-12'>Veuillez sélectionner un pokemon a ajouter dans vos favoris</h4>
            </div>            

            <select className="row form-select bg-dark mt-5 " size={3} aria-label="size 3 select example">
                {pokedex && pokedex.map(pokemonPokedex => (
                    <option key={pokemonPokedex.entry_number} value={pokemonPokedex.pokemon_species.url} >{pokemonPokedex.entry_number} {pokemonPokedex.pokemon_species.name}</option>
                ))}
            </select>

            <button className=" row btn btn-dark mt-5 border border-white" onClick={() => addList()}>
                Ajouter à la liste
            </button>
            
        </div>
    )

}

export default PokemonFav;