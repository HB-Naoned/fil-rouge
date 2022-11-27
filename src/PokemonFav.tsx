import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {Pokedex} from './interface/interfacePokedex';
import {PokemonEntry} from './interface/interfacePokedex';
import { NewFavoris } from './redux/NewFavoris';
import {Provider} from "react-redux";
import { useSelector } from 'react-redux';
import { FavorisState } from './redux/favorisReducer';
import { addFavori } from './redux/actions';

const PokemonFav: React.FC = () => {    

    const [pokedex,setPokedex] = useState<PokemonEntry[] | null>(null); 
    // const [favoris] = useState<Number[]>;
    const favoris = useSelector<FavorisState, FavorisState["favoris"]>((state) => state.favoris);
    const dispatch = useDispatch();


    const onAddList = (fav:string) => {
        dispatch(addFavori(fav))
    }

    const getListPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokedex/1/");
        let pokedex: Pokedex = await response.json();
        console.log(pokedex.pokemon_entries);
        setPokedex(pokedex.pokemon_entries);
    }


    useEffect(() => {
        getListPokemon();
    },[]);

    return(
        <div className='PokemonFav container'>

            <div className='d-flex flex-wrap justify-content-center'>
                <div className='row mt-5'>
                    <h4 className='col-12'>Veuillez sélectionner un pokemon a ajouter dans vos favoris</h4>
                </div>            

                <select className="row form-select bg-dark mt-5 " size={3} aria-label="size 3 select example">
                    {pokedex && pokedex.map(pokemonPokedex => (
                        <option key={pokemonPokedex.entry_number} value={pokemonPokedex.pokemon_species.url} >{pokemonPokedex.entry_number} {pokemonPokedex.pokemon_species.name}</option>
                    ))}
                </select>

                <div className='row'>
                    {/* <button className="col btn btn-dark mt-5 border border-white mx-4" onClick={() => addList()}> */}
                        {/* Ajouter à la liste */}
                    {/* </button> */}
                    {/* <button className="col btn btn-dark mt-5 border border-white mx-4" onClick={() => resetList()}> */}
                        {/* Reset la liste */}
                    {/* </button> */}
                </div>
            </div>
            
      
            <div className='d-flex justify-content-center mt-5'>
                <div className='row'>
                    <NewFavoris addFavori={onAddList}/>
                </div> 
                {favoris.map((favori) =>{
                    return <h1 key={favori}>{favori}</h1>
                })}
            </div>


        </div>
    )

}

export default PokemonFav;