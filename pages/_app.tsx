import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <a href="#maincontent" className="skip-link">
      Перейти к контенту
    </a>

    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
