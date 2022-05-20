import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar';

const name = 'Dirbeq';
export const siteTitle = 'Dirweb';

export default function Layout({ children, home }) {
    return (
        
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Dirbeq website"
                />
            </Head>
            <main>{children}</main>
        </div>
    );
}