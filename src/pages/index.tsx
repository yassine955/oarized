"use client";

import { FeaturesSectionDemo } from "@/components/ui/Features";
import { TimelineDemo } from "@/components/ui/TimeLineDemo";
import { AppleCardsCarouselDemo } from "@/components/ui/AppleCardCarousel";
import { Layout_ } from "@/components/Layout";
import { HighLightComponent } from "@/components/Hero/HighLight";
import { ContactComponent } from "@/components/ContactComponent";
import { Highlight } from "@/components/ui/hero-highlight";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <Layout_>
      <NextSeo
        title="Home - Welcome to OARIZED"
        description="Welcome to OARIZED - Your partner for customized web solutions. Explore our services and discover how we can help your business succeed."
        canonical="https://oarized.com/"
        openGraph={{
          url: "https://oarized.com/",
          title: "Home - Welcome to OARIZED",
          description:
            "Welcome to OARIZED - Your partner for customized web solutions. Explore our services and discover how we can help your business succeed.",
          images: [
            {
              url: "/banner.png",
              width: 2400,
              height: 1600,
              alt: "OARIZED - Welcome to OARIZED",
              type: "image/jpeg",
            },
          ],
          siteName: "OARIZED",
        }}
      />
      <HighLightComponent
        blog={false}
        shortDescription={
          <>
            <p className="text-sm font-normal pt-4">
              We are a top-tier web development agency, dedicated to creating{" "}
              <Highlight className="text-black dark:text-white font-semibold">
                innovative
              </Highlight>{" "}
              and{" "}
              <Highlight className="text-black dark:text-white font-semibold	">
                impactful
              </Highlight>{" "}
              web solutions.
            </p>
          </>
        }
        title={
          <>
            Web Development{" "}
            <Highlight className="text-black dark:text-white">
              Excellence
            </Highlight>
          </>
        }
      />
      <AppleCardsCarouselDemo />
      <FeaturesSectionDemo />
      <TimelineDemo />
      <ContactComponent />
    </Layout_>
  );
}
