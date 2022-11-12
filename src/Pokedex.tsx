import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {PokemonPokedex} from './interface/interface';

const Pokedex: React.FC = () => {

    const [allPokemon,setAllPokemonG] = useState<PokemonPokedex[] | null>(null); 
    const limite: number[] = [0,151,251,386,493,649,721,809,905];
    const generation: number[] = [1,2,3,4,5,6,7];
    const [loading,setLoading] = useState<boolean>();

    const navigation = useNavigate();
    // const [idPokemon,setIdPokemon] = useState<string | null>(null); 
    
    const pokemonDetail = function(pokemonSelected :PokemonPokedex){
        console.log(pokemonSelected);
        navigation("/fil-rouge/pokemonDetail",{ state: {pokemonSelected}});
    }
    
    const getPokemonG = async function(numGeneration: number){
        setLoading(false);
        let startG = limite[numGeneration];
        let endG = limite[numGeneration + 1];
        let pokemonG  : PokemonPokedex[] = [];
        for(startG++ ; startG<=endG ; startG++){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${startG}/`);
            let obj: PokemonPokedex = await response.json();
            pokemonG.push(obj);
        }
        setAllPokemonG(pokemonG);
        setLoading(true);
    }


    return(
        <div className='PokemonFixG'>
            <div className="container">
                <div className="row mt-2">
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(0)}>
                        Kanto
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(1)}>
                        Johto
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(2)}>
                        Hoenn
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(3)}>
                        Sinnoh
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(4)}>
                        Unys
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(5)}>
                        Kalos
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(6)}>
                        Alola
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(7)}>
                        Galar
                    </button>
                </div>
            </div>

            <div className="container">
                {loading ? 
                    <div className="row mt-3">
                        {allPokemon && allPokemon.map(pokemon => (
                            <div key={pokemon.id} className="col-3 d-flex flex-wrap justify-content-center mt-2">
                                <img className="img-thumbnail bg-dark" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={`${pokemon.id}`} onClick={() => pokemonDetail(pokemon)}/>
                                <h4>{pokemon.name} n°{pokemon.id}</h4>
                                {/* <button type="button" className="btn btn-dark border border-dark mt-2" onClick={() => pokemonDetail(pokemon.pokemon_species.url,pokemon.entry_number)}>Détails de {pokemon.pokemon_species.name}</button> */}
                            </div>
                        ))}
                    </div>
                    : loading == false ? 
                        <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        :
                        <div className='d-flex mt-5 justify-content-center'>
                            <h4>Veuillez sélectionner une régions</h4>
                        </div>
                }
            </div>
        </div>
    )


}

export default Pokedex;