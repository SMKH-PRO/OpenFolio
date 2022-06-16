import { ElementType } from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";

type SocialMedia = {
  title: string;
  link: string;
  className?: string;
};
type WithSvg = {
  svg: ElementType;
};
type WithIcon = {
  fontAwesome: IconName;
};

type SocialMediaType = (WithSvg | WithIcon) & SocialMedia; // Icon or SVG, one or the other is required.
export type { SocialMediaType };

export default {};
