import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../buttons/button";
import Container from "../container";
import Shapes from "../shapes";
import HeaderRight from "./header-right";
import { introSection } from "../../config";

const Introduction = () => (
  <div id="home" className="relative   sm:mt-[-50px] md:mt-20 ">
    <Shapes />
    <Container className="flex space-between  flex-wrap justify-center">
      <div className="basis-full relative flex items-center justify-center lg:hidden mb-20 ">
        <HeaderRight />
      </div>
      <div className="lg:basis-1/2  md:basis-none sm:basis-full">
        <p className="text-primary-900">{introSection.greetingMessage}</p>
        <h1 className="mt-3 text-6xl font-extrabold transition-all  duration-1000 ease-out">
          {introSection.name}
        </h1>
        <p className="text-2xl mt-3 ">
          <span className="text-slate-400">
            {`${introSection.professionPrefix} `}
          </span>
          <span className="font-bold text-primary-800">Software Enginer</span>
        </p>
        <p className="lg:max-w-[550px] md:max-w-[600px] mt-8 ">
          {introSection.description}
        </p>
        <div className="flex mt-10">
          {introSection.btn1.display && (
            <Button
              colorClass={`
        bg-zinc-800
        active:bg-zinc-900
        hover:bg-zinc-700
       `}
              className="uppercase flex justify-center items-center"
            >
              {introSection.btn1.text}
              {introSection.btn1.fontAwesome && (
                <FontAwesomeIcon
                  className="ml-3 w-[16px]"
                  icon={[
                    introSection.btn1.fontAwesomeType || "fas",
                    introSection.btn1.fontAwesome,
                  ]}
                />
              )}
            </Button>
          )}

          {introSection.btn2.display && (
            <Button className="ml-5 uppercase flex justify-center items-center">
              {introSection.btn2.text}
              {introSection.btn2.fontAwesome && (
                <FontAwesomeIcon
                  className="ml-3 w-[16px]"
                  icon={["fas", introSection.btn2.fontAwesome]}
                />
              )}
            </Button>
          )}
        </div>
      </div>
      <div className="md:basis-1/2  sm:basis-none relative  items-center justify-center hidden sm:hidden md:hidden lg:flex">
        <HeaderRight />
      </div>
    </Container>
  </div>
);

export default Introduction;
