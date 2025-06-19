import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-b border-b-[#CDCDCD]">
        <h2 className="text-[24px] md:text-[30px] font-semibold text-black text-center md:text-left">
          Contact Us Today
        </h2>
        <div className="relative w-full max-w-md">
          <input
            placeholder="Enter Email"
            className="w-full p-3 pr-28 border border-[#CDCDCD] rounded-lg"
            type="text"
          />
          <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#302CFF] py-[10px] px-4 text-white text-sm rounded-lg">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-10 border-b border-b-[#CDCDCD] flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Logo and Description */}
        <div className="md:w-1/2 flex flex-col gap-5">
          <h2 className="text-[24px] font-semibold">logo</h2>
          <p className="text-[#71717A] text-[16px] max-w-md">
            Stay connected with us for expert consulting solutions that drive
            growth and success.
          </p>
          <div className="flex gap-3">
            <div className="bg-white p-2 border border-[#71717A] rounded-full">
              <Twitter className="w-5 h-5 text-[#71717A]" />
            </div>
            <div className="bg-white p-2 border border-[#71717A] rounded-full">
              <Facebook className="w-5 h-5 text-[#71717A]" />
            </div>
            <div className="bg-white p-2 border border-[#71717A] rounded-full">
              <Linkedin className="w-5 h-5 text-[#71717A]" />
            </div>
          </div>
        </div>

        {/* Right: Links */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2 className="text-black text-[16px]">Home One</h2>
              <h2 className="text-black text-[16px]">Home One</h2>
              <h2 className="text-black text-[16px]">Home One</h2>
              <h2 className="text-black text-[16px]">Home One</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Note */}
      <h2 className="pt-8 text-center text-[14px] md:text-[16px] text-black">
        Copyright © Guidora | Designed by{" "}
        <span className="text-[#71717A]">Theme-Sleek</span> - Powered by{" "}
        <span className="text-[#71717A]">Webflow.</span>
      </h2>
    </div>
  );
};

export default Footer;
