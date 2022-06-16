import DownloadIcon from "../svgs/downloadIcon";
import Button from "../buttons/button";

type Props = {
  className?: string;
};
const DownloadResumeBtn = ({ className }: Props) => (
  <Button className={className}>
    Resume.pdf
    <span className="ml-1">
      <DownloadIcon color="white" />
    </span>
  </Button>
);
DownloadResumeBtn.defaultProps = {
  className: "hidden md:flex",
};
export default DownloadResumeBtn;
