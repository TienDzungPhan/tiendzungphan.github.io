import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from "components/modules/Intro"

const year = (new Date()).getFullYear()

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dzung Phan</title>
        <meta name="description" content="Dzung Phan's portfolio" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <Intro />
      </main>

      <footer>
        &copy; {year}, Phan Tiến Dũng
      </footer>
    </div>
  )
}

export default Home
