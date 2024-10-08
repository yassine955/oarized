import { motion } from "framer-motion";
import { CardDemo } from "../CardDemo";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export const HighLightComponent = ({
  blog,
  shortDescription,
  title,
  img,
}: {
  title: any | string;
  shortDescription: any | string;
  blog: boolean;
  img?: string;
}) => {
  return (
    <HeroHighlight img={img}>
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
        className="text-3xl px-4 md:text-3xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {title}
        {shortDescription}
      </motion.h1>
      {!blog ? (
        <>
          <CardDemo />
          <p className="mb-4 font-light dark:text-white w-full text-center">
            This website is build by
          </p>
        </>
      ) : null}
    </HeroHighlight>
  );
};
