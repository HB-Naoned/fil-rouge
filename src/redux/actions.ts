export type Action = {type: "ADD_FAVORI", payload: string}

export const addFavori = (favori: string):Action => ({
    type: "ADD_FAVORI", payload: favori
})