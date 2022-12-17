import {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import {LangageContext,LangueCurrentContext} from '../composant/context/LangageContextProviderProps';
import {Pokemon} from '../interface/interfacePoke';

const Pokedex: React.FC = () => {

    /**
     * @desciption allPokemon = Tableau d'objet Pokemon 
     * @description limite = Tableau de nombre pour décrire les générations
     * @description loading = Boolean pour activer ou non le spinner
     * @description langageText = récupérer le contenue à utiliser en fonction la langue sléectionné
     * @description langueOption = récupérer la valeur permettant de changer 
     */
    const [allPokemon,setAllPokemonG] = useState<Pokemon[] | null>(null); 
    const limite: number[] = [0,151,251,386,493,649,721,809,905];
    const [loading,setLoading] = useState<boolean>();
    const langageText = useContext(LangageContext);
    const langueOption = useContext(LangueCurrentContext);

    /**
     * @description Récupère l'ensemble des pokemons d'un génération en renseignant le numéro de la génération correspondante
     * @param numGeneration 
     */
    const getPokemonG = async function(numGeneration: number){
        setLoading(false);
        let startG = limite[numGeneration];
        let endG = limite[numGeneration + 1];
        let pokemonG  : Pokemon[] = [];
        for(startG++ ; startG<=endG ; startG++){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${startG}/`);
            let obj: Pokemon = await response.json();
            console.log(obj);
            pokemonG.push(obj);
        }
        setAllPokemonG(pokemonG);
        setLoading(true);
    }


    return(
        <div className='PokemonFixG'>
            <div className="container">
                <div className="row mt-2">
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(0)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(1)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(2)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(3)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(4)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(5)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(6)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                    <button className="col btn btn-dark mx-2 border border-white" onClick={() => getPokemonG(7)}>
                        {langueOption?.langue ? langageText.fr.pages.pokedex.g1 : langageText.en.pages.pokedex.g1}
                    </button>
                </div>
            </div>

            <div className="container">
                {/* Double condition If ternair pour la gestion d'affichage des pokemons, du spinner et des instructions de départ*/}
                {loading ? 
                    <div className="row mt-3">
                        {allPokemon && allPokemon.map(pokemon => (
                            <div key={pokemon.id} className="col-3 d-flex flex-wrap justify-content-center mt-2">
                                <Link className="nav-link active" to={`/fil-rouge/pokemonDetail/${pokemon.id}`}>
                                    <img className="img-thumbnail bg-dark imgClickable" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} loading="lazy" alt={`Pokemon ${pokemon.id}`}/>
                                </Link>
                                <h4>{pokemon.name} n°{pokemon.id}</h4> 
                            </div>
                        ))}
                    </div>
                    : loading == false ? 
                        <div className="d-flex justify-content-center mt-5">
                            <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">{langueOption?.langue ? langageText.fr.pages.pokedex.instruction2 : langageText.en.pages.pokedex.instruction2}</span>
                            </div>
                        </div>
                        :
                        <div className='d-flex mt-5 justify-content-center'>
                            <h4>{langueOption?.langue ? langageText.fr.pages.pokedex.instruction1 : langageText.en.pages.pokedex.instruction1}</h4>
                        </div>
                }
            </div>
        </div>
    )


}

export default Pokedex;