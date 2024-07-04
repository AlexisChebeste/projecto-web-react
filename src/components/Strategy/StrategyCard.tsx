import { IStrategyCard } from "../../types/strategyCard";
import styles from "./StrategyCard.module.css"

export function StrategyCard({id, title, description}: IStrategyCard) {
    return (
    <div className={styles.strategyCard}>
        <div className={styles.order}>{`0${id}`}</div>
        <div className="info">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </div>
    );
}
