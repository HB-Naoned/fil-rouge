import { useLocation } from 'react-router-dom';


const PokemonDetail: React.FC = () => {    

    const { state } = useLocation();
    const { url } = state || {};
    const { numberPoke } = state || {};
    console.log(url);
    console.log(numberPoke);
    

    return(
        <div className='PokemonDetail'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        Column
                    </div>
                    <div className="col">
                        Column
                    </div>
                    <div className="col">
                        Column
                    </div>
                </div>
            </div>
        </div>
        
        
    )


}


export default PokemonDetail;