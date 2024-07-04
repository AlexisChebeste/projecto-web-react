import { ITeammate } from "../types/teammate";

export function Teammate({image, name, area, description}: ITeammate) {
    return (
        <div className="team-item">
            <img src={image} />
            <h3>{name}</h3>
            <p>{area}</p>
            <p>{description}</p>
        </div>
    );
}
