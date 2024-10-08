"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useGetAllPostsQuery } from "../../../generated/graphql";
import { Loading } from "./LoadingComponent";

export function AppleCardsCarouselDemo() {
  const { loading, error, data } = useGetAllPostsQuery({
    fetchPolicy: "no-cache",
  });

  const cards = data?.posts?.nodes?.map((card, index) => (
    <Card key={card.id} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-8">
      <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans text-center">
        Latest Websites
      </h2>
      <p className="max-w-7xl pt-4 mx-auto text-sm md:text-sm font-normal text-neutral-800 dark:text-neutral-200 font-sans text-center">
        Check out some of my latest projects with creative ideas.
      </p>
      {loading ? (
        <Loading />
      ) : !data?.posts?.nodes?.length ? (
        <div className="flex items-center justify-center w-full mt-8">
          <p>Nothing to show...</p>
        </div>
      ) : (
        <Carousel items={cards!} />
      )}
    </div>
  );
}
