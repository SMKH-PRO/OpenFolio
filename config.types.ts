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
export type { IntroSectionType, IconButtonType };

export default {};
