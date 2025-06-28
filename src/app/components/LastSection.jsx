"use client";
import React from "react";
import { Instagram, Facebook, Linkedin, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import IconButton from "./IconButton";

const LastSection = () => {
  const icons = [
    { Icon: Instagram, href: "https://www.instagram.com/betelbee.official/" },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61577745511032",
    },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/betelbee-594993371/" },
  ];

  return (
    <div className="border text-center py-14 sm:py-20 border-[#CDCDCD] my-14 w-full rounded-3xl px-4 sm:px-10">
      <div>
        {/* Heading */}
        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-semibold text-black max-w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto">
          We Specialize in Various Business Solutions
        </h2>

        {/* Subtext */}
        <p className="text-[#71717A] text-[16px] sm:text-[18px] mt-5 max-w-[90%] mx-auto">
          We provide expert solutions tailored to drive your business success.
        </p>

        {/* Animated Icons */}
        <motion.div className="flex mt-10 items-center justify-center gap-5 sm:gap-6">
          {icons.map(({Icon,href}, i) => (
            <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${href}`}
          >
            <motion.div
              className="border-[#71717A] border-2 p-2 sm:p-3 rounded-full text-[#71717A]"
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, -10, -10, 0, 0] }}
              transition={{
                duration: 3,
                times: [0, 0.1667, 0.5, 0.6667, 1],
                ease: ["easeIn", "linear", "easeIn", "linear"],
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
            </a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="flex mt-8 justify-center items-center">
          <IconButton text="Join Us" Icon={UserPlus} />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
