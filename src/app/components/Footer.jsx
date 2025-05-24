import React from 'react'
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="flex justify-between py-8 border-b border-b-[#CDCDCD]">
        <h2 className="text-[30px] font-semibold text-black">
          Contact Us Today
        </h2>
        <div className="relative overflow-hidden">
          <input
            placeholder="Enter Email"
            className="p-3 border pr-15 border-[#CDCDCD] rounded-lg"
            type="text"
          />
          <button className="rounded-lg absolute cursor-pointer right-0 bg-[#302CFF] py-[13px] px-4 text-white">
            SUBMIT
          </button>
        </div>
      </div>
      <div className="py-8 border-b w-full flex justify-between gap-5 border-b-[#CDCDCD]">
        <div className="flex w-[50%] flex-col justify-between gap-5">
          <h2>logo</h2>
          <p className="w-[50%] text-[#71717A] text-[18px]">
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
        <div className="flex w-[50%] justify-between gap-4">
          <div className="flex flex-col justify-between gap-3 ">
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
          </div>
          <div className="flex flex-col justify-between gap-3 ">
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
          </div>
          <div className="flex flex-col justify-between gap-3 ">
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
            <h2 className="text-black text-[18px]">Home One</h2>
          </div>
        </div>
      </div>
      <h2 className="pt-8 text-center text-[18px] text-black">
        Copyright © Guidora | Designed by{" "}
        <span className="text-[#71717A]">Theme-Sleek</span> - Powered by
        <span className="text-[#71717A]">Webflow.</span>
      </h2>
    </div>
  );
}

export default Footer