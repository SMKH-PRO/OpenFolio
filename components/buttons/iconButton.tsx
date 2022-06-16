import { ElementType } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

type Props = {
  className?: string;
  Svg?: ElementType | null;
  fontAwesome?: IconName;
  title?: string;
};

const IconButton = ({ Svg, title, className, fontAwesome }: Props) => (
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
    {Svg && (
      <Svg
        pathProps={{
          className: `fill-primary-700 group-hover:fill-white transition-all  duration-500 ease-out
          `,
        }}
      />
    )}

    {fontAwesome && (
      <FontAwesomeIcon
        className="text-primary-700 group-hover:text-white     transition-all  duration-500 ease-out"
        icon={["fab", fontAwesome]}
      />
    )}
  </button>
);

export default IconButton;
