import { Fragment } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paths from "../../utilities/paths";
import Container from "../container";
import { generalInfo, footerSection } from "../../config";
import IconButton from "../buttons/iconButton";
import Image from "../Image";

const { socialMedia } = footerSection;
const Footer = () => (
  <div className="bg-primary-100  bg-opacity-[0.15] mt-32">
    <Container>
      <div className="py-20">
        <div className="flex justify-center items-center mb-5">
          <Image
            src={generalInfo.projectLogo}
            width={40}
            height={45}
            alt="logo"
          />
          <h1 className="m-3 text-2xl md:text-4xl   font-extrabold transition-all  duration-1000 ease-out">
            {generalInfo.projectName}
          </h1>
        </div>
        <div className="sm:block block md:flex lg:flex justify-center items-center">
          {paths.map((d, i) => (
            <Fragment key={`${d?.href || d?.title}${i}`}>
              <Link href={d.href}>
                <a
                  className="
                text-center
                p-1 
                m-3
                sm:block
                block
                md:inline
                hover:font-bold
              
                 hover:underline 
                 hover:text-primary-900"
                >
                  {d.title}
                </a>
              </Link>
              {i + 1 !== paths.length && (
                <span className="text-gray-300 text-[24px] mt-[-2px] sm:hidden hidden md:flex">
                  |
                </span>
              )}
            </Fragment>
          ))}
        </div>
        {footerSection.bioData.display && (
          <div className="flex flex-wrap md:flex sm:block justify-center items-center">
            <Link href="#home">
              <a
                className="
                text-center
                p-1 
                m-1
                sm:block
                block
                md:inline
                font-bold
                text-slate-300
                 hover:text-primary-900"
              >
                {footerSection.bioData.name}
              </a>
            </Link>

            <Link href={`mailto:${footerSection.bioData.email}`}>
              <a
                className="
                text-center
                p-1 
                m-1
                sm:block
                block
                md:inline
                font-bold
                text-slate-300
                 hover:text-primary-900"
              >
                {footerSection.bioData.email}
              </a>
            </Link>

            <Link href={`tel:${footerSection.bioData.phone}`}>
              <a
                className="
                text-center
                p-1 
                m-1
                sm:block
                block
                md:inline
                font-bold
    text-slate-300
                 hover:text-primary-900"
              >
                {footerSection.bioData.phone}
              </a>
            </Link>
          </div>
        )}
        <div className="flex flex-wrap justify-center items-center mt-5">
          {socialMedia?.map(({ link, className, ...options }, i) => (
            <a // eslint-disable-next-line react/no-array-index-key
              key={`${link || ""}_${i}`}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                className={`
              m-1 mt-0
              
              ${className || "p-3"}
              `}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...options}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-primary-100 " />
      <div className="py-7 flex justify-center items-center">
        <p className="flex"> Designed with</p>
        &nbsp; &nbsp;
        <FontAwesomeIcon
          className="text-red-500 w-[30px] ml-[-20px] absolute slowHeartbeatAnimation "
          icon={["fas", "heart"]}
        />
        &nbsp; &nbsp;
        <p className="ml-2">by</p>&nbsp;
        <Link target="_blank" href="https://github.com/SMKH-PRO/OpenFolio">
          <a target="_blank" className="text-primary-800 underline">
            {" "}
            OpenFolio{" "}
          </a>
        </Link>
        &nbsp;
        <p> team. </p>
      </div>
    </Container>
  </div>
);

export default Footer;
