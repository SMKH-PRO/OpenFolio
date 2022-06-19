import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Introduction from "../components/introduction";
import Portfolio from "../components/portfolio/index";
import Experience from "../components/experience";
import {
  contactSection,
  introSection,
  generalInfo,
  footerSection,
  experienceSection,
  aboutSection,
  portfolioSection,
} from "../config";
import Contact from "../components/contact/index";
import Footer from "../components/footer";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>{generalInfo.seoTitle}</title>
      <meta name="description" content={generalInfo.seoDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {introSection.display && <Introduction />}
      {aboutSection.display && <About />}
      {portfolioSection.display && <Portfolio />}
      {experienceSection.display && (
        <>
          <Experience />
          <div className="w-full border-t border-primary-100 my-20" />
        </>
      )}
      {contactSection.display && <Contact />}
      {footerSection.display && <Footer />}
    </main>

    {/* <footer className={styles.footer}>

    </footer> */}
  </div>
);

export default Home;
