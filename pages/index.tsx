import type { NextPage } from 'next'
import Head from 'next/head'

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
        <h1 className="">
          Welcome to Dzung Phan&apos;s portfolio
        </h1>
      </main>

      <footer>
        &copy; {year}, Phan Tiến Dũng
      </footer>
    </div>
  )
}

export default Home
