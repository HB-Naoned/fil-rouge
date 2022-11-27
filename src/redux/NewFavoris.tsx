import React, {ChangeEvent, useState} from "react";

interface NewFavorisInputProps {
    addFavori(favori: string): void;
}


export const NewFavoris: React.FC<NewFavorisInputProps> = ({addFavori}) => {

    const [favori, setFavori] = useState("");

    const updateFavoris = (event:ChangeEvent<HTMLInputElement>) => {
        setFavori(event.target.value);
    }

    const addOnClique = () => {
        addFavori(favori);
        setFavori("");
    }

    return(
        <div className="col">
            <input onChange={updateFavoris} type="text" value={favori} name="favori" placeholder="Favoris"/>
            <button onClick={addOnClique}>Add Favoris</button>
        </div>
    )
}
