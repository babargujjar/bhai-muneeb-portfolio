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
         "We build and manage online stores that are designed for performance and growth. Whether it’s Shopify, WooCommerce, Magento, or custom platforms, we create conversion-focused storefronts backed by the latest technology. Our approach includes:",
       points: [
         "AI-driven copywriting and image optimization to make your store more appealing.",
         "Smart product catalog import & tagging for seamless organization.",
         "Conversion roadmaps (A/B, CRO testing) to continuously improve sales.",
         "Comprehensive store health checks covering speed, SEO, and user experience with heatmaps.",
         "We don’t just set up stores — we ensure they’re optimized, scalable, and ready to sell.",
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
       title: "Amazon, eBay, Etsy, TikTok Shop, Vinted",
       kicker: "Marketplace Management",
       description:
         "Selling on marketplaces requires precision — we help you dominate platforms like Amazon, eBay, Etsy, and TikTok Shop with:",
       points: [
         "AI-optimized product listings for higher visibility.",
         "Auto-repricing & buy-box tactics to stay competitive.",
         "Review mining & response automation to build credibility.",
         "nventory synchronization across platforms to prevent overselling.",
         "With our marketplace expertise, you’ll expand your reach, grow your sales, and strengthen your online presence.",
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
             d="M4 4h16v6H4zM4 14h16v6H4z"
             stroke="currentColor"
             strokeWidth="2"
           />
         </svg>
       ),
       slug: "marketplace-management",
     },
     {
       title: "Supplier Vetting, MOQs & 3PL",
       kicker: "Sourcing & Fulfillment",
       description:
         "Our sourcing and fulfillment services ensure you always have the right products, suppliers, and logistics in place. We help you avoid unreliable suppliers and stock issues with:",
       points: [
         "Supplier vetting & MOQ management for reliable partnerships.",
         "AI-assisted supplier scoring to choose the best options.",
         "Demand forecasting & auto-reorder alerts to prevent stockouts.",
         "Dropshipping and wholesale workflows tailored to your business.",
         "PO automation & quality control (QC) plans for consistency.",
         "From supplier selection to final delivery, we make sure your supply chain is efficient, reliable, and profitable.",
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
         "A seamless order experience builds customer trust. We design logistics systems that ensure speed, accuracy, and visibility:",
       points: [
         "Smart routing to nearest warehouse for faster delivery.",
         "Delivery ETA predictions & exception handling to reduce surprises.",
         "Branded tracking portals with proactive updates for customers.",
         "Automated returns processing to save time and effort.",
         "Fraud detection & prevention flags for safe transactions.",
         "We make order management simple while boosting customer satisfaction and reducing operational headaches.",
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
         "We combine creativity with data-driven strategies to deliver measurable results. Our digital marketing solutions cover:",
       points: [
         "SEO and paid social ads powered by AI keyword research.",
         "Audience modeling & budget pacing to reach the right customers at the right time.",
         "Creative generation & fatigue detection to keep campaigns fresh.",
         "Conversion rate optimization (CRO) testing to maximize ROI.",
         "Impact-ranked test ideas for continuous growth.",
         "From traffic to sales, we ensure every marketing dollar delivers maximum value.",
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
         "Personalized communication builds loyalty — we help you automate it without losing the human touch. Our services include:",
       points: [
         "AI-driven customer segmentation (RFM, churn risk).",
         "Persona-based copywriting that resonates with your audience.",
         "Replenishment triggers & predictive lifetime value modeling.",
         "Seamless CRM integrations for a unified customer view.",
         "-Abandoned cart recovery & win-back flows to capture lost revenue.",
         "We make your customer communication smart, automated, and revenue-focused.",
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
         "Customer experience defines your brand — we make sure it shines. With a mix of AI and human support, we deliver:",
       points: [
         "24/7 AI chatbots with human handover for instant responses.",
         "Sentiment-based routing to handle priority cases with care.",
         "Refund & reshipment macros for faster resolutions.",
         "Quiz-driven guided selling with AI recommendations.",
         "We create support systems that not only solve problems but also build trust and boost sales.",
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
         "Every decision should be backed by data and protected by security. We offer:",
       points: [
         "Custom dashboards unifying ads, store, and CRM data.",
         "AI anomaly detection to flag sudden shifts in CAC, ROAS, or sales.",
         "Fraud prevention tools including AI risk scoring.",
         "Chargeback reduction strategies to safeguard your revenue.",
         "With actionable insights and strong security, you stay ahead while staying protected.",
         "",
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
         "Your brand identity is more than a logo — it’s the story customers connect with. We design creative solutions that stand out:",
       points: [
         "Logo systems & style guides that define your brand.",
         "Packaging design that reflects quality and value.",
         "Content production tailored for your audience.",
         "AI concept boards & lifestyle mockups for faster, better creative direction.",
         "We ensure your brand not only looks good but also leaves a lasting impression.",
       ],
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
