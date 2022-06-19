import { useFormik } from "formik";
import Button from "../buttons/button";
import Container from "../container";
import Input from "./input";
import Textarea from "./textarea";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Container>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-primary-500 text-center">
            Contact Me
          </h2>
          <h1 className="mt-5 font-bold text-4xl josefinSans uppercase text-center">
            Have a project in mind?
          </h1>
          <p className="text-slate-500 max-w-[570px] mt-2 text-center">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <form className="mt-10" onSubmit={formik.handleSubmit}>
          <div className="flex justify-between ">
            <Input className="m-2 ml-0" type="text" placeholder="Name" />
            <Input className="m-2 mr-0" type="text" placeholder="Email" />
          </div>
          <div className="flex justify-between ">
            <Input className="m-2 ml-0" type="text" placeholder="Phone" />
            <Input
              className="m-2 mr-0"
              type="text"
              placeholder="Company (Optional)"
            />
          </div>
          <Input className="my-2" type="text" placeholder="Subject" />
          <Textarea
            readOnly
            className=" mt-4"
            rows={4}
            value="Still underconstruction!"
          />
          <div className="mt-10 flex items-center justify-center">
            <Button>CONTACT ME</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
