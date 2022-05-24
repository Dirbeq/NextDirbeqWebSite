import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";
import styles from '../../styles/api.module.css';

export default function Api() {
    const callAPI = async () => {
        try {
            document.getElementById("warNumber").innerHTML = ". . .";
            const res = await fetch(
                `https://war-service-live.foxholeservices.com/api/worldconquest/war`
            );
            const data = await res.json();
            console.log(data);

            document.getElementById("warNumber").innerHTML = JSON.stringify(data);
        } catch (err) {
            console.log(err);
        }
    };

    const clickGitApi = () =>{
        try {
            window.open("https://github.com/public-apis/public-apis", '_blank').focus();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Layout>
            <Head>
                <title>Api</title>
            </Head>
            <button className={styles.button} onClick={callAPI}>Make API Call</button>
            <p id="warNumber" className={styles.resultapi}></p>
            <button className={styles.button} onClick={clickGitApi}>Free Api</button>
        </Layout>
    );
}