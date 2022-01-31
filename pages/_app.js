import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "@emotion/styled";

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider>
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ThemeProvider>
  );
}

export default MyApp;
