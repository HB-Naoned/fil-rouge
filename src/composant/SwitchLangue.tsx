import {ChangeEvent, useContext, useState} from "react";
import { Link } from "react-router-dom";
import {LangageContext,LangueCurrentContext} from "./context/LangageContextProviderProps";

const SwitchLangue : React.FC = () => {

    /**
     * @description  langageText = récupérer le context pour le langue à utiliser
     */
    const langageText = useContext(LangageContext);
    const langueOption = useContext(LangueCurrentContext);


    /**
     * @description Changer la valeur de la langue 
     * @param event 
     */
    const changerLangue = (event: ChangeEvent<HTMLInputElement>) => {
        langueOption?.setLangue(!langueOption?.langue);
    };


    return(
        <div className="SwitchLangue d-flex">
            <div className="form-check form-switch">
                <label className="form-check-label">{langueOption?.langue ? langageText.fr.header.lang : langageText.en.header.lang}</label>
                <input className="form-check-input" onChange={changerLangue}  type="checkbox"></input>
            </div>
        </div>
        
    )



}


export default SwitchLangue;