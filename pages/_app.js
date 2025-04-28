import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="https://storage.googleapis.com" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <link rel="preload" href="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" as="video" type="video/mp4" fetchpriority="high" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp; 