import { IServiceItem } from "../../types/servicesItem";
import styles from "./Service.module.css"

export function ServiceItem({image, title, description}: IServiceItem) {
    return (
        <div className={styles.serviceItem}>
            <img src={image}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="/">Learn More</a>
        </div>
    );
}
