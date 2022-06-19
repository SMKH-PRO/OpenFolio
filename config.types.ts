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

type IntroSectBtnType = {
  display: boolean;
  text: string;
  fontAwesome?: IconName;
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
  btn1: IntroSectBtnType;
  btn2: IntroSectBtnType;
};
export type { IntroSectionType, IconButtonType };

export default {};
