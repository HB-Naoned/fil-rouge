import "./assets/css/global.css";

const Accueil: React.FC = () => {    
    
    return(
        <div className='Acceuil'>
            <div className="container">
                <h2>Page Accueil</h2>
                <p> 
                    Bienvenu ! <br />
                    Vous vous trouvez actuellement dans une page d'entrainement pour un projet fil-rouge. <br />
                    Cette page contient un exemple d'utilisation de l'API : PokeAPI v2
                </p>      
            </div>
        </div>
          
    )
}


export default Accueil;