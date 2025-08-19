"use client";
import { Search, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import Link from "next/link";

const MainSection = () => {
  const phrases = ["Start Faster", "Scale Smarter", "Sell Everywhere"];
  const icons = [
    { Icon: Instagram, href: "https://www.instagram.com/betelbee.official/" },
    { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577745511032" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/betelbee-594993371/" },
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const currentLength = text.length;
    const typingSpeed = 100;
    const pauseDuration = 1000;
    let timer;

    if (typing && currentLength < currentPhrase.length) {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, currentLength + 1));
      }, typingSpeed);
    } else if (typing && currentLength === currentPhrase.length) {
      timer = setTimeout(() => {
        setTyping(false);
      }, pauseDuration);
    } else if (!typing && currentLength > 0) {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, currentLength - 1));
      }, typingSpeed / 2);
    } else if (!typing && currentLength === 0) {
      setTyping(true);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, typing, index]);
  return (
    <div className="relative overflow-hidden pt-5">
      {/* Background particles absolute */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <div className="text-center max-w-6xl mx-auto px-5 relative z-10 bg-transparent">
        <div className="pt-12 sm:pt-19 !bg-transparent flex justify-between max-w-6xl mx-auto items-end">
          <div className="text-center">
            <div className="flex justify-center items-center text-center min-h-[200px] overflow-hidden">
              <h2 className="font-bold text-black max-w-[95%] sm:max-w-[90%] md:max-w-[70%] text-4xl sm:text-6xl leading-snug">
                We Help You
                <div className="relative h-[72px] sm:h-[80px] mt-2 flex justify-center items-center overflow-hidden max-w-full">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#feb436] whitespace-nowrap"
                  >
                    {text}
                  </motion.span>
                </div>
              </h2>
            </div>
            <p className="text-[#71717A] text-[18px] font-normal my-6 leading-7 max-w-[75%] mx-auto">
              From Product to Profit — We Handle It All Sourcing, branding,
              launching, and scaling made easy across Amazon, eBay,
              Walmart, Etsy, and more.
            </p>
            <div className="flex items-center pt-2 justify-center gap-3">
              <Link href={"/services"}>
                <IconButton text="Explore Services" Icon={Search} />
              </Link>
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
