import { experienceSection } from "../../config";
import Container from "../container";
import Timeline from "./timeline";

const Experience = () => (
  <div id="experience">
    <Container className="mt-32 flex flex-col justify-center items-center">
      {experienceSection.title && (
        <p className="text-primary-800 font-bold text-center text-xl">
          {experienceSection.title}
        </p>
      )}
      {experienceSection.heading && (
        <p className="text-6xl font-bold text-center josefinSans mt-6 uppercase">
          {experienceSection.heading}
        </p>
      )}

      {experienceSection.description && (
        <p className="text-slate-500 max-w-[600px] text-center">
          {experienceSection.description}
        </p>
      )}
      <div className="mt-10">
        <Timeline />
      </div>
    </Container>
  </div>
);

export default Experience;
