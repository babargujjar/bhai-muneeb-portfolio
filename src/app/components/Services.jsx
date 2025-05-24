import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="border-[#CDCDCD] bg-[length:100%_200%] bg-[linear-gradient(to_bottom,#D8E6FF,#ffffff)] bg-[position:top] hover:bg-[position:bottom] transition-[background-position] duration-500 flex items-center justify-between rounded-3xl p-18 mx-auto border max-w-6xl">
      <div className=" p-[1px] rounded-3xl bg-gradient-to-b from-white to-[#302CFF]">
        <div className="p-5 rounded-3xl bg-white">
          <Image src="assets/bulb.svg" width={90} height={90} alt="" />
        </div>
      </div>
      <h2 className="font-semibold text-[24px]">Content Marketing</h2>
      <p className="text-[18px] text-[#71717A]">
        Creating impactful, lasting relationships <br /> with valued clients
        worldwide.
      </p>
    </div>
  );
};

export default Services;
