/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import "animate.css";
import type { AppProps } from "next/app";
import NavMenu from "../components/nav";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <NavMenu />
    <Component {...pageProps} />
  </>
);

export default MyApp;
