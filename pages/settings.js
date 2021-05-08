import Head from 'next/head'
import { MdClose } from 'react-icons/md'

import { Header } from '../components/Header'
import { PercentageField } from '../components/PercentageField'

function Settings() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>Calculadora de Comisiones para PayPal | Ajustes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-5 my-5 max-w-md main-container">
        <Header actionLink="/" Icon={MdClose} />
        <h1 className="text-lg mr-16 mt-3 text-primary mb-3">
          <b>Ajustes</b>
        </h1>
        <hr className="border-separator mb-2" />
        <PercentageField />
        <hr className="border-separator mt-3" />
      </main>
    </div>
  )
}

export default Settings
