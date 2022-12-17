import "./../assets/css/global.css";
import {useContext} from "react";
import {LangageContext, LangueCurrentContext} from "../composant/context/LangageContextProviderProps";

const Accueil: React.FC = () => {    

    /**
     * @description langageText = récupérer le contenue à utiliser en fonction la langue sléectionné
     * @description langueOption = récupérer la valeur permettant de changer 
     */
    const langageText = useContext(LangageContext);
    const langueOption = useContext(LangueCurrentContext);


    return(
        <div className='Acceuil'>
            <div className="container">
                <h2 className="my-5">{langueOption?.langue? langageText.fr.pages.accueil.titre : langageText.en.pages.accueil.titre}</h2>
                <p>{langueOption?.langue ? langageText.fr.pages.accueil.texte1 : langageText.en.pages.accueil.texte1}</p>
                <p>{langueOption?.langue ? langageText.fr.pages.accueil.texte2 : langageText.en.pages.accueil.texte2}</p>

                <p>{langueOption?.langue ? langageText.fr.pages.accueil.texte3 : langageText.en.pages.accueil.texte3}</p>   
                <ul className="mt-1">
                    <li>{langueOption?.langue ? langageText.fr.pages.accueil.li1 : langageText.en.pages.accueil.li1}</li>
                    <li>{langueOption?.langue ? langageText.fr.pages.accueil.li2 : langageText.en.pages.accueil.li2}</li>
                    <li>{langueOption?.langue ? langageText.fr.pages.accueil.li3 : langageText.en.pages.accueil.li3}</li>
                    <li>{langueOption?.langue ? langageText.fr.pages.accueil.li4 : langageText.en.pages.accueil.li4}</li>
                    <li>{langueOption?.langue ? langageText.fr.pages.accueil.li5 : langageText.en.pages.accueil.li5}</li>
                    <li>{langueOption?.langue ? langageText.fr.pages.accueil.li6 : langageText.en.pages.accueil.li6}</li>
                </ul>   
            </div>
        </div>
          
    )
}


export default Accueil;