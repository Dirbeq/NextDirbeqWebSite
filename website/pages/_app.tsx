import '../styles/global.css';
import Navbar from '../components/navbar';
import { Dookie } from '../components/dookie';
import { useEffect } from 'react';

interface Props {
    pageProps?: Props;
    Component?: any;
}

export default function App({ Component, pageProps }: Props) {
    useEffect(() => {
        if (Dookie.get("DarkMode") == "true") {
            document.body.style.backgroundColor = "gray";
        }
    }, []);
    return (
        <><Navbar /><Component {...pageProps} /></>
    );
}
