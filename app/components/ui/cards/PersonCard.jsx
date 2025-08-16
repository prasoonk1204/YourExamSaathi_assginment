import Image from "next/image"

export default function PersonCard({name, desc, img}){
return (
  <div className=" flex flex-col justify-center items-center">
    <Image
      src={img}
      height={150}
      width={150}
      alt="Person"
      className="rounded-full h-[100px] w-[100px] xl:h-[150px]  xl:w-[150px] object-cover mb-6"
    />
    <h1 className="text-lg font-medium">{name}</h1>
    <h2 className="text-sm">{desc}</h2>
  </div>
);
}