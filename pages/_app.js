import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="dns-prefetch" href="/videos" />
        <link rel="preconnect" href="/videos" />
        <link rel="preload" href="/videos/Podcast header resized .mp4" as="video" type="video/mp4" fetchpriority="high" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp; 