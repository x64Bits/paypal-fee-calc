import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {' '}
      <Head>
        <title>Calculadora PayPal de comisiones</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="PayPal Fee Calculator" />
        <meta name="robots" content="index" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
        ></link>
      </Head>{' '}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
