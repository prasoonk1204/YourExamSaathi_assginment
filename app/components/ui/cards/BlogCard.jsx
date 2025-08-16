import Image from "next/image";

export default function BlogCard({ img, title, desc, date }) {
  return (
    <div className="w-[280px] xl:w-full bg-[#E6E6E6] dark:bg-[#282828] flex flex-col p-2 gap-4 rounded-lg">
      <Image
        src={img}
        height={100}
        width={100}
        alt="subject"
        className="object-cover w-full rounded-md h-[150px]"
      />
      <div className="flex flex-col gap-4 p-2">
        <div>
          <h1 className="text-xl mb-2">{title}</h1>
          <p className="text-sm border-b border-zinc-500 pb-4 text-zinc-700 dark:text-zinc-300">{desc}</p>
        </div>

        <h2 className="text-xs bg-white dark:bg-zinc-900 px-4 py-1 rounded-2xl w-fit">
          {date}
        </h2>
      </div>
    </div>
  );
}
