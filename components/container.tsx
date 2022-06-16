/* eslint-disable react/jsx-props-no-spreading */
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  paddingClass?: string | null;
}
const Container = ({ children, paddingClass, className, ...props }: Props) => (
  // This component helps maintaining proper space from left/right
  <div
    {...props}
    className={`lg:container mx-auto ${paddingClass || ""} ${className || ""}`}
  >
    {children}
  </div>
);

Container.defaultProps = {
  paddingClass: "px-10 sm:px-5",
};

export default Container;
