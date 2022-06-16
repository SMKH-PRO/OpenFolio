/* eslint-disable react/jsx-props-no-spreading */
import "../styles/globals.css";
import "animate.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import type { AppProps } from "next/app";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import NavMenu from "../components/nav";

library.add(fab);
const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <NavMenu />
    <Component {...pageProps} />
  </>
);

export default MyApp;
