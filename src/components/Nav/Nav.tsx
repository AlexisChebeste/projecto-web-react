import logo from '../../assets/images/logo.png'
import styles from "./Nav.module.css"

export function Nav(){
    return (
        <nav className={styles.nav}>
            <div className={`container ${styles.navContainer}`}>
                <div className="logo">
                    <img src={logo} alt="Logo image" />
                </div>
                <span className={styles.btnNav} id='btn-menu'>Menu</span>
                <ul>
                    <li><a href="/">Demos</a></li>
                    <li><a href="/">Pages</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Blocks</a></li>
                    <li><a href="/">Documentation</a></li>
                    <span className={styles.btnNav}>Close</span>
                </ul>
            </div>
        </nav>
    )
}