import Head from "next/head";
import Layout from "../../components/layout";
import styles from '../../styles/api.module.css';

export default function Api() {
    const callAPI = async () => {
        try {
            document.getElementById("ApiWarButton").disabled = true;
            setTimeout(function () { document.getElementById("ApiWarButton").disabled = false; }, 3000);

            document.getElementById("ApiResult").innerHTML = ". . .";
            document.getElementById("PWarNumber").innerHTML = ". . .";
            document.getElementById("StartTime").innerHTML = ". . .";

            const res = await fetch(
                `https://war-service-live.foxholeservices.com/api/worldconquest/war`
            );
            const data = await res.json();
            const date = new Date(data["conquestStartTime"]);

            document.getElementById("PWarNumber").innerHTML = "War number : " + data["warNumber"];
            document.getElementById("StartTime").innerHTML = "Start time : " + date.toLocaleString();
            document.getElementById("ApiResult").innerHTML = JSON.stringify(data);

        } catch (err) {
            console.log(err);
        }
    };

    const clickGitApi = () => {
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
            <button id="ApiWarButton" className={styles.button} onClick={callAPI}>Make API Call</button>
            <div id="WarApiDiv" className={styles.WarApiDiv} >
                <p id="PWarNumber"></p>
                <p id="StartTime"></p>
                <p id="ApiResult" className={styles.resultapi}></p>
            </div>
            <button className={styles.button} onClick={clickGitApi}>Free Api</button>
            <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
            <script type="IN/Share" data-url="https://www.linkedin.com/company/hexagone-groupe/"></script>

            <script src="https://platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
            <script type="IN/FollowCompany" data-id="10432356" data-counter="bottom"></script>
        </Layout>
    );
}