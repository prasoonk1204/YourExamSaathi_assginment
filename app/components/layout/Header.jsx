"use client";

import { Search } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import LoginBtn, { SignupBtn, LinkBtn } from "../ui/buttons/headerButtons";
import Image from "next/image";

import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const Links = [
    { title: "Home", url: "/home" },
    { title: "Company", url: "/company" },
    { title: "Membership", url: "/membership" },
    { title: "Services", url: "/services" },
    { title: "Career", url: "/career" },
    { title: "FAQ", url: "/faq" },
    { title: "Contact", url: "/contact" },
  ];

  return (
    <div
      className="backdrop-blur-md bg-white/60 dark:bg-black/30 
                      transition-all duration-300 w-full"
    >
      <div className="flex items-center justify-between px-12 py-4">
        <div className="flex items-center flex-col">
          <h1
            className={`${dmSerif.className} font-normal text-5xl leading-10`}
          >
            YES
          </h1>
          <h2 className="text-[11px] leading-3">Your Exam Saathi</h2>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4 text-[15px]">
            {Links.map((item) => {
              return (
                <LinkBtn key={item.title} title={item.title} url={item.url} />
              );
            })}
          </div>

          <Search className="h-5 w-5" />
          <ThemeToggle />
          <div className="flex gap-4">
            <LoginBtn />
            <SignupBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
