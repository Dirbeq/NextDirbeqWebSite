import '../styles/global.css';
import Menu from '../components/menu';
import { Dookie } from '../components/dookie';
import { useEffect } from 'react';

interface Props {
    pageProps?: Props;
    Component?: any;
}

export default function App({ Component, pageProps }: Props) {
    useEffect(() => {
        if (Dookie.get("darkMode") == "true") {
            document.body.style.backgroundColor = "gray";
            document.body.style.color = "white";
        }
    }, []);
    return (
        <><Menu /><Component {...pageProps} /></>
    );
}
