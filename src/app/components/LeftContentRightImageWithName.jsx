import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Image from "next/image";
import IconButton from "./IconButton";
import { Search } from "lucide-react";

const LeftTextRightImageWithName = ({
  buttonText,
  headingTitle,
  headingHighlight,
  paragraph,
  imageSrc,
  keyPoints,
}) => {
  return (
    <div className="grid grid-cols-2 items-center h-full lg:gap-20 max-w-6xl mx-auto gap-10 mt-15 py-14">
      <div className="md:col-span-1  col-span-2">
        <Button text={buttonText} />
        <Heading
          title={headingTitle}
          highlight={headingHighlight}
          className="text-[35px] lg:text-[48px]"
        />
        <p className="text-[16px] md:text-[18px] text-[#71717A]">{paragraph}</p>
        <div>
          <div className="my-7">
            {keyPoints.map((v, i) => (
              <div key={i} className="flex gap-4 mb-4 items-center ">
                <Image src={v.icon} width={20} height={15} alt="" />
                <p className="text-[16px] md:text-[18px] text-[#71717A]">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
          <IconButton text={"Contact Us"} Icon={Search} />
        </div>
      </div>
      <div className="md:col-span-1 col-span-2">
        <div className="w-full h-[700px] rounded-3xl flex bg-[#D8E6FF] justify-center items-center">
          <div className="w-[360px] flex gap-2 flex-col items-center justify-center bg-white rounded-3xl h-[380px]">
            <img
              className="w-[250px] object-cover h-[280px] rounded-xl"
              src={imageSrc}
              alt=""
            />
            <div>
              <h2 className="font-semibold text-[16px]">Muneeb Amjad</h2>
              <p className="text-[14px]">Founder and CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftTextRightImageWithName;
