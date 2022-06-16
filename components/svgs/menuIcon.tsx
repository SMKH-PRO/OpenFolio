import theme from "../../theme.json";

type Props = {
  color?: string;
  className?: string;
};
const MenuIcon = ({ color, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className || ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);
MenuIcon.defaultProps = {
  color: theme?.colors?.primary?.[500] || "#00BFA6",
};

export default MenuIcon;
