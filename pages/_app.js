import Layout from "../comps/Layout"; // Поменяйте путь на правильный
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
