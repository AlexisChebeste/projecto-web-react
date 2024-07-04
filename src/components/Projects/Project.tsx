import { IProject } from "../../types/project";
import styles from "./Project.module.css"

export function Project({image, title, category}: IProject) {
    return (
        <div className={styles.projectItem}>
            <img src={image} />
            <h3>{title}</h3>
            <p>{category}</p>
        </div>
    );
}
