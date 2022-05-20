import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar({}){
    return(
        <div className={styles.navbar}>
            <Link href={'/playground/sandbox'}>
                <a>Sandbox</a>
            </Link>
            <Link href={'/'}>
                <a>^</a>
            </Link>
            <Link href={'/playground/api'}>
                <a>API test</a>
            </Link>
        </div>
    );
}