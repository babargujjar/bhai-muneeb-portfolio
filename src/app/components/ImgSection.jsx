import React from 'react'
import Button from './Button'
import Heading from './Heading';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const ImgSection = () => {
  return (
    <div className="my-15">
      <div className=" text-center">
        <Button text="Our Team Member’s" />
        <Heading
          title="Strategic Minds Behind"
          highlight="Your Growth"
          className="text-[35px] lg:text-[48px] font-semibold my-3 max-w-[70%] md:max-w-[60%] lg:max-w-[50%]"
        />
        <div className="flex justify-center">
          <p className="text-[16px] lg:text-[18px] text-[#71717A] max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
            We provide expert-driven solutions tailored to accelerate business
            success, optimize strategies, and deliver measurable growth and
            long- term results.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-14">
        {[1, 2, 3].map((v, i) => (
          <div
            key={i}
            className="relative group w-full aspect-square rounded-full overflow-hidden mx-auto max-w-[300px] sm:max-w-full"
          >
            <Image
              className="rounded-full w-full h-full object-cover"
              src="/assets/employee.svg"
              width={400}
              height={400}
              alt=""
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end items-center p-5 text-white">
              <h2 className="font-semibold text-[18px] md:text-[20px]">
                Olivia Carter
              </h2>
              <h3 className="text-[14px] md:text-[16px] mb-4">
                Lead Consultant
              </h3>
              <div className="flex gap-3">
                <div className="bg-white p-2 rounded-full">
                  <Twitter className="w-5 h-5 text-black" />
                </div>
                <div className="bg-white p-2 rounded-full">
                  <Facebook className="w-5 h-5 text-black" />
                </div>
                <div className="bg-white p-2 rounded-full">
                  <Linkedin className="w-5 h-5 text-black" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgSection