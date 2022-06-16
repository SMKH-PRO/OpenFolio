import { ReactNode } from "react";
import CircleShape from "../svgs/circleshape";
import DotsShape from "../svgs/dotsShape";

type Props = {
  titleClass?: string;
  className?: string;
  children: ReactNode;
  title: string;
};
const CardWrapper = ({ children, className, title, titleClass }: Props) => (
  <div
    className={`
  
  bg-white
  hover:bg-primary-100
  ml-1
  m-10
 
  
  hover:m-5
  shadow-[0_25px_60px_-17px_rgba(0,0,0,0.1)]
  hover:shadow-md
  


  md:w-[240px] 
  md:h-[230px]

  sm:w-[200px] 
  sm:h-[190px]


  md:hover:w-[250px] 
  md:hover:h-[240px]

  sm:hover:w-[210px] 
  sm:hover:h-[200px]

  rounded-lg
  flex items-center justify-center
  transition-all  duration-1000 ease-out
  group
  relative
bg-opacity-80
   ${className || ""}`}
  >
    <CircleShape className="top-0 right-0 group-hover:visible invisible absolute" />
    <div className="flex justify-center items-center flex-col">
      {children}
      <p
        className={`
      group-hover:text-white
     text-slate-500
      group-hover:font-bold
      text-center
      
      ${titleClass || ""}`}
      >
        {title}
      </p>
    </div>
    <DotsShape className="bottom-2 left-2 group-hover:visible invisible absolute" />
  </div>
);

export default CardWrapper;
