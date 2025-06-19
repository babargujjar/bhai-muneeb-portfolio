"use client";
import { Search, Send } from "lucide-react";
import React from "react";
import IconButton from "./IconButton";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Facebook, Linkedin } from "lucide-react";
import Heading from "./Heading";

const MainSection = () => {
  const icons = [Twitter, Facebook, Linkedin];
  return (
    <div className="text-center">
      <div className="bg-white pt-16 sm:pt-32 flex justify-between max-w-6xl mx-auto items-end">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -40, 0] }}
          transition={{
            duration: 6,
            times: [0, 0.2, 0.5, 0.8, 1],
            ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
            repeat: Infinity,
          }}
          className="md:block hidden"
        >
          <Image
            className="rounded-4xl transform -rotate-[15deg] origin-top-left"
            src="/assets/image1.jpeg"
            width={200}
            height={200}
            alt=""
          />
        </motion.div>
        <div className="text-center">
          {/* <Button text="Innovative Strategies" /> */}
          <Heading
            title="Smart Solutions for Global "
            highlight="eCommerce"
            className=" mt-5 max-w-[95%] sm:max-w-[90%] md:lg-w-[70%] text-4xl sm:text-6xl"
          />
          <p className="text-[#71717A] text-[18px] font-normal my-6 leading-7 max-w-[75%] mx-auto">
            Scale your business with expert Shopify, eBay, Vinted, TikTok Shop,
            web dev, SEO, and ad services.
          </p>
          <div className="flex items-center pt-2 justify-center gap-3">
            <IconButton text="Explore Services" Icon={Search} />
            <button className="buttoncss">
              Get Free Demo <Send className="w-4" />
            </button>
          </div>
        </div>
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: [-80, -40, -80] }}
          transition={{
            duration: 6,
            times: [0, 0.2, 0.5, 0.8, 1],
            ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
            repeat: Infinity,
          }}
          className="md:block hidden"
        >
          <Image
            className="rounded-4xl transform rotate-[15deg] origin-top-left"
            src="/assets/image1.jpeg"
            width={200}
            height={200}
            alt=""
          />
        </motion.div>
      </div>
      <div>
        <motion.div className="flex mt-14 items-center justify-center gap-6">
          {icons.map((Icon, i) => (
            <motion.div
              className=" border-[#71717A] border-2 p-2 rounded-full text-[#71717A]"
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
              <Icon className="w-5 h-5 " />
            </motion.div>
          ))}
        </motion.div>
        <h2 className="text-black text-[18px] mt-5">
          Follow us on social media
        </h2>
      </div>
    </div>
  );
};

export default MainSection;
