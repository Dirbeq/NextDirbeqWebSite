import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/sandbox.module.css'
import utilStyles from '../../styles/utils.module.css'
import { Dookie } from '../../components/dookie';
import { Notif } from '../../components/notif';

export default function Sandbox() {

    return (<Layout>
        <Head>
            <title>Sandbox</title>
        </Head>
        <div className={utilStyles.box}>
            <button className={styles.button} onClick={() => {
                document.body.style.backgroundColor = "gray";
                document.body.style.color = "#fff";
                Dookie.set("darkMode", "true", 1);
                Dookie.set("cookies?", "true", 1);
            }}>🌑</button>
            <button className={styles.button} onClick={() => {
                console.log(Dookie.getAll());
            }
            }>get all cookie</button>
            <button className={styles.button} onClick={() => {
                console.log(Dookie.deleteAll());
            }
            }>delete cookie</button>
            <button className={styles.button} onClick={() => {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
                Dookie.set("DarkMode", "false", 1);
            }}>☀</button></div>
        <div className={utilStyles.box}>
            <button className={styles.button} onClick={() => {
                Notif.sendNotif("title", "body", "../favicon.ico", "");
            }}>send notification</button>
        </div>
        <div><iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6943497623853002752" height="726" width="504" title="Post intégré"></iframe></div>
        <div className={utilStyles.box}>
            <script src="https://platform.linkedin.com/in.js"></script>
            <script
                type="IN/Share"
                data-url="https://www.linkedin.com/company/hexagone-groupe/"
            ></script>
            <script src="https://platform.linkedin.com/in.js"></script>
            <script
                type="IN/FollowCompany"
                data-id="10432356"
                data-counter="bottom"
            ></script>
        </div>
    </Layout>
    );
}