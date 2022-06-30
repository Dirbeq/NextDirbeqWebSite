import Link from "next/link";
import styles from './menu.module.css';

export default function Menu({}){
    function StopAllTimeouts() {
        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id);
        }
    }
    function openMenu() {
        document.getElementById("menu")!.style.width = "250px";
        
    }
    function closeMenu() {
        document.getElementById("menu")!.style.width = "0";
    }
    return(
        <><div id="menu" className={styles.navbar} onClick={StopAllTimeouts}>
            <Link href={'/'}>
                <a>🏠</a>
            </Link>
            <Link href={'/playground/sandbox'}>
                <a>Sandbox</a>
            </Link>
            <Link href={'/playground/api'}>
                <a>API test</a>
            </Link>
            <a id="closeMenuButton" className={styles.closeMenu} onClick={closeMenu}>X</a>
        </div>
        <div id="menuButton" className={styles.openMenu} onClick={openMenu}></div>
        </>
    );
}