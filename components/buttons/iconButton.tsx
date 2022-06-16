import { ElementType } from "react";

type Props = {
  className?: string;
  Svg: ElementType;
  title?: string;
};

const IconButton = ({ Svg, title, className }: Props) => (
  <button
    title={title}
    className={`
    w-[50px] 
    h-[50px] 
    flex 
    justify-center 
    items-center 
    border 
    border-primary-100 
    rounded
    hover:bg-primary-500
    active:bg-primary-800
    hover:border-none
    hover:shadow-lg
    transition-all  duration-1000 ease-out
    group
    ${className || "p-3"}
    
    `}
    type="button"
  >
    <Svg
      pathProps={{
        className: `fill-primary-700 group-hover:fill-white`,
      }}
    />
  </button>
);

export default IconButton;
