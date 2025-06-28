// import Image from "next/image";

// const services = [
//   {
//     image: "/assets/ecommerce.png",
//     slug: "ecommerce",
//     title: "eCommerce Store Setup",
//     desc: "Launch and scale stores on Shopify, eBay, Vinted, and TikTok Shop—fully optimized for success.",
//   },
//   {
//     image: "/assets/SEO.png",
//     slug: "seo-marketing",
//     title: "SEO",
//     desc: "Boost your visibility on Google and drive high-converting traffic with expert SEO & paid ads.",
//   },
//   {
//     image: "/assets/content.png",
//     slug: "content-marketing",
//     title: "Content Marketing",
//     desc: "Build trust and drive sales with powerful, targeted content across platforms and channels.",
//   },
//   {
//     image: "/assets/bulb.svg",
//     slug: "web-development",
//     title: "Custom Web Development",
//     desc: "Build fast, responsive, and branded websites tailored to your business goals.",
//   },
//   {
//     image: "/assets/bulb.svg",
//     slug: "graphic-design",
//     title: "Graphic Design & Branding",
//     desc: "Professional, eye-catching visuals and identity design that sets your brand apart.",
//   },
// ];

// export default function ServiceDetail({ params }) {
//   const { slug } = params;

//   const service = services.find((s) => s.slug === slug);

//   if (!service) {
//     return (
//       <div className="text-center py-20 text-red-500">Service not found</div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-16">
//       <div className="flex flex-col items-center text-center space-y-6">
//         <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#9333EA] flex items-center justify-center">
//           <Image
//             src={service.image}
//             width={40}
//             height={40}
//             alt={service.title}
//           />
//         </div>
//         <h1 className="text-4xl font-bold text-[#0F172A]">{service.title}</h1>
//         <p className="text-lg text-gray-600 max-w-2xl">{service.desc}</p>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { use } from "react";

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  
  const services = [
    {
      image: "/assets/ecommerce.png",
      slug: "ecommerce",
      title: "eCommerce Store Setup",
      desc: "Launch and scale stores on Shopify, eBay, Vinted, and TikTok Shop—fully optimized for success.",
      features: [
        "Shopify, eBay, Vinted & TikTok store integration",
        "Responsive design for all devices",
        "Payment & shipping setup",
        "Ongoing support & scaling strategy",
      ],
      whyChooseUs: [
        "Platform-specific expertise",
        "Optimized for sales & conversions",
        "Tailored support for your niche",
        "Analytics & performance insights",
      ],
      ctaText: "Launch My Store",
    },
    {
      image: "/assets/SEO.png",
      slug: "seo-marketing",
      title: "SEO & Paid Ads",
      desc: "Boost your visibility on Google and drive high-converting traffic with expert SEO & paid ads.",
      features: [
        "Comprehensive keyword research",
        "On-page and technical SEO",
        "Backlink strategy",
        "Google Ads setup & management",
      ],
      whyChooseUs: [
        "White-hat techniques",
        "Transparent reporting",
        "ROI-focused strategies",
        "Proven ranking results",
      ],
      ctaText: "Improve My Rankings",
    },
    {
      image: "/assets/content.png",
      slug: "content-marketing",
      title: "Content Marketing",
      desc: "Build trust and drive sales with powerful, targeted content across platforms and channels.",
      features: [
        "Blog writing & content strategy",
        "Content calendars",
        "Platform-specific copywriting",
        "Visual content planning",
      ],
      whyChooseUs: [
        "Engaging storytelling",
        "Brand-aligned messaging",
        "SEO-integrated content",
        "Cross-platform expertise",
      ],
      ctaText: "Build My Content",
    },
    {
      image: "/assets/web.png",
      slug: "web-development",
      title: "Custom Web Development",
      desc: "Build fast, responsive, and branded websites tailored to your business goals.",
      features: [
        "Fully responsive design",
        "Speed & SEO optimized",
        "CMS & admin panel integration",
        "Custom animations & features",
      ],
      whyChooseUs: [
        "Modern tech stack",
        "Scalable architecture",
        "Conversion-first layouts",
        "Ongoing maintenance options",
      ],
      ctaText: "Build My Website",
    },
    {
      image: "/assets/graphic.png",
      slug: "graphic-design",
      title: "Graphic Design & Branding",
      desc: "Professional, eye-catching visuals and identity design that sets your brand apart.",
      features: [
        "Logo, brand kit & style guide",
        "Marketing & social media designs",
        "Custom illustrations",
        "Product packaging design",
      ],
      whyChooseUs: [
        "Creative, custom-first approach",
        "Consistent visual identity",
        "Unlimited revisions (up to 2 weeks)",
        "Experienced designers",
      ],
      ctaText: "Design My Brand",
    },
    {
      image: "/assets/social.png",
      slug: "social-media-marketing",
      title: "Social Media & Marketing",
      desc: "Grow your audience and drive engagement through data-backed campaigns across all major platforms.",
      features: [
        "Platform-specific strategy",
        "Creative post designs",
        "Ad campaigns & targeting",
        "Monthly reporting",
      ],
      whyChooseUs: [
        "Audience growth specialists",
        "Paid & organic strategy",
        "Content scheduling systems",
        "Clear performance tracking",
      ],
      ctaText: "Grow My Audience",
    },
  ];

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold text-xl">
        Service not found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white text-black">
      {/* Header */}
      <div className="text-center mb-16">
        <Image
          src={service.image}
          width={60}
          height={60}
          alt={service.title}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{service.desc}</p>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-[#ffb02b] mb-6">
          What's Included
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-base text-gray-800">
          {service.features.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm"
            >
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-[#ffb02b] mb-6">
          Why Choose Us?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-base text-gray-800">
          {service.whyChooseUs.map((item, index) => (
            <li
              key={index}
              className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm"
            >
              ⭐ {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center py-12 bg-[#ffb02b] rounded-xl">
        <h3 className="text-2xl font-bold text-black mb-4">
          Let’s get started on your success journey!
        </h3>
        <a
          href="/contact"
          className="inline-block mt-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition"
        >
          {service.ctaText}
        </a>
      </div>
    </div>
  );
}
