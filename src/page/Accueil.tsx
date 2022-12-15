import "./../assets/css/global.css";

const Accueil: React.FC = () => {    
    
    return(
        <div className='Acceuil'>
            <div className="container">
                <h2 className="mt-5">Page Accueil</h2>
                <p> <br />
                    Bienvenu ! <br />
                    Vous vous trouvez actuellement dans une page d'entrainement pour un projet fil-rouge pour découvrir React sous format TypeScript. <br />
                    Cette page contient un exemple d'utilisation de l'API : PokeAPI v2.<br /> <br /><br />

                    Ce site static présent les fonctionnalités suivantes : 
                </p>   
                <ul className="mt-1">
                    <li>Un router sur l'ensemble des pages ;</li>
                    <li>Un ensemble de 4 pages : "Accueil", "Pokedex", "DetailPokemon" et "Favoris";</li>
                    <li>La page DetailPokemon n'est accessible seulement en cliquant sur l'un des pokemons de la page Pokedex</li>
                    <li>Un système de “bookmarks” à l’aide de Redux sur la page "Favoris" ;</li>
                </ul>   
            </div>
        </div>
          
    )
}


export default Accueil;