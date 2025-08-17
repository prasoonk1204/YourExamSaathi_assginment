import Image from "next/image";
import PersonCard from "../ui/cards/PersonCard";

export default function Section2() {
  const Person = [
    { name: "Sachin", post: "Post Description", img: "/p1.png" },
    { name: "Sachin", post: "Post Description", img: "/p2.png" },
    { name: "Sachin", post: "Post Description", img: "/p3.png" },
    { name: "Sachin", post: "Post Description", img: "/p4.png" },
  ];

  return (
    <div className="w-full md:p-20 lg:px-40 xl:px-64 lg:my-16 xl:my-20 flex flex-col items-center gap-16 xl:gap-24">
      <div className="relative">
        <Image
          src="/img1.png"
          width={400}
          height={400}
          alt="img"
          className="animate-[spin_10s_linear_infinite]"
        />
        <h1 className="absolute top-[30%] sm:top-[35%] text-center text-4xl sm:text-5xl w-full">
          Product By <br />
          Naval Innovators
        </h1>
      </div>
      <div className="flex w-full justify-between px-4 flex-wrap gap-4">
        {Person.map((item) => {
          return (
            <PersonCard
              key={item.img}
              name={item.name}
              desc={item.post}
              img={item.img}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl">
          Lorem ipsum dolor sit amet consectetur adipis icing elit. Dolor,
          deserunt.
        </h1>
        <p className="w-3/4 text-justify mx-auto text-sm text-zinz-900 dark:text-zinc-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          quibusdam mollitia minus, magni et corrupti ut error obcaecati aliquam
          alias reiciendis modi, aperiam deleniti iure nostrum autem eum ab
          doloribus explicabo aliquid suscipit. Laboriosam totam consequatur
          iure ex error ab dolor cupiditate inventore vitae? Rerum ad velit
          ducimus quam debitis sed, alias minima in obcaecati eligendi. Fugit
          perspiciatis voluptas assumenda,
          <br /> <br /> rem libero minima, cumque quasi ullam totam adipisci est
          iusto! Impedit quod autem sapiente voluptas assumenda, at fugiat fuga
          expedita sint corrupti maxime, perferendis sed pariatur nihil. Unde,
          cupiditate culpa voluptatem, reiciendis, quisquam error et veniam a
          illum voluptate mollitia. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Consectetur soluta iure, hic qui amet sequi sapiente
          quos ad ut quae et aperiam sunt quo? Corporis expedita facilis aperiam
          suscipit possimus nihil ut perspiciatis officiis, ab ex. Sint nemo
          voluptas a pariatur <br /> <br /> sapiente expedita deserunt, eligendi
          magni exercitationem magnam repellendus adipisci, possimus excepturi
          quaerat consectetur accusantium corporis nobis quam voluptatem
          laboriosam, eos quia voluptates. Aut nesciunt asperiores, quas
          deserunt, voluptate temporibus quibusdam facere maxime ex officiis
          architecto sapiente voluptatum ut tenetur. Vel vero facilis placeat
          totam nesciunt doloremque labore quam autem eius quia! Nulla
          dignissimos obcaecati repellendus ea magni quos harum?
        </p>
      </div>
    </div>
  );
}
