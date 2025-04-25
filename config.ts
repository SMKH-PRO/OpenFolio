import type {
  IconButtonType,
  IntroSectionType,
  AboutSectionType,
  FeaturedSkillsType,
  ContactSectionType,
  PortfolioSectionType,
  ExperienceSectionType,
  FooterSectionType,
  GeneralInfoType,
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
  display: true,
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

export const portfolioSection: PortfolioSectionType = {
  display: true,
  title: "Creative Work",
  heading: "Recent Projects",
  projects: [
    {
      title: "Mobile UI Design",
      description:
        "Dolar repellendus temporibus Dolar repellendus temporibus Dolar repellendus temporibus Dolar repellendus temporibus Dolar repellendus temporibus Dolar repellendus temporibus...",
      image: [
        "/assets/images/portfolio/portfolio-1.jpg",
        "/assets/images/portfolio/portfolio-1.jpg",
        "/assets/images/portfolio/portfolio-1.jpg",
        "/assets/images/portfolio/portfolio-1.jpg",
      ],
      link: "https://example.com/project1",
    },
    {
      title: "Mobile UI Design",
      description: "Dolar repellendus temporibus...",
      image: ["/assets/images/portfolio/portfolio-2.jpg"],
      link: "https://example.com/project2",
    },
    {
      title: "Mobile UI Design",
      description: "Dolar repellendus temporibus...",
      image: ["/assets/images/portfolio/portfolio-3.jpg"],
      link: "https://example.com/project3",
    },
    {
      title: "Mobile UI Design",
      description: "Dolar repellendus temporibus...",
      image: ["/assets/images/portfolio/portfolio-4.jpg"],
      link: "https://example.com/project4",
    },
    {
      title: "Mobile UI Design",
      description: "Dolar repellendus temporibus...",
      image: ["/assets/images/portfolio/portfolio-5.jpg"],
      link: "https://example.com/project5",
    },
    {
      title: "Mobile UI Design",
      description: "Dolar repellendus temporibus...",
      image: ["/assets/images/portfolio/portfolio-6.jpg"],
      link: "https://example.com/project6",
    },
  ],
};

export const experienceSection: ExperienceSectionType = {
  display: true,
  title: "Education & Experience",
  heading: "My Resume",
  description:
    "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.",

  experiences: [
    {
      title: "Software Engineer III",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
      org: "Google",
      location: "New York",
      fromYear: "2021",
      toYear: "Present",
    },
    {
      title: "Software Engineer II",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
      org: "Airbnb",
      orgLink: "https://www.airbnb.com/",
      location: "Remote",
      fromYear: "2020",
      toYear: "2021",
    },
    {
      title: "Software Engineer I",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
      org: "Nextflix",
      location: "Pakistan",
      fromYear: "2018",
      toYear: "2019",
    },
    {
      title: "Software Engineer I",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
      org: "Meta",
      location: "Singapore",
      fromYear: "2017",
      toYear: "2018",
    },
    {
      title: "Bachelor's Degree",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.",
      org: "University Of London",
      orgLink: "https://london.ac.uk/",
      location: "Remote",
      fromYear: "2021",
      toYear: "2024",
    },
  ],
};

export const footerSection: FooterSectionType = {
  display: true,
  socialMedia: socialMedia.slice(1, 5),
  bioData: {
    display: false,
    name: "Kashan Haider",
    email: "contact@KashanHaider.com",
    phone: "+1 (567)-257-8716",
  },
};

export const generalInfo: GeneralInfoType = {
  projectName: "OpenFolio",
  seoTitle: "OpenFolio - Open Source Portfolio for everyone.",
  seoKeywords: "Open Source Portfolio, portfolio, openfolio",
  seoDescription:
    "OpenFolio - an open source portfolio project for developers, designers and everyone",
  projectLogo: "/assets/images/avatar.png",
  resumeURL: "https://mutualfilesharing.com/UploadedFiles/exampleResume.pdf",
};

export default {};
