import { Fragment } from "react";

export const HeadingTitle = ({
  description,
  title,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Fragment>
      <h2 className="text-5xl md:text-5xl mb-4 text-black font-bold dark:text-white w-full font-semibold text-center">
        {title}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base w-full text-center">
        {description}
      </p>
    </Fragment>
  );
};
