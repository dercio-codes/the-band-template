import "../styles/globals.css";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
const theme = createTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
