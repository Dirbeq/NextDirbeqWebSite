import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

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
      <section className={utilStyles.headingMd}>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <button onClick={OpenGit}>github</button>
    </Layout>
  );
}