import React from 'react'
import Button from './Button'
import Heading from './Heading';
import Image from 'next/image';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const ImgSection = () => {
  return (
    <div className="my-36">
      <div className=" text-center">
        <Button text="Our Team Member’s" />
        <Heading
          title="Strategic Minds Behind"
          highlight="Your Growth"
          className="text-[48px] font-semibold my-3 max-w-[50%]"
        />
        <div className="flex justify-center">
          <p className="text-[18px] text-[#71717A] max-w-[50%]">
            We provide expert-driven solutions tailored to accelerate business
            success, optimize strategies, and deliver measurable growth and
            long- term results.
          </p>
        </div>
      </div>
      <div className="flex gap-10 my-14">
        {[1, 2, 3].map((v, i) => (
          <div
            key={i}
            className="relative group w-[350px] h-[350px] rounded-full overflow-hidden"
          >
            <Image
              className="rounded-full w-full h-full object-cover"
              src="/assets/employee.svg"
              width={350}
              height={350}
              alt=""
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col justify-end items-center p-5 text-white">
              <h2 className="font-semibold text-[20px]">Olivia Carter</h2>
              <h3 className="text-[16px] mb-5">Lead Consultant</h3>
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