import styles from "./Button.module.css";

interface IButton{
    content: string;
    href: string;
}

export function Button({content, href}: IButton){
    return(
        <a className={styles.btn} href={href}>
            {content}
        </a>
    )
}