import Image from "next/image";
import FloatingImages from "./floatingImages";
import RoundShape from "../svgs/roundShape";

const headerRight2 = () => (
  <>
    <FloatingImages />

    <span className="absolute left-1/2  translate-x-[-50%]">
      <Image
        loading="lazy"
        src="/assets/images/programmer.png"
        width={420}
        height={500}
      />
    </span>
    <RoundShape className="h-[100%] max-w-[96vw]" />
  </>
);

export default headerRight2;
