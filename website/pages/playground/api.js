import Layout from "../../components/layout";

export default function api() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://war-service-live.foxholeservices.com/api/worldconquest/war`
            );
            const data = await res.json();
            console.log(data);
            document.getElementById("warNumber").innerHTML = data.warNumber;
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Layout>
        <div>
            <main>
                <button onClick={callAPI}>Make API Call</button>
                <p id="warNumber"></p>
            </main>
        </div></Layout>
    );
}