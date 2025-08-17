"use client";

import { Search, Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import LoginBtn, { SignupBtn, LinkBtn } from "../ui/buttons/headerButtons";
import { DM_Serif_Text } from "next/font/google";
import { useState } from "react";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <>
      <div className="max-w-[1600px] fixed top-0 w-full z-30 bg-white/60 dark:bg-black/30 backdrop-blur-md transition-all duration-500 ease-in-out">
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex items-center flex-col">
              <h1
                className={`${dmSerif.className} font-normal text-5xl leading-10`}
              >
                YES
              </h1>
              <h2 className="text-[11px] leading-3">Your Exam Saathi</h2>
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="hidden lg:flex gap-4 text-[15px]">
              {Links.map((item) => (
                <LinkBtn key={item.title} title={item.title} url={item.url} />
              ))}
            </div>

            <Search className="h-5 w-5" />
            <ThemeToggle />

            <div className="flex gap-4">
              <LoginBtn />
              <div className="hidden md:flex">
                <SignupBtn />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black shadow-xl transform transition-all duration-300 ease-in-out z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-neutral-800">
          <div className="flex items-center flex-col">
            <h1 className={`${dmSerif.className} font-normal text-5xl`}>YES</h1>
            <h2 className="text-[10px] leading-3">Your Exam Saathi</h2>
          </div>
          <button onClick={() => setSidebarOpen(false)} aria-label="Close Menu">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-6 text-[15px]">
          {Links.map((item, idx) => (
            <div
              key={item.title}
              className={`transform transition-all duration-300 ease-in-out delay-${
                idx * 75
              } ${
                sidebarOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-6"
              }`}
            >
              <LinkBtn title={item.title} url={item.url} />
            </div>
          ))}

          <div className="mt-6 md:hidden flex justify-start">
            <SignupBtn />
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-all duration-300 ease-in-out ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />
    </>
  );
}
