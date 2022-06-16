type Props = {
  color?: string;
  className?: string;
};
const DotsShape = ({ color, className }: Props) => (
  <svg
    width="23"
    height="32"
    viewBox="0 0 23 32"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="21.262"
      cy="1.12081"
      r="1.12081"
      transform="rotate(90 21.262 1.12081)"
      fill={color}
    />
    <circle
      cx="21.262"
      cy="30.4863"
      r="1.12081"
      transform="rotate(90 21.262 30.4863)"
      fill={color}
    />
    <circle
      cx="1.76005"
      cy="1.12081"
      r="1.12081"
      transform="rotate(90 1.76005 1.12081)"
      fill={color}
    />
    <circle
      cx="1.76005"
      cy="30.4863"
      r="1.12081"
      transform="rotate(90 1.76005 30.4863)"
      fill={color}
    />
    <circle
      cx="11.6228"
      cy="1.12081"
      r="1.12081"
      transform="rotate(90 11.6228 1.12081)"
      fill={color}
    />
    <circle
      cx="11.6228"
      cy="30.4863"
      r="1.12081"
      transform="rotate(90 11.6228 30.4863)"
      fill={color}
    />
    <circle
      cx="21.262"
      cy="10.9839"
      r="1.12081"
      transform="rotate(90 21.262 10.9839)"
      fill={color}
    />
    <circle
      cx="1.76005"
      cy="10.9839"
      r="1.12081"
      transform="rotate(90 1.76005 10.9839)"
      fill={color}
    />
    <circle
      cx="11.6228"
      cy="10.9839"
      r="1.12081"
      transform="rotate(90 11.6228 10.9839)"
      fill={color}
    />
    <circle
      cx="21.262"
      cy="20.8469"
      r="1.12081"
      transform="rotate(90 21.262 20.8469)"
      fill={color}
    />
    <circle
      cx="1.76005"
      cy="20.8469"
      r="1.12081"
      transform="rotate(90 1.76005 20.8469)"
      fill={color}
    />
    <circle
      cx="11.6228"
      cy="20.8469"
      r="1.12081"
      transform="rotate(90 11.6228 20.8469)"
      fill={color}
    />
  </svg>
);
DotsShape.defaultProps = {
  color: "white",
};
export default DotsShape;
