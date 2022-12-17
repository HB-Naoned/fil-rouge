import React, { createContext, useState } from "react";
import { contextTexte } from "./contentTexte"; 


// const [langue, setLangue] = useState(false);

/**
 * @description Pour connaître la langue selectionné
 */
// export type LangueCurrent = {
//     contentLangue : boolean
// }

type LangueCurrentType = {
    langue : boolean | null
    setLangue : React.Dispatch<React.SetStateAction<boolean | null>>
}

/**
 * @description Création du context en utilisant le LangageCurrentType
 */
export const LangueCurrentContext = createContext<LangueCurrentType | null>(null)
export const LangueContexteProvider = ({children}: LangageContexteProviderProps) => { 
    const [langue, setLangue] = useState<boolean | null>(false);
    return <LangueCurrentContext.Provider value={{langue, setLangue}}>
                {children}
            </LangueCurrentContext.Provider>
}

//----------------------------

/**
 * @description [GLOBAL] : étendre l'accès à la variable aux composants enfants
 */
type LangageContexteProviderProps =  {
    children: React.ReactNode
}

//----------------------------

/**
 * @description Création du context en utilisant la variable importé contextTexte
 */
export const LangageContext = createContext(contextTexte)
export const LangageContexteProvider = ({children}: LangageContexteProviderProps) => { 
    return <LangageContext.Provider value={contextTexte}>
                {children}
            </LangageContext.Provider>
}