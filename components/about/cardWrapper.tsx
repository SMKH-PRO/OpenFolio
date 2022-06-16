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
  hover:bg-primary-200
  ml-1
  m-10
 
 w-[250px] h-[240px]
  
  hover:m-5
  shadow-[0_25px_60px_-17px_rgba(0,0,0,0.1)]
  hover:shadow-md
  hover:w-[260px] hover:h-[250px]
  rounded-lg
  flex items-center justify-center
  transition-all  duration-1000 ease-out
  group
  relative
bg-opacity-80
   ${className || ""}`}
  >
    <CircleShape className="top-0 right-0 group-hover:visible invisible absolute" />
    <div>
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
