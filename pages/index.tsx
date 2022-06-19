import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Introduction from "../components/introduction";
import Portfolio from "../components/portfolio/index";
import Experience from "../components/experience";
import { introSection } from "../config";
import Contact from "../components/contact/index";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>OpenFolio - Portfolio for everyone.</title>
      <meta
        name="description"
        content="OpenFolio - an open source portfolio project for developers, designers and everyone"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {introSection.display && <Introduction />}
      <About />
      <Portfolio />
      <Experience />
      <div className="w-full border-t border-primary-100 my-20" />
      <Contact />
      <div className="w-full border-t border-primary-100 my-24" />
      <h1 className="text-center text-4xl josefinSans">UNDER CONSTRUCTION</h1>
      <p className="text-center">
        This open source portfolio is still undercontruction, To get updates
        follow{" "}
        <a
          target="_blank"
          href="https://github.com/smkh-pro/openfolio"
          rel="noreferrer"
          className="text-primary-800 underline"
        >
          this repo
        </a>
      </p>
      <div className="w-full border-t border-primary-100 my-24" />
    </main>

    {/* <footer className={styles.footer}>

    </footer> */}
  </div>
);

export default Home;
