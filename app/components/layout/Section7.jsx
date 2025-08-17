"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "../ui/cards/TestimonialCard";

export default function Section7() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  const testimonials = [
    {
      name: "Shishir Dwivedi",
      role: "Community Member",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    },
    {
      name: "Shishir Dwivedi",
      role: "Community Member",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    },
    {
      name: "Shishir Dwivedi",
      role: "Community Member",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    },
    {
      name: "Shishir Dwivedi",
      role: "Community Member",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    },
    {
      name: "Shishir Dwivedi",
      role: "Community Member",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    },
    {
      name: "Shishir Dwivedi",
      role: "Community Member",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh Lorem ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
    },
  ];

  return (
    <div className="w-full sm:h-140 sm:px-6 my-10">
      <h1 className="text-5xl text-center mb-12">
        What students say about us!
      </h1>

      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-l-lg bg-[#E6E6E6] hover:bg-[#dedddd] dark:bg-[#282828] hover:dark:bg-[#414141]"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-r-lg bg-[#E6E6E6] hover:bg-[#dedddd] dark:bg-[#282828] hover:dark:bg-[#2e2e2e]"
        >
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
