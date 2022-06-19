import { ElementType } from "react";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

type IconsForButton = {
  title: string;
  link?: string;
  className?: string;
};

type FeaturedSkillElem = {
  title: string;
  className?: string;
  titleClass?: string;
};
export type WithSvg = {
  Svg: ElementType;
};
export type WithIcon = {
  fontAwesome: IconName;
  fontAwesomeType?: IconPrefix;
};

type FeaturedSkillType = (WithSvg | WithIcon) & FeaturedSkillElem;

type IconButtonType = (WithSvg | WithIcon) & IconsForButton; // Icon or SVG, one or the other is required.

type BtnType = {
  display: boolean;
  text: string;
  fontAwesome?: IconName;
  fontAwesomeType?: IconPrefix;
};

type IntroSectionType = {
  display: boolean;
  greetingMessage: string;
  name: string;
  professionPrefix: string;
  profession: string;
  description: string;
  imageLink: string;
  namesArr: string[];
  btn1: BtnType;
  btn2: BtnType;
};
type FeaturedSkillsType = [
  [FeaturedSkillType, FeaturedSkillType],
  [FeaturedSkillType, FeaturedSkillType]
];

type AboutSectionType = {
  display: boolean;
  title?: string | "About Me";
  heading?: string;
  description?: string;
  connectWithMe: {
    title: string | "Connect with me";
    description: string;
    socialMedia: IconButtonType[];
  };
  mySkills: {
    featuredSkills: FeaturedSkillsType;
    skills: IconButtonType[];
    title: string | "My Skills";
    heading: string;
    btn: BtnType;
    description: string;
  };
};

type ContactSectionType = {
  display: boolean;
  title: string | "Contact Me";
  heading?: string | "HAVE A PROJECT IN MIND?";
  description?: string;
};

type Project = {
  title?: string;
  description?: string;
  image: string;
};
type PortfolioSectionType = {
  display: boolean;
  title?: string | "Creative Work";
  heading?: string | "Recent Projects";
  projects: Project[];
};

export type ExperienceType = {
  title: string;
  description: string;
  org?: string;
  orgLink?: string;
  location?: string | "Remote";
  fromYear?: string;
  toYear?: string;
};
type ExperienceSectionType = {
  display: boolean;
  title: string | "Education & Experience";
  heading: string | "My Resume";
  description: string;
  experiences: ExperienceType[];
};
type FooterSectionType = {
  display: boolean;
  socialMedia: IconButtonType[];
  bioData: {
    display: boolean;
    name: string;
    email: string;
    phone: string;
  };
};
type GeneralInfoType = {
  projectName: string | "OpenFolio";
  seoTitle: string | "OpenFolio - Portfolio for everyone.";
  seoDescription: string;
  projectLogo: string;
  resumeURL: string;
};
export type {
  IntroSectionType,
  IconButtonType,
  AboutSectionType,
  FeaturedSkillsType,
  ContactSectionType,
  PortfolioSectionType,
  ExperienceSectionType,
  FooterSectionType,
  GeneralInfoType,
};

export default {};
