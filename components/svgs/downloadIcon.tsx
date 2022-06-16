import theme from "../../theme.json";

type Props = {
  color?: string;
  className?: string;
};
const DownloadIcon = ({ color, className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ${className || ""}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke={color}
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);
DownloadIcon.defaultProps = {
  color: theme?.colors?.primary?.[500] || "#00BFA6",
};
export default DownloadIcon;
