import { IFaqItem } from "../../types/faqItem";
import styles from "./FAQ.module.css";
import stylesItem from "./FAQs.module.css";


export function FAQItem({question, answer}: IFaqItem) {
    return (
        <div className={stylesItem.faqsItem}>
            <details className={styles.details}>
                <summary className={styles.summary}>{question}</summary>
                <p>{answer}</p>
            </details>
        </div>
    );
}
