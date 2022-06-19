import type {
  IconButtonType,
  IntroSectionType,
  AboutSectionType,
  FeaturedSkillsType,
  ContactSectionType,
} from "./config.types";
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

const featuredSkills: FeaturedSkillsType = [
  [
    {
      fontAwesome: "node-js",
      // fontAwesomeType:"fab", //you can define font-awesome category such as fab for font-awesome brands category,  by default its "fab" in this object
      title: "Node JS",
      className: "group-hover:text-white text-primary-500",
      titleClass: "mt-2",
    },
    {
      Svg: MongoDBIcon,
      title: "MongoDB",
    },
  ],
  [
    {
      fontAwesome: "react",
      title: "React JS",
      className: "group-hover:text-white text-primary-500",
      titleClass: "mt-2",
    },
    {
      Svg: ReactNativeIcon,
      title: "React Native",
      titleClass: "mt-2",
    },
  ],
];
export const aboutSection: AboutSectionType = {
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
    featuredSkills,
    skills,
    title: "My Skills",
    heading: "I Enjoy Solving Problems With Scalable Solutions",
    btn: {
      text: "Download CV",
      display: true,
      fontAwesome: "file-download",
      fontAwesomeType: "fas",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.",
  },
};
// SECTION 1
export const introSection: IntroSectionType = {
  display: true,
  greetingMessage: "Hi There 👋 I am",
  name: "Elon Musk",
  professionPrefix: "Professional",
  profession: "Software Engineer",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean interdum consequat convallis.",
  imageLink: "/assets/images/hacker.jpg",
  namesArr: [
    "Elon Musk",
    "Software Engineer",
    "Passionate Programmer",
    "Entreprenuer",
  ],

  btn1: {
    display: true,
    text: "View Portfolio",
    // fontAwesome: "arrow-right", // optional
  },
  btn2: {
    display: true,
    text: "Hire Me",
    fontAwesome: "arrow-right", // optional
  },
};

// CONTACT SECTION

export const contactSection: ContactSectionType = {
  display: true,
  title: "Contact Me",
  heading: "HAVE A PROJECT IN MIND?",
  description:
    "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",
};

export default {};
