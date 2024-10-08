import {
  IconHome,
  IconBrandLinkedin,
  IconPaperclip,
  IconBrandGithub,
} from "@tabler/icons-react";
import Image from "next/image";
import OarizedLogo from "../../public/images/logo-dark.svg";
import { FloatingNav } from "./ui/floating-navbar";

export const Navbar = () => {
  return (
    <FloatingNav
      navItems={[
        {
          name: (
            <Image
              className="h-16 w-16"
              priority
              alt="Home"
              src={OarizedLogo}
            />
          ),
          link: "/",
          icon: (
            <IconHome className="h-4 w-4 text-neutral-500 dark:text-white hover:text-standard" />
          ),
        },
        {
          name: (
            <IconBrandLinkedin className="h-6 w-6 text-standard dark:text-white" />
          ),
          link: "https://www.linkedin.com/in/yassine-hoppenbrouwer-23219a2a4/",
          icon: (
            <IconBrandLinkedin className="h-4 w-4 text-neutral-500 dark:text-white hover:text-standard" />
          ),
        },
        {
          name: "Resume",
          link: "/files/CV-EN.pdf",
          icon: (
            <IconPaperclip className="h-4 w-4 text-neutral-500 dark:text-white hover:text-standard" />
          ),
        },
        {
          name: "Github",
          link: "https://github.com/yassine955/",
          icon: (
            <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white hover:text-standard" />
          ),
        },
      ]}
    />
  );
};
