import Container from "../container";
import { socialMedia } from "../../config";
import IconButton from "../buttons/iconButton";
import Button from "../buttons/button";
import CardWrapper from "./cardWrapper";
import NodeJSIcon from "../svgs/nodeJSIcon";
import MongoDBIcon from "../svgs/mongoDBIcon";
import ReactIcon from "../svgs/reactIcon";
import ReactNativeIcon from "../svgs/reactNativeIcon";

const About = () => (
  <Container className="mt-48 flex justify-between flex-wrap">
    <div className=" sm:basis-full md:basis-1/2 pr-20">
      <h4 className="font-bold text-primary-700 text-2xl">ABOUT ME</h4>
      <h1 className="font-bold text-5xl max-w-[400px] mt-3">
        I design web and mobile apps
      </h1>
      <p className="text-slate-500 mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
        ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.
      </p>
    </div>
    <div className=" sm:basis-full md:basis-1/2 sm:mt-20 md:mt-0">
      <h1 className="font-600 text-3xl uppercase mt-3">Connect with me</h1>
      <p className="text-slate-500 mt-6 max-w-[630px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
        ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet
        urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper
        tempor.
      </p>
      <div className="flex mt-8">
        {socialMedia?.map((social, i) => (
          <a href={social.link} target="_blank" rel="noreferrer">
            <IconButton
              title={social.name}
              className={i !== 0 ? "ml-5" : ""}
              Svg={social.Svg}
            />
          </a>
        ))}
      </div>
    </div>

    <div className="flex w-full mt-32 ">
      <div className="flex  transition-all mt-[-50px] duration-1000 ease-out   columns-2 basis-1/2 md:basis-full ">
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
      <div className=" basis-1/2 md:basis-full">
        <h4 className="text-primary-800 font-bold text-xl">MY SKILLS</h4>
        <h1 className="font-bold text-5xl max-w-[500px] mt-3">
          Beautiful & Unique Digital Experiences
        </h1>
        <div className="mt-5 flex">
          <IconButton
            title="NodeJS"
            className="p-1 m-3 ml-0"
            Svg={NodeJSIcon}
          />
          <IconButton title="React" className="p-1 m-3" Svg={ReactIcon} />
          <IconButton title="MongoDB" className="p-1 m-3" Svg={MongoDBIcon} />
          <IconButton
            title="React Native"
            className="p-1 m-3"
            Svg={ReactNativeIcon}
          />
        </div>
        <p className="mt-5 text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
          ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit
          amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae
          semper tempor.
        </p>
        <p className="mt-5 text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
          ligula, malesuada vel convallis in.
        </p>
        <p className="mt-5 text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
          ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit
          amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae
          semper tempor.
        </p>
        <Button className="mt-10">Download CV</Button>
      </div>
    </div>
  </Container>
);

export default About;
