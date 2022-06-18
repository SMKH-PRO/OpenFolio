import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
interface Props extends InputProps {
  className?: string;
}

const Input = ({ className, ...props }: Props) => (
  <input
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className={`${
      className || ""
    } bg-gray-50 transition-all duration-700 ease-in border-gray-300 focus:outline-transparent outline-primary-100 outline-1 outline-double active:outline-transparent  text-gray-900 text-sm rounded-[1px] focus:ring-primary-600 focus:border-b-primary-600 border-b-[3px] border-b-transparent block w-full p-4 `}
  />
);

export default Input;
