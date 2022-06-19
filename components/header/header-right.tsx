import Image from "next/image";
import Typed from "react-typed";
import { introSection } from "../../config";

const HeaderRight = () => (
  <div className="border-primary-100 border block p-5 px-7 sm:mt-32 md:mt-0">
    <Image
      src={introSection.imageLink || "/assets/images/hacker.jpg"}
      width={350}
      height={320}
    />
    <div className="flex justify-between items-center mt-3">
      <p className="font-semibold text-primary-800 text-2xl">[</p>
      <p className="text-center font-bold pt-1 ">
        <Typed
          cursorChar="."
          strings={introSection.namesArr}
          typeSpeed={50}
          backSpeed={30}
          loopCount={3}
          loop
        />
      </p>
      <p className="font-semibold text-primary-800 text-2xl">]</p>
    </div>
  </div>
);

export default HeaderRight;
