import Layout from '../components/Layout.js'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    )
}

export default MyApp
