"use client";
import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  {
    title: "Strategic Solutions for Growth",
    desc: "The consultancy team delivered customized strategies that boosted our business growth and operational efficiency beyond expectations. Truly remarkable service and support.",
    name: "Michael Anderson",
    role: "Operations Manager",
    avatar: "/assets/image1.jpeg",
    logo: "/assets/image3.svg",
  },
  {
    title: "Expert Advice and Guidance",
    desc: "Outstanding service and consistent guidance helped us take better decisions with confidence. Highly recommend their consultancy services.",
    name: "Sarah Williams",
    role: "Business Analyst",
    avatar: "/assets/image1.jpeg",
    logo: "/assets/image3.svg",
  },
  {
    title: "Results-Oriented Consulting",
    desc: "Professional and reliable consultants. Their support resulted in visible growth and smooth operations in a short period.",
    name: "David Smith",
    role: "Project Lead",
    avatar: "/assets/image1.jpeg",
    logo: "/assets/image3.svg",
  },
  {
    title: "Outstanding Strategic Planning",
    desc: "Their unique approach to planning and execution gave our business a strong competitive edge. Truly commendable.",
    name: "Emma Johnson",
    role: "CEO",
    avatar: "/assets/image1.jpeg",
    logo: "/assets/image3.svg",
  },
];

const BigCard = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNext = () => {
    if (slideIndex < cardData.length - 2) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const getCard = (index) => cardData[index % cardData.length];

  return (
    <div className="relative w-full max-w-6xl overflow-hidden mx-auto">
      <div className="text-center my-20">
        <Button text="Our Testimonial" />
        <Heading
          title="Trusted by Clients"
          highlight="Worldwide"
          className="text-[48px] max-w-[45%] my-3"
        />
        <div className="flex justify-center">
          <p className="text-[18px] text-[#71717A] max-w-[50%]">
            Experience proven success through our expert consultancy services,
            designed to deliver tailored solutions that drive business growth
            and excellence
          </p>
        </div>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${slideIndex * 50}%)`,
        }}
      >
        {Array.from({ length: cardData.length + 2 }).map((_, i) => {
          const card = getCard(i);
          return (
            <div key={i} className="min-w-[50%] px-2">
              <div className="border border-[#CDCDCD] p-10 rounded-2xl h-full bg-white">
                <h2 className="text-[20px] font-semibold text-black mb-5">
                  {card.title}
                </h2>
                <p className="pb-5 text-[#71717A] text-[18px] ">{card.desc}</p>
                <div className="flex pt-5 border-t border-t-[#CDCDCD] justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      className="rounded-full"
                      src={card.avatar}
                      width={74}
                      height={74}
                      alt=""
                    />
                    <div>
                      <h2 className="text-[20px] font-semibold text-black">
                        {card.name}
                      </h2>
                      <p className="text-[#71717A] text-[18px]">{card.role}</p>
                    </div>
                  </div>
                  <div>
                    <Image src={card.logo} width={75} height={75} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-5 mt-8">
        <button
          onClick={handlePrev}
          disabled={slideIndex === 0}
          className={`p-3 rounded-full border transition ${
            slideIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={handleNext}
          disabled={slideIndex >= cardData.length - 2}
          className={`p-3 rounded-full border transition ${
            slideIndex >= cardData.length - 2
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BigCard;
