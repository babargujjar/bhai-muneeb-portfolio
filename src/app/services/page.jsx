import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Services from "../components/Services";
import Link from "next/link";

const page = () => {
  const services = [
    {
      image: "/assets/ecommerce.png",
      slug: "ecommerce",
      title: "eCommerce Store Setup",
      desc: "Launch and scale stores on Shopify, eBay, Vinted, and TikTok Shop—fully optimized for success.",
    },
    {
      image: "/assets/SEO.png",
      slug: "seo-marketing",
      title: "SEO & Performance Marketing",
      desc: "Boost your visibility on Google and drive high-converting traffic with expert SEO & paid ads.",
    },
    {
      image: "/assets/content.png",
      slug: "content-marketing",
      title: " Content Marketing",
      desc: "Build trust and drive sales with powerful, targeted content across platforms and channels.",
    },
    {
      image: "/assets/web.png",
      slug: "web-development",
      title: "Custom Web Development",
      desc: "Build fast, responsive, and branded websites tailored to your business goals.",
    },
    {
      image: "/assets/graphic.png",
      slug: "graphic-design",
      title: "Graphic Design & Branding",
      desc: "Professional, eye-catching visuals and identity design that sets your brand apart.",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center pb-10">
        <Heading
          title="Smart eCommerce"
          highlight="Solutions"
          className="max-w-[90%] sm:max-w-[80%] lg:max-w-[40%] text-4xl sm:text-6xl my-7"
        />
        <p className="text-[#71717A] text-[18px] font-normal my-6 leading-7 sm:max-w-[60%] lg:max-w-[40%] mx-auto">
          Empowering global sellers with scalable strategies across Shopify,
          eBay, Vinted, and TikTok Shop.
        </p>
      </div>

      <div className=" bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((v, i) => (
          <Link key={i} href={`/services/${v.slug}`}>
            <div className="my-8 cursor-pointer">
              <Services service={v} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
