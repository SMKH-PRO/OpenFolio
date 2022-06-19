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
export type { IconButtonType };

export default {};
