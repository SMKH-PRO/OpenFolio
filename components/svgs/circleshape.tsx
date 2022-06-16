type Props = {
  color?: string;
  className?: string;
};
const CircleShape = ({ color, className }: Props) => (
  <svg
    width="218"
    height="109"
    viewBox="0 0 218 109"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle opacity="0.09" cx="170" cy="-40.5" r="150" fill={color} />
    <circle opacity="0.15" cx="210" cy="6" r="62" fill={color} />
  </svg>
);
CircleShape.defaultProps = {
  color: "white",
};
export default CircleShape;
