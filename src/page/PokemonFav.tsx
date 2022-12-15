import {useDispatch} from 'react-redux';
import {Favoris} from '../composant/redux/Favoris';
import {useSelector} from 'react-redux';
import {FavorisState} from '../composant/redux/favorisReducer';
import {addFavori, resetFavori} from '../composant/redux/actions';

const PokemonFav: React.FC = () => {    

    const favoris = useSelector<FavorisState, FavorisState["favoris"]>((state) => state.favoris);
    const dispatch = useDispatch();

    /**
     * @description Appel au reducer pour ajouter le favori dans la liste des favoris
     * @param fav 
     */
    const onAddList = (fav:string) => {
        console.log("onAdd");
        dispatch(addFavori(fav));
    }

    /**
     * @description Appel au reducer pour reset la liste des favoris
     * @param fav 
     */
    const onResetList = (fav:string) => {
        console.log("onDel");
        dispatch(resetFavori(fav));
    }

    return(
        <div className='PokemonFav container'>
                
            <div className='row mt-5'>
                <h4 className='col-12 d-flex justify-content-center'>Veuillez sélectionner un pokémon à ajouter dans vos favoris</h4>
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