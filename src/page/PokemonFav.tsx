import {useDispatch,useSelector} from 'react-redux';
import {useContext} from "react";
import {Favoris} from '../composant/redux/Favoris';
import {FavorisState} from '../composant/redux/favorisReducer';
import {addFavori,resetFavori} from '../composant/redux/actions';
import {LangageContext, LangueCurrentContext} from '../composant/context/LangageContextProviderProps';

const PokemonFav: React.FC = () => {    

    /**
     * @description langageText = récupérer le contenue à utiliser en fonction la langue sléectionné
     * @description langueOption = récupérer la valeur permettant de changer 
     */
    const favoris = useSelector<FavorisState, FavorisState["favoris"]>((state) => state.favoris);
    const dispatch = useDispatch();
    const langageText = useContext(LangageContext);
    const langueOption = useContext(LangueCurrentContext);

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
                <h4 className='col-12 d-flex justify-content-center'>{langueOption?.langue ? langageText.fr.pages.pokemonFav.instruction1 : langageText.en.pages.pokemonFav.instruction1}</h4>
            </div>            

            <div className='row mb-5'>
                <Favoris addFavori={onAddList} delFavori={onResetList}/>
            </div> 

            <div className='row recadre'>
            {favoris.map((favori) =>{
                    return (
                        <div key={favori} className='col-4 my-5'>
                            <div className="card bg-dark border border-ligth">
                                <img className="card-img-top bg-dark" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${favori}.png`} alt={`Pokemon${favori}`} loading="lazy"/>
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