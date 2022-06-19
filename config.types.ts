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
  title: string;
  heading: string;
  description: string;
  connectWithMe: {
    title: string;
    description: string;
    socialMedia: IconButtonType[];
  };
  mySkills: {
    featuredSkills: FeaturedSkillsType;
    skills: IconButtonType[];
    title: string;
    heading: string;
    btn: BtnType;
    description: string;
  };
};

type ContactSectionType = {
  display: boolean;
  title: string;
  heading?: string;
  description?: string;
};

export type {
  IntroSectionType,
  IconButtonType,
  AboutSectionType,
  FeaturedSkillsType,
  ContactSectionType,
};

export default {};
