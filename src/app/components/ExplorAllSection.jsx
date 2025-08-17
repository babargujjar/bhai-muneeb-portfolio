import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import IconButton from "./IconButton";
import { Search } from "lucide-react";
import Services from "./Services";
import Link from "next/link";

const ExplorAllSection = () => {
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
 
  return (
    <div>
      <div className="text-center pb-10">
        <Button text="Innovative Services" />
        <Heading
          title="Smart eCommerce"
          highlight="Solutions"
          className="max-w-[90%] sm:max-w-[80%] lg:max-w-[50%] text-4xl sm:text-6xl my-7"
        />
        <p className="text-[#71717A] text-[18px] font-normal my-6 leading-7 sm:max-w-[60%] lg:max-w-[40%] mx-auto">
          Empowering global sellers with scalable strategies across Shopify,
          eBay, Vinted, and TikTok Shop.
        </p>
        <div className="flex justify-center items-center">
          <Link href={"/services"}>
            <IconButton text="Explore All Services" Icon={Search} />
          </Link>
        </div>
      </div>

      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {services.map((v, i) => (
          <Link key={i} href={`/services/${v.slug}`} className="block">
            <div className="flex flex-col h-full">
              <Services service={v} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExplorAllSection;
