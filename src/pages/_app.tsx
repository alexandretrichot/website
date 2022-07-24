import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alexandre TRICHOT - Fullstack Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
