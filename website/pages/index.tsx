import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  function OpenGit() {
    try {
      window.open("https://github.com/Dirbeq/website", "_blank")!.focus();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <button onClick={OpenGit}>github</button>
    </Layout>
  );
}