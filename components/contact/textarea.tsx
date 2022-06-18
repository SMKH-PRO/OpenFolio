import React from "react";

type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;
interface Props extends TextareaProps {
  className?: string;
}

const Textarea = ({ className, ...props }: Props) => (
  <textarea
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    className={`${
      className || ""
    } bg-gray-50 transition-all duration-700 ease-in border-gray-300 focus:outline-transparent outline-primary-100 outline-1 outline-double active:outline-transparent  text-gray-900 text-sm rounded-[1px] focus:ring-primary-600 focus:border-b-primary-600 border-b-[3px] border-b-transparent block w-full p-4 `}
  />
);

export default Textarea;
