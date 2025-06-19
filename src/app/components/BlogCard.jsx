import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import IconButton from "./IconButton";
import { Plus, Search } from "lucide-react";
import Image from "next/image";

const BlogCard = () => {
  return (
    <div>
      {/* Top Content */}
      <div className="text-center">
        <Button text="Articles" />
        <Heading
          title="Check Out Our"
          highlight="Blog"
          className="text-[36px] lg:text-[48px] font-semibold my-3"
        />
        <div className="flex justify-center mb-5">
          <p className="text-[#71717A] text-[16px] lg:text-[18px] mx-auto max-w-[90%] md:max-w-[60%] lg:max-w-[40%]">
            Explore our blog for valuable insights, industry trends, and expert
            advice to stay ahead and drive informed business decisions
          </p>
        </div>
        <div className="flex justify-center">
          <IconButton text="Explore All" Icon={Search} />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-20">
        {[1, 2, 3].map((v, i) => (
          <div
            className="relative overflow-hidden rounded-3xl w-full max-w-sm mx-auto"
            key={i}
          >
            <Image
              className="rounded-3xl w-full h-auto hover:scale-110 transition-all duration-500"
              src="/assets/cardbgimg.png"
              width={360}
              height={450}
              alt=""
            />
            <div className="p-3 absolute top-5 right-5 bg-white rounded-full">
              <Plus />
            </div>
            <div className="absolute bottom-5 left-5">
              <p className="text-[16px] lg:text-[18px] text-white pb-2">
                April 22, 2025
              </p>
              <h2 className="text-[18px] lg:text-[24px] font-semibold text-white max-w-[250px]">
                How to Select the Best Consulting Partner
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
