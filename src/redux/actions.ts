export type Action = {type: string, payload: string}

export const addFavori = (favori: string):Action => ({
    type: "ADD_FAVORI", payload: favori
})

export const resetFavori = (favori: string):Action => ({
    type: "RESET_FAVORI", payload: favori
})