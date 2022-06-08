import Head from 'next/head';
import styles from './layout.module.css';
import { ReactNode } from 'react';

export const siteTitle = 'Dirweb';

interface Props {
    children?: ReactNode;
}

export default function Layout({ children }: Props) {
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