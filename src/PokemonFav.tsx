import {useDispatch} from 'react-redux';
import {Favoris} from './redux/Favoris';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {FavorisState} from './redux/favorisReducer';
import {addFavori, resetFavori} from './redux/actions';

const PokemonFav: React.FC = () => {    

    const favoris = useSelector<FavorisState, FavorisState["favoris"]>((state) => state.favoris);
    const dispatch = useDispatch();

    const onAddList = (fav:string) => {
        console.log("onAdd");
        dispatch(addFavori(fav));
    }

    const onResetList = (fav:string) => {
        console.log("onDel");
        dispatch(resetFavori(fav));
    }

    return(
        <div className='PokemonFav container'>
                
            <div className='row mt-5'>
                <h4 className='col-12 d-flex justify-content-center'>Veuillez sélectionner un pokemon a ajouter dans vos favoris</h4>
            </div>            

            <div className='row mb-5'>
                <Favoris addFavori={onAddList} delFavori={onResetList}/>
            </div> 

            <div className='row recadre'>
            {favoris.map((favori) =>{
                    return (
                        <div key={favori} className='col-4 my-5'>
                            <div className="card bg-dark border border-ligth">
                                <img className="card-img-top bg-dark" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${favori}.png`} alt="tet"/>
                                <div className="card-body bg-dark d-flex justify-content-center">
                                    <p className="card-text">Pokemon n°{favori} du pokédex</p>
                                </div>
                            </div>
                        </div>
                    ) 
                })}
            </div>
      


        </div>
    )

}

export default PokemonFav;