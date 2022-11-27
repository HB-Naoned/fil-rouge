import { Action } from "./actions";

export interface FavorisState {
    favoris: string[]
}

const initialState = {
    favoris : []
}



export const favorisReducer = (state:FavorisState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_FAVORI": {
            return {...state, favoris: [...state.favoris,action.payload]};
        }
        default:
            return state;
    }
}