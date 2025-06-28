import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/" },
    { label: "Blog", href: "/" },
  ];
  const services = [
    { slug: "ecommerce", title: "eCommerce Store Setup" },
    { slug: "seo-marketing", title: "SEO & Performance Marketing" },
    { slug: "content-marketing", title: "Content Marketing" },
    { slug: "web-development", title: "Custom Web Development" },
    { slug: "graphic-design", title: "Graphic Design & Branding" },
    { slug: "social-media-marketing", title: "Social Media & Marketing" },
  ];
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
          <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#feb436] cursor-pointer py-[10px] px-4 text-white text-sm rounded-lg">
            SUBMIT
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-10 border-b border-b-[#CDCDCD] flex flex-col md:flex-row justify-between gap-10">
        {/* Left: Logo and Description */}
        <div className="md:w-1/2 flex flex-col gap-5">
          <div className="w-50">
            <Link href={"/"}>
              <img src="/assets/logo2.png" alt="" />
            </Link>
          </div>
          <p className="text-[#71717A] text-[16px] max-w-md">
            Stay connected with us for expert consulting solutions that drive
            growth and success.
          </p>
          <div>
            <h2 className=" text-[16px]">+92 303 0768989</h2>
            <h2 className="text-[16px]">betelbee.official@gmail.com</h2>
          </div>
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
        <div className="md:w-1/2 grid grid-cols-2  gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-500 font-semibold text-[18px]">Pages</h2>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <h2 className="text-black text-[16px]">{link.label}</h2>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-500 font-semibold text-[18px]">
              Our Services
            </h2>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="text-black text-[16px] flex items-center gap-1">
                  <span className="text-gray-500 text-[20px] leading-[20px]">
                    •
                  </span>
                  {service.title}
                </div>
              </Link>
            ))}
          </div>
          {/* {[1].map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2 className="text-black text-[16px]">Home One</h2>
              <h2 className="text-black text-[16px]">Home One</h2>
              <h2 className="text-black text-[16px]">Home One</h2>
              <h2 className="text-black text-[16px]">Home One</h2>
            </div>
          ))} */}
        </div>
      </div>

      {/* Bottom Note */}
      <h2 className="pt-8 text-center text-[14px] md:text-[16px] text-black">
        © 2025 Betelbee | Design & Development by{" "}
        <span className="text-[#feb436]">Betelbee.</span>
      </h2>
    </div>
  );
};

export default Footer;
