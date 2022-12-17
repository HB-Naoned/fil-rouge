import {useState,useEffect,useContext} from 'react';
import {Pokemon} from '../interface/interfacePoke';
import {PokemonDetailAnnexe} from '../interface/interfacePokeDetail';
import {useParams} from 'react-router-dom';
import {LangageContext,LangueCurrentContext} from '../composant/context/LangageContextProviderProps';

const PokemonDetail: React.FC = () => {    

    /**
     * @description pokemonDetail = Object Pokemon 
     * @description pokemonAnnexeDetail = Détails supplémentaire sur le pokemon sélectionné
     * @description idPokemon = récupérer l'identifiant en paramètre de la route
     * @description langageText = récupérer le contenue à utiliser en fonction la langue sléectionné
     * @description langueOption = récupérer la valeur permettant de changer 
     */
    const [pokemon,setPokemon] = useState<Pokemon | null>(null); 
    const [pokemonDetail,setPokemonDetail] = useState<PokemonDetailAnnexe | null>(null); 
    const {idPokemon} = useParams();
    const langageText = useContext(LangageContext);
    const langueOption = useContext(LangueCurrentContext);

    

    /**
     * @description Charger des détails supplémentaires sur le pokemon selectionné
     * @param id Le numéro du pokemon dans le pokedex 
     */
    const getAnnexeDetail = async (id:string | undefined) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        let obj: PokemonDetailAnnexe = await response.json();
        setPokemonDetail(obj);
    }

    /**
     * @description Charger les informations du pokemon selectionné
     * @param id Le numéro du pokemon dans le pokedex 
     */
    const getPokemon = async (id:string | undefined) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        let obj: Pokemon = await response.json();
        setPokemon(obj);
    }


    /**
     * @description Récupération du pokemon sélectionné et appels des chargement des détails annexes du pokemon et le pokemon en question
     */
    useEffect(() => {
        getAnnexeDetail(idPokemon);
        getPokemon(idPokemon);
    },[]);


    return(
        <div className='PokemonDetail container'>
            <div className="row mt-5">
                <div className='col d-flex flex-column'>
                    <div className="row justify-content-between my-2">
                        <div className="col-5 border border-ligth rounded-1">
                            N°{pokemon?.id}
                        </div>
                        <div className="col-6 border border-ligth rounded-1">
                            {pokemon?.name}
                        </div>
                    </div>
                    <div className="row">
                        <img className="img-thumbnail bg-dark" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail?.id}.png`} loading="lazy" alt={`Pokemon${pokemon?.id}`}/>
                    </div>
                    <div className='row'>
                        <div className='col'>{langueOption?.langue ? langageText.fr.pages.pokemonDetail.nomAllemend : langageText.en.pages.pokemonDetail.nomAllemend}</div>
                        <div className='col'>
                            <p>{pokemonDetail?.names[5].name}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>{langueOption?.langue ? langageText.fr.pages.pokemonDetail.nomJaponais : langageText.en.pages.pokemonDetail.nomJaponais}</div>
                        <div className='col'>
                            <p>{pokemonDetail?.names[0].name}</p>
                        </div>
                    </div>
                </div>
                <div className='col'>

                </div>  
                
            </div>
        </div>
        
        
    )

}

export default PokemonDetail;