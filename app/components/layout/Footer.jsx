import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  const LinkSections = [
    {
      title: "Important Links",
      links: ["Home", "Company", "Membership", "Services", "FAQ", "Contact"],
    },
    {
      title: "Quick Links",
      links: ["Career", "Blogs", "Membership"],
    },
    {
      title: "Legal",
      links: ["Terms of Use", "Privacy Policy"],
    },
    {
      title: "Connect",
      links: ["Facebook", "Instagram", "Linkedin", "Youtube", "X / Twitter"],
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full p-12 xl:p-16 border-t border-zinc-400 dark:border-zinc-600 gap-10 lg:gap-20 lg:h-100">
      <div className="flex-1 flex flex-col md:flex-row gap-12 justify-between">
        <div className="order-2 md:order-1 flex flex-col gap-8 justify-between">
          <div>
            <div className="flex flex-col mb-4">
              <h1
                className={`${dmSerif.className} font-normal text-5xl leading-10`}
              >
                YES
              </h1>
              <h2 className="text-[11px] leading-3">Your Exam Saathi</h2>
            </div>
            <Link
              href="mailto:info@yourexamsathi.com"
              className="text-sm px-4 py-2 bg-[#E6E6E6] dark:bg-[#2e2e2e] rounded-md "
            >
              info@yourexamsathi.com
            </Link>
          </div>
          <div className="flex gap-1">
            <Image
              src="/img1.png"
              height={100}
              width={100}
              alt="logo"
              className="h-14 w-14"
            />
            <div>
              <p className="text-[10px] leading-2">Powered by</p>
              <h1 className="leading-6 text-2xl xl:text-3xl font-semibold">
                naval <br /> innovators
              </h1>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex gap-4 flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-sm tracking-wider">
              Stay up to date with YES news and Updates!
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter email"
                className="bg-[#E6E6E6] dark:bg-[#2e2e2e] text-xs px-4 py-2 w-full rounded-md focus:outline-1"
              />
              <ArrowRight className="absolute top-2 right-2 h-4" />
            </div>
            <div className="flex gap-2 text-sm items-center">
              <input
                type="checkbox"
                className="appearance-none w-5 h-5 rounded-md bg-[#E6E6E6] checked:bg-[#feac2f]"
              />
              <p>I accept the Privacy Policy</p>
            </div>
          </div>
          <p className="text-sm">Copyright ©2024 </p>
        </div>
      </div>

      <div className="flex-1 flex w-full  justify-between">
        {LinkSections.map((sec, index) => {
          return (
            <div className="flex flex-col gap-4 flex-wrap" key={index}>
              <h1>{sec.title}</h1>
              <div className="flex flex-col gap-2">
                {sec.links.map((l, index) => {
                  return (
                    <p
                      key={index}
                      className="text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      {l}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
