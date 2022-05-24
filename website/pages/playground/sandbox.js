import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/sandbox.module.css'


export default function Sandbox() {
    return (<Layout>
        <Head>
            <title>Sandbox</title>
        </Head>
        <h1>Zone de test</h1>
        <Link href={'https://dev.to/webdeasy/top-20-css-buttons-animations-f41'}>
            <a><button className={styles.button}>
                button
            </button></a>
        </Link>
    </Layout>
    );
}