import { ElementType } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

type Props = {
  // testing ci flow
  className?: string;
  Svg?: ElementType | null;
  fontAwesome?: IconName;
  title?: string;
  fontAwesomeType?: IconPrefix;
  colorClass?: string;
  customIconClass?: string;
};

const IconButton = ({
  Svg,
  fontAwesomeType,
  title,
  className,
  colorClass,
  fontAwesome,
  customIconClass,
}: Props) => {
  const cClass =
    colorClass ||
    `
    border 
    border-primary-100 
    hover:bg-primary-500
    active:bg-primary-800
    `;
  return (
    <button
      title={title}
      className={`
      ${cClass}
    w-[50px] 
    h-[50px] 
    flex 
    justify-center 
    items-center 
    rounded
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
            className:
              customIconClass ||
              `fill-primary-700 group-hover:fill-white transition-all  duration-500 ease-out
          `,
          }}
        />
      )}

      {fontAwesome && (
        <FontAwesomeIcon
          className={
            customIconClass ||
            "text-primary-700 group-hover:text-white     transition-all  duration-500 ease-out"
          }
          icon={[fontAwesomeType || "fab", fontAwesome]}
        />
      )}
    </button>
  );
};

IconButton.defaultProps = {
  fontAwesomeType: "fab",
};
export default IconButton;
