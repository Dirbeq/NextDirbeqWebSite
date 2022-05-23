import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';

export const siteTitle = 'Dirweb';

export default function Layout({ children, home }) {
    return (
        
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Website"
                />
            </Head>
            <main>{children}</main>
        </div>
    );
}