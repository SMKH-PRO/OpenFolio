import Container from "../container";
import Timeline from "./timeline";

const Experience = () => (
  <div>
    <Container className="mt-32 flex flex-col justify-center items-center">
      <p className="text-primary-800 font-bold text-center text-xl">
        Education & Experience
      </p>
      <p className="text-6xl font-bold text-center josefinSans mt-6 uppercase">
        My Resume
      </p>
      <p className="text-slate-500 max-w-[600px] text-center">
        {" "}
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </p>
      <div className="mt-10">
        <Timeline />
      </div>
    </Container>
  </div>
);

export default Experience;
