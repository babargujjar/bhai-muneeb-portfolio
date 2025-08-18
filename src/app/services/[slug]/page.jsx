"use client";
import Image from "next/image";
import { use } from "react";

export default function ServiceDetail({ params }) {
  const { slug } = use(params);
  
  // const services = [
  //   {
  //     image: "/assets/ecommerce.png",
  //     slug: "ecommerce",
  //     title: "eCommerce Store Setup",
  //     desc: "Launch and scale stores on Shopify, eBay, Vinted, and TikTok Shop—fully optimized for success.",
  //     features: [
  //       "Shopify, eBay, Vinted & TikTok store integration",
  //       "Responsive design for all devices",
  //       "Payment & shipping setup",
  //       "Ongoing support & scaling strategy",
  //     ],
  //     whyChooseUs: [
  //       "Platform-specific expertise",
  //       "Optimized for sales & conversions",
  //       "Tailored support for your niche",
  //       "Analytics & performance insights",
  //     ],
  //     ctaText: "Launch My Store",
  //   },
  //   {
  //     image: "/assets/SEO.png",
  //     slug: "seo-marketing",
  //     title: "SEO",
  //     desc: "Boost your visibility on Google and drive high-converting traffic with expert SEO & paid ads.",
  //     features: [
  //       "Comprehensive keyword research",
  //       "On-page and technical SEO",
  //       "Backlink strategy",
  //       "Google Ads setup & management",
  //     ],
  //     whyChooseUs: [
  //       "White-hat techniques",
  //       "Transparent reporting",
  //       "ROI-focused strategies",
  //       "Proven ranking results",
  //     ],
  //     ctaText: "Improve My Rankings",
  //   },
  //   {
  //     image: "/assets/content.png",
  //     slug: "content-marketing",
  //     title: "Content Marketing",
  //     desc: "Build trust and drive sales with powerful, targeted content across platforms and channels.",
  //     features: [
  //       "Blog writing & content strategy",
  //       "Content calendars",
  //       "Platform-specific copywriting",
  //       "Visual content planning",
  //     ],
  //     whyChooseUs: [
  //       "Engaging storytelling",
  //       "Brand-aligned messaging",
  //       "SEO-integrated content",
  //       "Cross-platform expertise",
  //     ],
  //     ctaText: "Build My Content",
  //   },
  //   {
  //     image: "/assets/web.png",
  //     slug: "web-development",
  //     title: "Custom Web Development",
  //     desc: "Build fast, responsive, and branded websites tailored to your business goals.",
  //     features: [
  //       "Fully responsive design",
  //       "Speed & SEO optimized",
  //       "CMS & admin panel integration",
  //       "Custom animations & features",
  //     ],
  //     whyChooseUs: [
  //       "Modern tech stack",
  //       "Scalable architecture",
  //       "Conversion-first layouts",
  //       "Ongoing maintenance options",
  //     ],
  //     ctaText: "Build My Website",
  //   },
  //   {
  //     image: "/assets/graphic.png",
  //     slug: "graphic-design",
  //     title: "Graphic Design & Branding",
  //     desc: "Professional, eye-catching visuals and identity design that sets your brand apart.",
  //     features: [
  //       "Logo, brand kit & style guide",
  //       "Marketing & social media designs",
  //       "Custom illustrations",
  //       "Product packaging design",
  //     ],
  //     whyChooseUs: [
  //       "Creative, custom-first approach",
  //       "Consistent visual identity",
  //       "Unlimited revisions (up to 2 weeks)",
  //       "Experienced designers",
  //     ],
  //     ctaText: "Design My Brand",
  //   },
  //   {
  //     image: "/assets/social.png",
  //     slug: "social-media-marketing",
  //     title: "Social Media & Marketing",
  //     desc: "Grow your audience and drive engagement through data-backed campaigns across all major platforms.",
  //     features: [
  //       "Platform-specific strategy",
  //       "Creative post designs",
  //       "Ad campaigns & targeting",
  //       "Monthly reporting",
  //     ],
  //     whyChooseUs: [
  //       "Audience growth specialists",
  //       "Paid & organic strategy",
  //       "Content scheduling systems",
  //       "Clear performance tracking",
  //     ],
  //     ctaText: "Grow My Audience",
  //   },
  // ];
   const services = [
     {
       title: "Shopify / Woo / Magento + Custom",
       kicker: "Store Setup & Management",
       description:
         "Conversion‑focused builds with AI copy, image cleanup, smart collections, and health checks (speed, SEO, UX heatmaps).",
       points: [
         "Product catalog import & tagging",
         "AI testing roadmap (A/B, CRO)",
       ],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M4 6h16M4 12h16M4 18h16"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
           />
         </svg>
       ),
       slug: "store-setup-management",
     },
     {
       title: "Supplier Vetting, MOQs & 3PL",
       kicker: "Sourcing & Fulfillment",
       description:
         "AI‑assisted supplier scoring, demand forecasting, auto‑reorder alerts, and smart buffers to prevent stockouts.",
       points: ["Dropship & wholesale workflows", "PO automation & QC plans"],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M3 7h18v10H3V7zm3 0v10M18 7v10"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
           />
         </svg>
       ),
       slug: "sourcing-fulfillment",
     },
     {
       title: "Smart Routing & Tracking",
       kicker: "Order Processing & Logistics",
       description:
         "Route orders to the nearest warehouse, predict delivery ETAs and exceptions, and offer branded tracking with proactive updates.",
       points: ["Returns automation & fraud flags"],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M3 12h18M3 12l4-4m-4 4l4 4"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       ),
       slug: "order-processing-logistics",
     },
     {
       title: "SEO, Paid Social & CRO",
       kicker: "Digital Marketing & Ads",
       description:
         "AI keyword research, creative generation, audience modeling, and budget pacing with fatigue detection.",
       points: ["Impact‑ranked test ideas"],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M4 4h16v6H4zM9 20l6-10"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       ),
       slug: "digital-marketing-ads",
     },
     {
       title: "Automation & Personalization",
       kicker: "Email, SMS & CRM",
       description:
         "AI segments (RFM, churn risk), persona‑based copy, replenishment triggers, and predictive LTV — all synced to your CRM.",
       points: ["Abandon cart & win‑back flows"],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M4 6h16v12H4zM4 6l8 7 8-7"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       ),
       slug: "email-sms-crm",
     },
     {
       title: "24/7 AI Chat + Human",
       kicker: "Support & Personalization",
       description:
         "Instant support with sentiment routing, macros for refunds/reships, and quiz‑driven guided selling with recommendations.",
       points: [],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M12 2a5 5 0 015 5v2a5 5 0 11-10 0V7a5 5 0 015-5zm-7 18a7 7 0 1114 0H5z"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       ),
       slug: "support-personalization",
     },
     {
       title: "Dashboards, Anomalies & Fraud",
       kicker: "Analytics & Security",
       description:
         "Unify ads, store & CRM data, detect sudden CAC/ROAS shifts, and reduce chargebacks with AI risk scoring.",
       points: [],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M4 20V4h16v16H4zm4-4l3-4 3 2 2-3"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       ),
       slug: "analytics-security",
     },
     {
       title: "Identity, Packaging & Content",
       kicker: "Branding & Creative",
       description:
         "Logo systems, packaging, style guides, and production with AI concept boards and lifestyle mockups.",
       points: [],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M4 20l8-16 8 16H4z" stroke="currentColor" strokeWidth="2" />
         </svg>
       ),
       slug: "branding-creative",
     },
     {
       title: "Amazon, eBay, Etsy, TikTok",
       kicker: "Marketplace Management",
       description:
         "AI listing SEO, auto‑repricing, buy‑box tactics, review mining and response automation, plus inventory sync.",
       points: [],
       icon: (
         <svg
           width="16"
           height="16"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M4 4h16v6H4zM4 14h16v6H4z"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       ),
       slug: "marketplace-management",
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
    <div className="max-w-6xl mx-auto px-6 py-20 bg-white text-black">

      <h2>{service.title}</h2>
      <h2>{service.kicker}</h2>
      {/* Header */}
      {/* <div className="text-center mb-16">
        <Image
          src={service.image}
          width={60}
          height={60}
          alt={service.title}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">{service.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{service.desc}</p>
      </div> */}

      {/* Features */}
      {/* <div className="mb-16">
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
      </div> */}

      {/* Why Choose Us */}
      {/* <div className="mb-16">
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
      </div> */}

      {/* CTA */}
      {/* <div className="text-center py-12 bg-[#ffb02b] rounded-xl">
        <h3 className="text-2xl font-bold text-black mb-4">
          Let’s get started on your success journey!
        </h3>
        <a
          href="/contact"
          className="inline-block mt-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition"
        >
          {service.ctaText}
        </a>
      </div> */}
    </div>
  );
}
