/* eslint-disable react/jsx-props-no-spreading */
import theme from "../../theme.json";

type Props = {
  color?: string;
  className?: string;
  pathProps?: {
    className?: string;
  };
};
const NextIcon = ({ color, pathProps, className }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="96px"
    height="96px"
  >
    <path
      {...pathProps}
      fill={color}
      d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"
    />
  </svg>
);
NextIcon.defaultProps = {
  color: theme?.colors?.primary?.[500] || "#00BFA6",
};
export default NextIcon;
