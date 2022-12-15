import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Pokemon} from '../interface/interfacePoke';
import {PokemonDetailAnnexe} from '../interface/interfacePokeDetail';
import {useParams} from 'react-router-dom';

const PokemonDetail: React.FC = () => {    

    /**
     * @description pokemonDetail = Object Pokemon / pokemonAnnexeDetail = Détails supplémentaire sur le pokemon sélectionné / idPokemon = récupérer l'identifiant en paramètre de la route
     */
    const [pokemon,setPokemon] = useState<Pokemon | null>(null); 
    const [pokemonDetail,setPokemonDetail] = useState<PokemonDetailAnnexe | null>(null); 
    const {idPokemon} = useParams();
    

    /**
     * @description Charger des détails supplémentaires sur le pokemon selectionné
     * @param id Le numéro du pokemon dans le pokedex 
     */
    const getAnnexeDetail = async (id:string | undefined) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        let obj: PokemonDetailAnnexe = await response.json();
        console.log(obj);
        setPokemonDetail(obj);
    }


    const getPokemon = async (id:string | undefined) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        let obj: Pokemon = await response.json();
        console.log(obj);
        setPokemon(obj);
    }


    /**
     * @description Récupération du pokemon sélectionné et appel du chargement des détails annexe du pokemon lors du chargement de la page
     */
    useEffect(() => {
        console.log(idPokemon);
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
                        <img className="img-thumbnail bg-dark" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail?.id}.png`} alt="tet"/>
                    </div>
                    <div className='row'>
                        <div className='col'>Nom en Allemand</div>
                        <div className='col'>
                            <p>{pokemonDetail?.names[5].name}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>Nom en Japonais</div>
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