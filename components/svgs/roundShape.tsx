import theme from "../../theme.json";

type Props = {
  color?: string;
  className?: string;
};
const RoundShape = ({ color, className }: Props) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <path
      fill={color}
      d="M46.7,-43.8C58,-35.4,63,-17.7,65,2C66.9,21.6,65.9,43.2,54.6,56.5C43.2,69.7,21.6,74.5,1.5,73C-18.7,71.6,-37.4,63.8,-51.4,50.6C-65.4,37.4,-74.7,18.7,-72.7,2.1C-70.6,-14.5,-57.1,-29,-43,-37.4C-29,-45.9,-14.5,-48.2,1.6,-49.8C17.7,-51.3,35.4,-52.2,46.7,-43.8Z"
      transform="translate(100 100)"
    />
  </svg>
);
RoundShape.defaultProps = {
  color: theme?.colors?.primary?.[500] || "#00BFA6",
};
export default RoundShape;
