import style from "./PenguinCard.module.css"

export interface IPenguin {
    "id": number;
    "nickname": string;
    "description": string;
    "species_id": number;
    "island": string;
    "gender": string;
    "weight": number;
    "height": number;
    "year": number;
    "image": string;
    "assigned_to": string | null
}

interface PenguinData {
    penguin : IPenguin;
}

export const PenguinCard = ({penguin}:PenguinData ) => {
    return (
        <div className={`${style.container}`}>
            <img src={penguin.image} alt="penguin image" />
            <h2>{penguin.nickname}</h2>
            <p><b>Species ID:</b> {penguin.id}</p>
            <p> <b>Description:</b> {penguin.description}</p>
        </div>
    )
}


