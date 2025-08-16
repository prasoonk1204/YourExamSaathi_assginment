import Image from "next/image";

export default function SubjectCard({ img, title, desc, tags }) {
  return (
    <div className="w-[560px] xl:w-full h-50 bg-[#E6E6E6] dark:bg-[#282828] flex p-4 gap-4 rounded-lg">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl mb-2">{title}</h1>
          <p className="text-sm border-b border-zinc-500 pb-5 text-zinc-700 dark:text-zinc-300">
            {desc}
          </p>
        </div>

        <div className="flex gap-3">
          {tags.map((tag, index) => {
            return (
              <h2
                key={index}
                className="text-sm bg-white dark:bg-zinc-900 px-4 py-1 rounded-2xl"
              >
                {tag}
              </h2>
            );
          })}
        </div>
      </div>
      <Image
        src={img}
        height={100}
        width={100}
        alt="subject"
        className="object-cover h-[168px] w-[186px] rounded-md"
      />
    </div>
  );
}
