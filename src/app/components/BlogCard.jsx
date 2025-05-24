import React from 'react'
import Button from './Button'
import Heading from './Heading';
import IconButton from './IconButton';
import { MapPlus, Plus, Search } from 'lucide-react';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <div>
      <div className="text-center">
        <Button text="Articles" />
        <Heading
          title="Check Out Our"
          highlight="Blog"
          className="text-[48px] font-semibold my-3"
        />
        <div className="flex justify-center mb-5">
          <p className="text-[#71717A] text-[18px] mx-auto max-w-[40%]">
            Explore our blog for valuable insights, industry trends, and expert
            advice to stay ahead and drive informed business decisions
          </p>
        </div>
        <div className="flex justify-center">
          <IconButton text="Explore All" Icon={Search} />
        </div>
      </div>
      <div className="flex gap-10 my-20 items-center justify-between">
        {[1, 2, 3].map((v, i) => (
          <div className="relative  overflow-hidden rounded-3xl" key={i}>
            <Image
              className="rounded-3xl hover:scale-110 transition-all duration-500"
              src="/assets/cardbgimg.png"
              width={360}
              height={450}
              alt=""
            />
            <div className="p-3 absolute top-10 right-10 bg-white rounded-full">
              <Plus />
            </div>
            <div className="absolute bottom-10 left-10">
              <p className="text-[18px] text-white pb-5">April 22, 2025</p>
              <h2 className="text-[24px] font-semibold text-white">
                How to Select the Best Consulting Partner
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogCard