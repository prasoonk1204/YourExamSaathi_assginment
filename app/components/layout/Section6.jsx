import { DM_Serif_Text } from "next/font/google";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

export default function Section6() {
  return (
    <div className="w-full h-100 flex flex-col justify-center items-center gap-3 rounded-2xl p-4 text-white bg-animated-radial mt-16 mb-16 xl:mb-20 relative">
      <h1 className="text-5xl z-10">Still have a question?</h1>
      <p className="text-sm mb-4 z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo
        corrupti impedit illum? Iure similique pariatur aliquid{" "}
      </p>
      <button className="bg-white text-black px-8 py-3 text-sm rounded-lg z-10">
        Contact Us
      </button>
      <h1 className={`${dmSerif.className} text-[350px] font-normal absolute opacity-5`}>YES</h1>
    </div>
  );
}
