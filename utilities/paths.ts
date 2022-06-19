export const homePath = "/#home";
export const aboutPath = "/#about";
export const servicesPath = "/#services";
export const portfolioPath = "/#portfolio";
export const contactPath = "/#contact";

type Path = {
  href: string;
  title: string;
};

const paths: Path[] = [
  {
    href: homePath,
    title: "Home",
  },
  {
    href: aboutPath,
    title: "About",
  },
  {
    href: servicesPath,
    title: "Services",
  },
  {
    href: portfolioPath,
    title: "Portfolio",
  },
  {
    href: contactPath,
    title: "Contact",
  },
];

export default paths;
