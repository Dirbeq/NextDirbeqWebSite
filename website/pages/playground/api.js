import Head from "next/head";
import Layout from "../../components/layout";

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
    return (
        <Layout>
            <Head>
                <title>Api</title>
            </Head>
            <div>
                <main>
                    <button onClick={callAPI}>Make API Call</button>
                    <p id="warNumber"></p>
                </main>
            </div>
        </Layout>
    );
}