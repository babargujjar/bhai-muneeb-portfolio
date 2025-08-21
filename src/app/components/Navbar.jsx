"use client";
import { Send, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import allServicesData from "@/data/services";

const Navbar = () => {
  const pathname = usePathname();

  const navLinksForSmallScreen = [
    { label: "Home", href: "/" },
    { label: "Private Label", href: "/privatelabel" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/" },
  ];
  const navLinks = [
    { label: "Private Label", href: "/privatelabel" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <div className="relative border-b-yellow-400 border-b-2">
      <div className="max-w-6xl px-5 mx-auto">
        <div className="font-[var(--font-outfit)] shadow-gray-100 bg-white border-[#CDCDCD]">
          <div className="flex justify-between items-center p-3 relative">
            {/* Logo */}
            <div className="w-40 text-center">
              <Link href={"/"}>
                <img src="/assets/logo2.png" alt="" />
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-3">
              {/* Desktop Links */}
              <div className="flex gap-3 lg:gap-5 text-[16px] lg:text-[18px] font-normal items-center relative">
                <Link href={"/"}>
                  <h2>Home</h2>
                </Link>

                {/* Services Dropdown */}
                <div
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link href={"/services"}>
                      <h2>Services</h2>
                    </Link>
                    <ChevronDown size={16} />
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 mt-2 rounded-md p-3 min-w-[250px] z-50"
                      >
                        {allServicesData.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block px-3 py-2 hover:bg-gray-100 rounded-md text-sm"
                            onClick={() => setServicesOpen(false)}
                          >
                            {service.kicker}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href}>
                    <h2>{link.label}</h2>
                  </Link>
                ))}
              </div>
              {/* Desktop Contact Button */}
              <Link
                href={"/contact"}
                className="px-4 hover:bg-yellow-400 hover:text-white py-2 font-extrabold text-black transition-colors duration-200 border-2 rounded-full border-brand hover:bg-brand"
              >
                Contact
              </Link>
            </div>
            {/* Mobile Toggle */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-md cursor-pointer focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border mt-5 border-[#CDCDCD] top-20 absolute w-full rounded-lg bg-white px-3 py-4 shadow-md font-[var(--font-outfit)] text-[18px] space-y-4 z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {/* Regular Links */}
            {navLinksForSmallScreen.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                <div className="pb-2">{link.label}</div>
              </Link>
            ))}

            {/* Mobile Services Dropdown */}
            <div>
              <div
                className="flex justify-between items-center pb-2 cursor-pointer"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  size={18}
                />
              </div>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="pl-3 text-[16px] space-y-2 overflow-hidden"
                  >
                    {allServicesData.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        <div className="px-2 py-1 hover:bg-gray-100 rounded-md text-sm">
                          {service.kicker}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <div className="pt-2">
              <Link href={"/contact"}>
                <IconButton text="Contact" Icon={Send} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
