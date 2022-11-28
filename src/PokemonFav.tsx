import {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Pokedex} from './interface/interfacePokedex';
import {PokemonEntry} from './interface/interfacePokedex';
import {NewFavoris} from './redux/NewFavoris';
import {useSelector} from 'react-redux';
import {FavorisState} from './redux/favorisReducer';
import {addFavori} from './redux/actions';

const PokemonFav: React.FC = () => {    

    const favoris = useSelector<FavorisState, FavorisState["favoris"]>((state) => state.favoris);
    const dispatch = useDispatch();

    const onAddList = (fav:string) => {
        dispatch(addFavori(fav))
    }

    return(
        <div className='PokemonFav container'>
                
            <div className='row mt-5'>
                <h4 className='col-12 d-flex justify-content-center'>Veuillez sélectionner un pokemon a ajouter dans vos favoris</h4>
            </div>            

            <div className='row mb-5'>
                <NewFavoris addFavori={onAddList}/>
            </div> 

            <div className='row recadre'>
            {favoris.map((favori) =>{
                    return (
                        
                            <h1 key={favori}>{favori}</h1>
                    ) 
                })}
            </div>
      


        </div>
    )

}

export default PokemonFav;