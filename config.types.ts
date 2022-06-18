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
type IntroSectionType = {
  display: boolean,
  greetingMessage: string,
  name: string,
  professionPrefix: string,
  profession: string,
  description: string,
  imageLink: string,
  namesArr: string[]
}
export type { SocialMediaType, IntroSectionType };

export default {};
