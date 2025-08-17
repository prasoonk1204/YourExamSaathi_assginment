import Image from "next/image";
export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white text-black md:w-65 py-4 md:py-10 px-4 rounded-4xl">
      <div className="flex justify-end">
        <div className="bg-[#EE9944] rounded-full">
          <Image
            src={icon}
            height={100}
            width={100}
            alt="icon"
            className=" w-16 h-16 p-3 "
          />
        </div>
      </div>

      <h1 className="font-semibold text-xl md:text-lg my-4">{title}</h1>
      <p className="text-sm text-zinc-500">{desc}</p>
    </div>
  );
}
