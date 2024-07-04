import { Button } from "../Button/Button";
import styles from "./Footer.module.css"


export function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <h2>Join our community by using our services and grow your business.</h2>
                <Button content="Try It For Free" href="/footer"/>
            </div>
        </footer>
    );
}