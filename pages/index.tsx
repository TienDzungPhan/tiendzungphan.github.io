import type { NextPage } from 'next'
import Head from 'next/head'
import Intro from "components/modules/Intro"
import SocialMedia from 'components/modules/SocialMedia'

const year = (new Date()).getFullYear()

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dzung Phan</title>
        <meta name="description" content="Dzung Phan's portfolio" />
        <link rel="icon" href="favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      </Head>
      <main>
        <Intro />
      </main>

      <footer>
        <div className="copyright">
          &copy; {year}, Phan Tiến Dũng
        </div>
        <SocialMedia />
      </footer>
    </div>
  )
}

export default Home
