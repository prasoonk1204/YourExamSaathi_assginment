import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Section1() {
  return (
    <div className="w-full h-140 flex px-6 py-16">
      <div className="flex-3">
        <h1 className="text-5xl mb-6 leading-14">
          For every student, Every classroom. <br /> Every Doubt.
        </h1>
        <p className="text-sm w-1/2 text-zinc-600 dark:text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          labore, veritatis necessitatibus officiis enim consequatur.
        </p>
      </div>
      <div className="flex-2 h-full text-justify flex items-end relative">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis. <br /> <br />
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit.
        </p>
        <h1
          className={`${dmSerif.className} text-[150px] lg:text-[220px] xl:text-[320px] font-normal absolute opacity-5 top-[15]`}
        >
          YES
        </h1>
      </div>
    </div>
  );
}
