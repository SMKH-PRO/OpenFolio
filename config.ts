import type { IconButtonType } from "./config.types";
import ReactNativeIcon from "./components/svgs/reactNativeIcon";
import TypescriptIcon from "./components/svgs/typescriptIcon";
import MongoDBIcon from "./components/svgs/mongoDBIcon";
import ElectronIcon from "./components/svgs/electronIcon";
import JestIcon from "./components/svgs/jestIcon";
import NextIcon from "./components/svgs/nextIcon";

export const socialMedia: IconButtonType[] = [
  {
    title: "Connect with me on linkedin",
    fontAwesome: "linkedin", // https://fontawesome.com/v6/icons?s=brands

    link: "https://linkedin.com/in/kashanhaider",
    className: "heartbeatAnimation",
  },
  {
    title: "Github",
    fontAwesome: "github",
    link: "https://github.com/smkh-pro",
  },
  {
    title: "Facebook",
    fontAwesome: "facebook",
    link: "https://www.facebook.com/SMKH.PRO",
  },
  {
    title: "Youtube",
    fontAwesome: "youtube",
    link: "https://youtube.com/smkh-pro",
  },
  {
    title: "Twitter",
    fontAwesome: "twitter",
    link: "#",
  },
  {
    title: "Stackoverflow",
    fontAwesome: "stack-overflow",
    link: "https://stackoverflow.com/users/9877416/kashan-haider",
  },
];

const skills: IconButtonType[] = [
  {
    title: "Node.JS",
    fontAwesome: "node-js",
  },
  {
    title: "Typescript",
    Svg: TypescriptIcon,
  },
  {
    title: "React Native Mobile Apps",
    Svg: ReactNativeIcon,
    className: "p-3 m-3",
  },
  {
    title: "MongoDB",
    Svg: MongoDBIcon,
  },
  {
    title: "Electron.JS",
    Svg: ElectronIcon,
  },
  {
    title: "Next.JS",
    Svg: NextIcon,
  },
  {
    title: "Unit Testing, Jest, Cypress etc.",
    Svg: JestIcon,
  },
];

export const aboutSection = {
  title: "About Me",
  heading: "I design web and mobile apps",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.",

  connectWithMe: {
    title: "Connect with me",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit ameturna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.",
    socialMedia,
  },
  mySkills: {
    skills,
    title: "My Skills",
    heading: "I Enjoy Solving Problems With Scalable Solutions",
  },
};
export default {};
