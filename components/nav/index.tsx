import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import useScrollPosition from "../../hooks/useScrollPosition";
import Container from "../container";
import paths from "../../utilities/paths";
import DownloadResumeBtn from "./downloadBtn";
import MenuIcon from "../svgs/menuIcon";
import theme from "../../theme.json";
import XIcon from "../svgs/xIcon";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router: NextRouter = useRouter();
  const scrollPosition: number = useScrollPosition();
  const isScrolled: boolean = scrollPosition > 30;

  useEffect(() => {
    if (window?.innerWidth >= parseInt(theme?.screens?.md, 10)) {
      // by default menu is visible on large screens.
      setMenuOpen(true);
    }
  }, []);
  return (
    <nav
      className={`${
        isScrolled ? "bg-white bg-opacity-70  shadow-md" : ""
      } top-0 p-2  w-full sticky transition-all  duration-1000 ease-out backdrop-blur-md z-50`}
    >
      <Container
        paddingClass="sm:px-1"
        className="md:flex block items-center justify-between"
      >
        <div
          className={`flex align-center justify-between items-center ${
            menuOpen ? "border-b-2 pb-2 md:border-b-0 md:pb-0" : ""
          }`}
        >
          <div className="flex align-center justify-center items-center">
            <Image src="/assets/images/avatar.png" width={40} height={45} />
            <h1 className="m-3 text-2xl md:text-3xl   font-extrabold transition-all  duration-1000 ease-out">
              OpenFolio
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="block md:hidden hover:drop-shadow-lg mr-1"
          >
            {menuOpen ? (
              <XIcon className="animate__animated animate__rotateIn" />
            ) : (
              <MenuIcon className="animate__animated animate__jackInTheBox" />
            )}
          </button>
        </div>
        {menuOpen && (
          <span>
            <DownloadResumeBtn className="md:hidden flex w-full mt-4 animate__animated animate__faster animate__fadeInDown" />

            <ul className="block md:flex">
              {paths.map((path) => (
                <li
                  key={path.href}
                  className="lg:mx-6 md:mx-4 mx-2 my-4 md:my-0 animate__animated animate__faster animate__fadeInDown"
                >
                  <Link href={path.href}>
                    <a
                      className={`${
                        router.pathname === path.href
                          ? "text-primary-500 font-bold"
                          : ""
                      }`}
                    >
                      {path.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        )}
        <DownloadResumeBtn className="animate__animated animate__fadeIn hidden md:flex" />
      </Container>
    </nav>
  );
};

export default NavMenu;
