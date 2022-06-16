import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  shadow?: string;
  colorClass?: string | null | undefined;
};

const Button = ({ children, colorClass, className, shadow }: Props) => {
  const cClass =
    colorClass ||
    `
    bg-primary-500
    active:bg-primary-800
     hover:bg-primary-600 
   `;
  console.log("colorClass", cClass);
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
};
export default Button;
