import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BentoGrid } from "./bento-grid";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";
const websitePurchaseSteps = [
  {
    title: "Initial Consultation",
    steps: [
      "Discuss your business goals and objectives.",
      "Identify your target audience and requirements.",
      "Establish a timeline and budget.",
    ],
    shortDescr:
      "The initial consultation helps us understand your vision and set the groundwork for the project.",
  },
  {
    title: "Design Concepts",
    steps: [
      "Create wireframes and mockups of the proposed design.",
      "Choose design elements such as colors, fonts, and layouts.",
      "Gather feedback and make necessary adjustments.",
    ],
    shortDescr:
      "During the design phase, we focus on creating visually appealing and functional designs tailored to your brand.",
  },
  {
    title: "Development Phase",
    steps: [
      "Select the appropriate framework for your website.",
      "Implement the design and functionality.",
      "Ensure responsiveness and compatibility across devices.",
    ],
    shortDescr:
      "The development phase brings your vision to life, transforming designs into a fully functioning website.",
  },
  {
    title: "Feedback and Revisions",
    steps: [
      "Present the completed website for review.",
      "Gather your feedback and suggestions.",
      "Implement revisions and finalize the website.",
    ],
    shortDescr:
      "This step ensures the final product meets your expectations and is ready for launch.",
  },
];
const Card = ({
  title,
  steps,
  shortDescr,
}: {
  title: string;
  steps: string[];
  shortDescr: string;
}) => {
  return (
    <CardSpotlight className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 p-4 justify-between flex flex-col space-y-4">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">{title}</p>
      <div className="text-neutral-200 mt-4 relative z-20">
        {/* Follow these steps to secure your account: */}
        <ul className="list-none  mt-2">
          {steps.map((step) => (
            <Step title={step} />
          ))}
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        {shortDescr}
      </p>
    </CardSpotlight>
  );
};

export function CardSpotlightDemo() {
  return (
    <div style={{ padding: "4rem 20px" }}>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        style={{ padding: "4rem 0px" }}
        className="text-3xl px-4 md:text-3xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Our{" "}
        <Highlight className="text-black dark:text-white">Services</Highlight>{" "}
        Are Tailored to Meet Your Needs
      </motion.h1>
      <BentoGrid className="max-w-4xl mx-auto">
        {websitePurchaseSteps.map((card) => (
          <Card
            shortDescr={card?.shortDescr}
            steps={card?.steps}
            title={card?.title}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-sm	text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
