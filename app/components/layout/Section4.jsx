import SubjectCard from "../ui/cards/SubjectCard";

export default function Section4() {
    const Subjects = [
      {
        img: "/subject.png",
        title: "Subject Name",
        desc: "Subject Description: Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        tags: ["University", "1st year", "Branch"],
      },
      {
        img: "/subject.png",
        title: "Subject Name",
        desc: "Subject Description: Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
        tags: ["University", "1st year", "Branch"],
      },
    ];

  return (
    <div className="w-full md:h-140 px-6 my-10 flex flex-col lg:flex-row">
      <h1 className="text-5xl flex-1">
        Checkout free stuff!
      </h1>
      <div className="flex-1 flex gap-4 flex-col mt-12">
        {Subjects.map((item, index) => {
          return (
            <SubjectCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              tags={item.tags}
            />
          );
        })}
        <button className="text-start px-8 py-2 rounded-lg bg-black dark:bg-white w-fit text-white dark:text-black">Know More</button>
      </div>
    </div>
  );
}
