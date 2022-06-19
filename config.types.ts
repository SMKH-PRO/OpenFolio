import { ElementType } from "react";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

type IconsForButton = {
  title: string;
  link?: string;
  className?: string;
};
type WithSvg = {
  Svg: ElementType;
};
type WithIcon = {
  fontAwesome: IconName;
  fontAwesomeType?: IconPrefix;
};

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
  ContactSectionType,
};

export default {};
