import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar({}){
    return(
        <div className={styles.topnav}>
            <Link href={'/playground/sandbox'}>
                <a>SandboxLink</a>
            </Link>
        </div>
    );
}