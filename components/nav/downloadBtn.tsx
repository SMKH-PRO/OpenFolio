import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { generalInfo } from "../../config";
import Button from "../buttons/button";

type Props = {
  className?: string;
  label?: string;
};
const DownloadResumeBtn = ({ className, label }: Props) => (
  <Link href={generalInfo.resumeURL} download target="_blank">
    <a target="_blank" download>
      <Button className={`flex justify-between ${className || ""}`}>
        {label}
        <FontAwesomeIcon
          className="ml-3 w-[15px]"
          icon={["fas", "file-download"]}
        />
      </Button>
    </a>
  </Link>
);
DownloadResumeBtn.defaultProps = {
  className: "hidden",
  label: "Resume.pdf",
};
export default DownloadResumeBtn;
