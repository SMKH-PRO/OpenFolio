import Container from "../container";

import IconButton from "../buttons/iconButton";
import Button from "../buttons/button";
import CardWrapper from "./cardWrapper";
import NodeJSIcon from "../svgs/nodeJSIcon";
import MongoDBIcon from "../svgs/mongoDBIcon";
import ReactIcon from "../svgs/reactIcon";
import ReactNativeIcon from "../svgs/reactNativeIcon";
import DownloadIcon from "../svgs/downloadIcon";
import { aboutSection } from "../../config";

const {
  connectWithMe: { socialMedia },
  mySkills: { skills },
} = aboutSection;

const About = () => (
  <Container className="mt-48 flex justify-between flex-wrap">
    <div className=" md:basis-full sm:basis-full basis-full  lg:basis-1/2 lg:pr-20">
      <h4 className="font-bold text-primary-700 text-2xl">ABOUT ME</h4>
      <h1 className="font-bold text-5xl max-w-[400px] mt-3">
        I design web and mobile apps
      </h1>

      <p className="text-slate-500 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
        ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.
      </p>
    </div>
    <div className=" sm:basis-full md:basis-full lg:basis-1/2 sm:mt-20 md:mt-0">
      <h1 className="font-600 text-3xl uppercase mt-3 md:mt-10">
        Connect with me
      </h1>
      <p className="text-slate-500 mt-6 max-w-[630px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
        ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet
        urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper
        tempor.
      </p>
      <div className="flex mt-6 flex-wrap">
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

    <div className="flex w-full mt-32 flex-wrap md:flex-wrap sm:flex-wrap lg:flex-nowrap  ">
      <div className="flex lg:justify-start md:justify-center sm:justify-center transition-all lg:mt-[-50px] xl:mt-[-80px] duration-1000 ease-out   columns-2 lg:basis-1/2 md:basis-full sm:basis-full ">
        <div className="transition-all duration-1000 ease-out  mt-[-50px] ">
          <CardWrapper title="Node JS">
            <NodeJSIcon
              pathProps={{
                className: " group-hover:fill-white fill-primary-500",
              }}
            />
          </CardWrapper>
          <CardWrapper title="MongoDB">
            <MongoDBIcon
              pathProps={{
                className: " group-hover:fill-white ",
              }}
            />
          </CardWrapper>
        </div>
        <div>
          <CardWrapper title="React.JS">
            <ReactIcon
              pathProps={{
                className: " group-hover:fill-white ",
              }}
            />
          </CardWrapper>
          <CardWrapper titleClass="mt-3" title="React Native">
            <ReactNativeIcon
              pathProps={{
                className: " group-hover:fill-white ",
              }}
            />
          </CardWrapper>
        </div>
      </div>
      <div className=" lg:basis-1/2 basis-full md:basis-full sm:basis-full">
        <h4 className="text-primary-800 font-bold text-xl">MY SKILLS</h4>
        <h1 className="font-bold text-5xl max-w-[600px] mt-3">
          I Enjoy Solving Problems With Scalable Solutions
        </h1>
        <div className="mt-5 flex flex-wrap ml-[-10px]">
          {skills.map(({ className, ...options }) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <IconButton className={className || "p-1.5 m-3"} {...options} />
          ))}
        </div>
        <p className="mt-5 text-slate-500 lg:max-w-[620px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
          ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit
          amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae
          semper tempor.
        </p>

        <Button className="mt-10 xl:mt-16">
          Download CV
          <DownloadIcon color="white" className="ml-2" />
        </Button>
      </div>
    </div>
  </Container>
);

export default About;
