import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar({}){
    function StopAllTimeouts() {
        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id);
        }
    }
    
    return(
        <div className={styles.navbar} onClick={StopAllTimeouts} >
            <Link href={'/playground/sandbox'}>
                <a>Sandbox</a>
            </Link>
            <Link href={'/'}>
                <a>🏠</a>
            </Link>
            <Link href={'/playground/api'}>
                <a>API test</a>
            </Link>
        </div>
    );
}