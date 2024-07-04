import { ITeammate } from "../../types/teammate";
import styles from "./Teammate.module.css"

export function Teammate({image, name, area, description}: ITeammate) {
    return (
        <div className={styles.teamItem}>
            <img src={image} />
            <h3>{name}</h3>
            <p>{area}</p>
            <p>{description}</p>
        </div>
    );
}
