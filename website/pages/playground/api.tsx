import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/api.module.css";

export default function Api() {
    const callAPI = async () => {
        try {
            const btn = document.getElementById("ApiWarButton") as HTMLButtonElement | null;
            btn!.disabled = true;

            setTimeout(function () { btn!.disabled = false; }, 3000);

            document.getElementById("ApiResult")!.innerHTML = ". . .";
            document.getElementById("PWarNumber")!.innerHTML = ". . .";
            document.getElementById("StartTime")!.innerHTML = ". . .";

            const res = await fetch(`https://war-service-live.foxholeservices.com/api/worldconquest/war`);
            const data = await res.json();
            const date = new Date(data["conquestStartTime"]);

            document.getElementById("PWarNumber")!.innerHTML = "War number : " + data["warNumber"];
            document.getElementById("StartTime")!.innerHTML = "Start time : " + date.toLocaleString();
            document.getElementById("ApiResult")!.innerHTML = JSON.stringify(data);
        } catch (err) {
            console.log(err);
        }
    };

    const callMyAPI = async () => {
            const btn = document.getElementById("NextApiBtn") as HTMLButtonElement | null;
            btn!.disabled = true;

            setTimeout(function () { btn!.disabled = false; }, 3000);

            document.getElementById("NextApiResult")!.innerHTML = ". . .";

            const res = await fetch(`http://localhost:3000/api/test`);
            const data = await res.json();

            document.getElementById("NextApiResult")!.innerHTML = JSON.stringify(data);
        try {
        } catch (err) {
            console.log(err);
        }
    };

    const clickGitApi = async () => {
        try {
            window.open("https://github.com/public-apis/public-apis", "_blank")!.focus();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <Layout>
            <Head>
                <title>Api</title>
            </Head>
            <div id="WarApiDiv" className={styles.WarApiDiv}>
                <button id="ApiWarButton" className={styles.button} onClick={callAPI}>
                    Make API Call
                </button>
                <p id="PWarNumber"></p>
                <p id="StartTime"></p>
                <p id="ApiResult" className={styles.resultApi}></p>
            </div>
            <div className={styles.WarApiDiv}>
                <button id="NextApiBtn" className={styles.button} onClick={callMyAPI}>
                    Test Nextjs api call
                </button>
                <span id="NextApiResult" className={styles.resultApi} ></span>
            </div>
            <button className={styles.button} onClick={clickGitApi}>
                Free Api 📎
            </button>
        </Layout>
    );
}