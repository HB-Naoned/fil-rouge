import {Action} from "./actions";

export interface FavorisState {
    favoris: string[]
}

const initialState = {
    favoris : []
}



export const favorisReducer = (state:FavorisState = initialState, action: Action) => {
    console.log('value de : '+action)
    console.log("icireducer0");
    switch(action.type){
        case "ADD_FAVORI": {
            console.log('value de : '+action)
            console.log("icireducer1");
            return {...state, favoris: [...state.favoris,action.payload]};
        }
        case "RESET_FAVORI": {
            console.log('value de : '+action)
            console.log("icireducer2");
            return {...state = initialState, favoris: []};
        }
        default:
            return state;
    }
}