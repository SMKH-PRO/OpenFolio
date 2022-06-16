import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  shadow?: string;
  color?: string;
  colorClass?: string | null;
};

const Button = ({ children, color, colorClass, className, shadow }: Props) => {
  const cClass =
    colorClass ||
    `
     bg-${color || "primary"}-500
     active:bg-${color || "primary"}-800
     hover:bg-${color || "primary"}-600 
   `;
  return (
    <button
      type="button"
      className={`
     ${cClass}
     
     text-white
     font-bold
     py-2
     px-4
     rounded
     flex
     transition-all
      duration-300
      ease-out
      hover:shadow-${shadow || "lg"} 
      ${className || ""}
      `}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  shadow: "lg",
  color: "primary",
};
export default Button;
