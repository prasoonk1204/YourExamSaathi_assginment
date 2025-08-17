import BlogCard from "../ui/cards/BlogCard";

export default function Section4() {
    const Blogs = [
      {
        img: "/subject.png",
        title: "Lorem ipsum dolor sit amet, consectetuer se",
        desc: "Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
        date: "16 Aug, 2024",
      },
      {
        img: "/subject.png",
        title: "Lorem ipsum dolor sit amet, consectetuer se",
        desc: "Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
        date: "16 Aug, 2024",
      },
      {
        img: "/subject.png",
        title: "Lorem ipsum dolor sit amet, consectetuer se",
        desc: "Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
        date: "16 Aug, 2024",
      },
      {
        img: "/subject.png",
        title: "Lorem ipsum dolor sit amet, consectetuer se",
        desc: "Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore...",
        date: "16 Aug, 2024",
      },
    ];

  return (
    <div className="w-full lg:h-140 sm:px-6 my-10 flex flex-col gap-6">
      <h1 className="text-5xl text-center mb-8">Blogs & Articles</h1>
      <div className="flex gap-4 flex-wrap lg:flex-nowrap justify-center">
        {Blogs.map((item, index) => {
          return (
            <BlogCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              date={item.date}
            />
          );
        })}
      </div>
      <div className="text-center">
        <button className="px-8 py-2 rounded-lg bg-black dark:bg-white w-fit text-white dark:text-black">
          View More
        </button>
      </div>
    </div>
  );
}
