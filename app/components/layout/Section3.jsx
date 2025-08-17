import FeatureCard from "../ui/cards/FeatureCard";

export default function Section3() {
  const Features = [
    {
      icon: "/icon1.svg",
      title: "Personalized learning",
      desc: "Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      icon: "/icon2.svg",
      title: "Trusted Answers",
      desc: "Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
    {
      icon: "/icon3.svg",
      title: "Personalized learning",
      desc: "Lorem ipsum dolor sit amet, consec er adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    },
  ];

  return (
    <div
      className="w-full gap-20 flex flex-col justify-between rounded-2xl px-8 py-11 text-white mt-10 mb-16 xl:mb-20"
      style={{
        background: "radial-gradient(circle, #17082c,#381ab2,#9b32ad, #feac2f)",
        backgroundSize: "200% 200%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "eft top",
      }}
    >
      <h1 className="text-5xl">
        Integrity. Innovation. Impact. <br />
        Shaping the Future Together.
      </h1>
      <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
        {Features.map((f) => {
          return (
            <FeatureCard
              key={f.icon}
              icon={f.icon}
              title={f.title}
              desc={f.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
