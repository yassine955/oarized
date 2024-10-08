import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconBriefcase,
  IconCash,
  IconCloud,
  IconCurrencyDollar,
  IconDeviceDesktopAnalytics,
  IconEaseInOut,
  IconHeadset,
  IconHeart,
  IconHelp,
  IconLayersDifference,
  IconRouteAltLeft,
  IconShieldCheck,
  IconTerminal2,
  IconTools,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Tailored for Businesses",
      description:
        "We create custom websites designed to meet your business needs and goals.",
      icon: <IconBriefcase />,
    },
    {
      title: "User-Friendly Designs",
      description:
        "Our websites are built with ease of use in mind, ensuring a seamless experience for all users.",
      icon: <IconDeviceDesktopAnalytics />,
    },
    {
      title: "Transparent Pricing",
      description:
        "We offer competitive pricing with no hidden fees. Pay for exactly what you need.",
      icon: <IconCash />,
    },
    {
      title: "Reliable Performance",
      description:
        "Our hosting ensures your website stays up and running with 99.9% uptime guaranteed.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Solutions",
      description:
        "Whether you’re a startup or an enterprise, our websites scale with your business as it grows.",
      icon: <IconLayersDifference />,
    },
    {
      title: "24/7 Expert Support",
      description:
        "Our team is here to assist you at any time, ensuring your website runs smoothly around the clock.",
      icon: <IconHeadset />,
    },
    {
      title: "Satisfaction Guarantee",
      description:
        "Not satisfied? We offer a 30-day money-back guarantee, no questions asked.",
      icon: <IconShieldCheck />,
    },
    {
      title: "Comprehensive Services",
      description:
        "From design to development and beyond, we've got you covered.",
      icon: <IconTools />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 text-standard">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-standard transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
