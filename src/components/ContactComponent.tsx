import { HeadingTitle } from "./Text/HeadingTitle";
import { SignupFormDemo } from "./ui/Form";

export const ContactComponent = () => {
  return (
    <div className="mt-20 md:mt-20 px-4">
      <HeadingTitle
        description="Join us in turning your dreams into reality with creative solutions tailored just for you."
        title="Let's create something beautiful together."
      />

      <SignupFormDemo />
    </div>
  );
};
