"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import NextIcon from "../../public/images/icons/nextjs-icon-svgrepo-com.svg";
import WordpressIcon from "../../public/images/icons/wordpress-139-svgrepo-com.svg";
import GraphQLIcon from "../../public/images/icons/graphql-svgrepo-com.svg";
import ApolloIcon from "../../public/images/icons/apollographql-svgrepo-com.svg";
import TailwindCSSSvg from "../../public/images/icons/tailwind-svgrepo-com.svg";
import Image from "next/image";

export function CardDemo() {
  return (
    <CardSkeletonContainer>
      <Skeleton />
    </CardSkeletonContainer>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {});
  }, []);
  return (
    <div className="p-2 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <NextJSICONLOGO className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <TailwindCSSIcon className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-3">
          <WordpressIconLogo className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="h-8 w-8 circle-4">
          <GraphQLIconSVG className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <ApolloIconSVG className="h-4 w-4 " />
        </Container>
      </div>

      <div className="h-14 w-px absolute m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-14 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return <div className={cn("z-40", className)}>{children}</div>;
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const NextJSICONLOGO = ({ className }: { className?: string }) => {
  return <Image priority src={NextIcon} alt="Next.JS" />;
};

export const WordpressIconLogo = ({ className }: { className?: string }) => {
  return <Image priority src={WordpressIcon} alt="Next.JS" />;
};
export const ApolloIconSVG = ({ className }: { className?: string }) => {
  return <Image priority src={ApolloIcon} alt="Wordpress" />;
};

export const GraphQLIconSVG = ({ className }: { className?: string }) => {
  return <Image priority src={GraphQLIcon} alt="GraphQL" />;
};
export const TailwindCSSIcon = ({ className }: { className?: string }) => {
  return <Image priority src={TailwindCSSSvg} alt="GraphQL" />;
};
