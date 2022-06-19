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

type HireMeButtonType = {
  display: boolean;
  text: string;
  fontAwesome?: IconName;
};

type ViewPortfolioButtonType = {
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
  hireMeButton: HireMeButtonType;
  viewPortfolioButton: ViewPortfolioButtonType;
};
export type { IntroSectionType, IconButtonType };

export default {};
