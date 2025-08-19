import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Image from "next/image";
import IconButton from "./IconButton";
import { Search } from "lucide-react";
import Link from "next/link";

const LeftTextRightImage = ({
  buttonText,
  headingTitle,
  headingHighlight,
  paragraph,
  features,
  ctaText,
  ctaIcon,
  imageSrc,
  imageClassName,
  keyPoints
}) => {

  return (
    <div className="grid grid-cols-2 items-center h-full lg:gap-20 max-w-6xl mx-auto gap-10  py-8">
      <div className="md:col-span-1  col-span-2">
        <Button text={buttonText} />
        <Heading
          title={headingTitle}
          highlight={headingHighlight}
          className="text-[35px] lg:text-[48px]"
        />
        <p className="text-[16px] md:text-[18px] text-[#71717A]">{paragraph}</p>
        <div>
          <div className="my-5">
            {keyPoints.map((v, i) => (
              <div key={i} className="flex gap-4 mb-2 items-center ">
                <Image src={v.icon} width={20} height={15} alt="" />
                <p className="text-[16px] md:text-[18px] text-[#71717A]">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
          <Link href={"/contact"}>
            <IconButton text={"Contact Us"} Icon={Search} />
          </Link>
        </div>
      </div>
      <div className="md:col-span-1 col-span-2">
        <div className="w-full h-[700px] rounded-3xl flex bg-[#D8E6FF] justify-center items-center">
          <img
            src={imageSrc}
            className={`rounded-3xl ${imageClassName}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LeftTextRightImage;
