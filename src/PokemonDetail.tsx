import {useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Pokemon} from './interface/interfacePoke';
import {PokemonDetailAnnexe} from './interface/interfacePokeDetail';

const PokemonDetail: React.FC = () => {    

    const [pokemonDetail,setPokemonDetail] = useState<Pokemon | null>(null); 
    const [pokemonAnnexe,setPokemonDetailAnnexe] = useState<PokemonDetailAnnexe | null>(null); 
    const {state} = useLocation();

    const getAnnexeDetail = async (url:string) => {
        const response = await fetch(url);
        let obj: PokemonDetailAnnexe = await response.json();
        console.log(obj);
        setPokemonDetailAnnexe(obj);
    }


    useEffect(() => {
        const {poke} = state;
        setPokemonDetail(poke);
        console.log(poke.species.url)
        getAnnexeDetail(poke.species.url)
    },[]);

    return(
        <div className='PokemonDetail container'>
            <div className="row mt-5">
                <div className='col d-flex flex-column'>
                    <div className="row justify-content-between my-2">
                        <div className="col-5 border border-ligth rounded-1">
                            N° {pokemonDetail?.id}
                        </div>
                        <div className="col-6 border border-ligth rounded-1">
                            {pokemonDetail?.name}
                        </div>
                    </div>
                    <div className="row">
                        <img className="img-thumbnail bg-dark" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail?.id}.png`} alt="tet"/>
                    </div>
                    <div className='row'>
                        <div className='col'>Nom en Allemand</div>
                        <div className='col'>
                            <p>{pokemonAnnexe?.names[5].name}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>Nom en Japonais</div>
                        <div className='col'>
                            <p>{pokemonAnnexe?.names[0].name}</p>
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