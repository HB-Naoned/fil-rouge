import {ChangeEvent, useContext, useState} from "react";
import { Link } from "react-router-dom";
import {LangageContext,LangueCurrentContext} from "./context/LangageContextProviderProps";

const Header : React.FC = () => {

    /**
     * @description  langageText = récupérer le context pour le langue à utiliser
     */
    const langageText = useContext(LangageContext);
    const langueOption = useContext(LangueCurrentContext);


    return(
        <div className="Header d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" to="/fil-rouge/">{langueOption?.langue ? langageText.fr.header.p1 : langageText.en.header.p1}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/fil-rouge/generation">{langageText.selectedLang ? langageText.fr.header.p2 : langageText.en.header.p2}</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/fil-rouge/pokemonFav">{langageText.selectedLang ? langageText.fr.header.p3 : langageText.en.header.p3}</Link>
                </li>
            </ul>
        </div>
    )



}


export default Header;