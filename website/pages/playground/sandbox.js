import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/sandbox.module.css'


export default function Sandbox() {
    return (<Layout>
        <Head>
            <title>Sandbox</title>
        </Head>
        <button className={styles.button} onClick={() => {
            document.body.style.backgroundColor = 'gray';
            document.body.style.color = 'white';
        }}>Make background gray</button>
        <button className={styles.button} onClick={() => {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }}>Make background white</button>
        <p>text</p>
    </Layout>
    );
}