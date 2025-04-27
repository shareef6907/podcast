import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Podcast Platform</title>
        <meta name="description" content="A platform for podcasts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Podcast Platform</h1>
        <p>Your favorite podcasts, all in one place.</p>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Podcast Platform</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
} 