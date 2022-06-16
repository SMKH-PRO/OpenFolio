import { ElementType } from "react";
import LinkedinIcon from "./components/svgs/linkedinIcon";
import GithubIcon from "./components/svgs/githubIcon";
import FBIcon from "./components/svgs/fbIcon";
import youtubeIcon from "./components/svgs/youtubeIcon";
import TwitterIcon from "./components/svgs/twitterIcon";
import StackoverflowIcon from "./components/svgs/stackoverflowIcon";

type SocialMediaType = {
  name: string;
  Svg: ElementType;
  link: string;
};

export const socialMedia: SocialMediaType[] = [
  {
    name: "LinkedIn",
    Svg: LinkedinIcon,
    link: "https://linkedin.com/in/kashanhaider",
  },
  {
    name: "Github",
    Svg: GithubIcon,
    link: "https://github.com/smkh-pro",
  },
  {
    name: "Facebook",
    Svg: FBIcon,
    link: "https://www.facebook.com/SMKH.PRO",
  },
  {
    name: "Youtube",
    Svg: youtubeIcon,
    link: "https://youtube.com/smkh-pro",
  },
  {
    name: "Twitter",
    Svg: TwitterIcon,
    link: "#",
  },
  {
    name: "Stackoverflow",
    Svg: StackoverflowIcon,
    link: "https://stackoverflow.com/users/9877416/kashan-haider",
  },
];

export default {};
