import type { SocialMediaType, IntroSectionType } from "./config.types";

export const socialMedia: SocialMediaType[] = [
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
  hireMeButton: {
    display: true,
    text: "Hire Me",
    fontAwesome: "arrow-right", // optional
  },
  viewPortfolioButton: {
    display: true,
    text: "View Portfolio",
    // fontAwesome: "arrow-right", // optional
  },
};

export default {};
