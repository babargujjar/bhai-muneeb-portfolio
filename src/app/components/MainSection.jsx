"use client";
import { Search, Send } from "lucide-react";
import React from "react";
import IconButton from "./IconButton";
import Button from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Heading from "./Heading";
import ParticlesBackground from "./ParticlesBackground";

const MainSection = () => {
  const icons = [
    { Icon: Instagram, href: "https://www.instagram.com/betelbee.official/" },
    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577745511032" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/betelbee-594993371/" },
  ];
  return (
    <div className="relative overflow-hidden pt-5">
      {/* Background particles absolute */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="text-center max-w-6xl mx-auto px-5 relative z-10 bg-transparent">
        <div className="pt-12 sm:pt-19 !bg-transparent flex justify-between max-w-6xl mx-auto items-end">
         
          <div className="text-center">
            {/* <Button text="Innovative Strategies" /> */}
            <Heading
              title="Smart Solutions for Global "
              highlight="eCommerce"
              className=" mt-5 max-w-[95%] sm:max-w-[90%] md:lg-w-[70%] text-4xl sm:text-6xl"
            />
            <p className="text-[#71717A] text-[18px] font-normal my-6 leading-7 max-w-[75%] mx-auto">
              Scale your business with expert Shopify, eBay, Vinted, TikTok
              Shop, web dev, SEO, and ad services.
            </p>
            <div className="flex items-center pt-2 justify-center gap-3">
              <IconButton text="Explore Services" Icon={Search} />
              <IconButton text="Get Free Demo" Icon={Send} />
              {/* <button className="buttoncss">
                Get Free Demo <Send className="w-4" />
              </button> */}
            </div>
          </div>
        </div>
        <div>
          <motion.div className="flex mt-14 items-center justify-center gap-6">
            {icons.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to ${href}`}
              >
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
              </a>
            ))}
          </motion.div>
          <h2 className="text-black text-[18px] mt-5">
            Follow us on social media
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
