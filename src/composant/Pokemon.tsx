import {PokemonPokedex} from './../interface/interface';
// import {IdPokemon} from './../interface/interface';
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from 'react';

interface PokemonsGProps {
    allPokemon : PokemonPokedex[] | null;
}

const Pokemon : React.FC<PokemonsGProps> = ({allPokemon}: PokemonsGProps) => {

    const navigation = useNavigate();
    const [idPokemon,setIdPokemon] = useState<string | null>(null); 
    
    const pokemonDetail = function(url: String, numberPoke: Number){
        console.log(url);
        console.log(numberPoke);
        navigation("/pokemonDetail",{ state: {url,numberPoke}});
    }

    // const pokemonImage = async function(url: String){
    //     const response = await fetch(`${url}`);
    //     const data = await response.json();
    //     // const idPokemon : IdPokemon = data.id;
    //     // console.log(idPokemon);
    //     // console.log(allPokemon);
    //     const res = data.id.toString();
    //     console.log(res);
    //     setIdPokemon(res);        
    // }



    return(
        <div className='Pokemon'>
            
        </div>
    )


}


export default Pokemon;