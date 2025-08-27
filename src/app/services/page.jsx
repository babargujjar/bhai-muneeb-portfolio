// import React from "react";
// import Button from "../components/Button";
// import Heading from "../components/Heading";
// import Services from "../components/Services";
// import Link from "next/link";

// const page = () => {
//   const services = [
//     {
//       image: "/assets/ecommerce.png",
//       slug: "ecommerce",
//       title: "eCommerce Store Setup",
//       desc: "Launch and scale stores on Shopify, eBay, Vinted, and TikTok Shop—fully optimized for success.",
//     },
//     {
//       image: "/assets/SEO.png",
//       slug: "seo-marketing",
//       title: "SEO ",
//       desc: "Boost your visibility on Google and drive high-converting traffic with expert SEO & paid ads.",
//     },
//     {
//       image: "/assets/content.png",
//       slug: "content-marketing",
//       title: " Content Marketing",
//       desc: "Build trust and drive sales with powerful, targeted content across platforms and channels.",
//     },
//     {
//       image: "/assets/web.png",
//       slug: "web-development",
//       title: "Custom Web Development",
//       desc: "Build fast, responsive, and branded websites tailored to your business goals.",
//     },
//     {
//       image: "/assets/graphic.png",
//       slug: "graphic-design",
//       title: "Graphic Design & Branding",
//       desc: "Professional, eye-catching visuals and identity design that sets your brand apart.",
//     },
//     {
//       image: "/assets/social.png",
//       slug: "social-media-marketing",
//       title: "Social Media & Marketing",
//       desc: "Grow your audience and drive engagement through data-backed campaigns across all major platforms.",
//     },
//   ];
//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="text-center pb-10">
//         <Heading
//           title="Smart eCommerce"
//           highlight="Solutions"
//           className="max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] text-4xl sm:text-6xl my-7"
//         />
//         <p className="text-[#71717A] text-[18px] font-normal my-6 leading-7 sm:max-w-[60%] lg:max-w-[40%] mx-auto">
//           Empowering global sellers with scalable strategies across Shopify,
//           eBay, Vinted, and TikTok Shop.
//         </p>
//       </div>

//       <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
//         {services.map((v, i) => (
//           <Link key={i} href={`/services/${v.slug}`} className="block">
//             <div className="flex flex-col h-full">
//               <Services service={v} />
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";
import Services from "../components/Services";
import Link from "next/link";
import allServicesData from "@/data/services";
import FadeUp from "../components/FadeUp";


export const metadata = {
  title: "Our Services | Betelbee",
  description: "Discover the full range of services we offer – from product sourcing and private labeling to digital growth solutions.",
};


const page = () => {
  const servicesData = allServicesData

  return (
    <div className="bg-white max-w-6xl mx-auto px-5 text-black font-inter tracking-wide leading-relaxed">
      {/* Hero Section */}
      <FadeUp>
        <section className="py-18">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-8 items-center">
            <div>
              <span className="chip inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-bold border border-black/10">
                AI‑Powered E‑Commerce Agency
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 mb-4">
                Launch, scale & optimize your brand with AI — from factory to
                first sale.
              </h1>
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg">
                We build high‑converting stores, source products, run logistics,
                and grow sales across marketplaces. Our private label program
                delivers a ready‑to‑sell brand — website, packaging, marketing,
                and operations included.
              </p>
              <div className="flex gap-3 flex-wrap mt-5">
                <Link
                  href={"/contact"}
                  className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full bg-yellow-400 text-black hover:opacity-90 transition-opacity"
                >
                  Book a Strategy Call →
                </Link>
                <Link
                  href="#services"
                  className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full border-2 border-yellow-400 text-black bg-transparent hover:bg-yellow-400 hover:text-black transition-colors"
                >
                  Explore Services
                </Link>
              </div>
              <div className="flex gap-2 flex-wrap mt-4">
                <span className="chip text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-bold border border-black/10">
                  AI Copy & Creatives
                </span>
                <span className="chip text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-bold border border-black/10">
                  Predictive Forecasting
                </span>
                <span className="chip text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-bold border border-black/10">
                  Fraud & Risk Scoring
                </span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-3">
                <div className="stat flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center">
                  <span className="text-2xl font-extrabold">50%+</span>
                  <span className="text-gray-700 text-sm mt-1">
                    Faster Launch
                  </span>
                </div>
                <div className="stat flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center">
                  <span className="text-2xl font-extrabold">3–7×</span>
                  <span className="text-gray-700 text-sm mt-1">
                    ROI Targets
                  </span>
                </div>
                <div className="stat flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center">
                  <span className="text-2xl font-extrabold">24/7</span>
                  <span className="text-gray-700 text-sm mt-1">AI Support</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-3">
                Benchmarks based on prior client averages. Your results may vary
                depending on niche and budget.
              </p>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* --- */}

      {/* Core Services Section */}
      <FadeUp>
        <section id="services" className="py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-5">
            <h2 className="font-plus-jakarta text-xl sm:text-2xl md:text-3xl font-bold m-0">
              Core Services (AI‑Enhanced)
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Full‑stack e‑commerce operations: storefronts, sourcing,
              logistics, growth marketing, customer experience, data,
              marketplaces, and brand creative — all accelerated by practical
              AI.
            </p>
          </div>
          {/* Dynamic Services Grid */}
          <div className="grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicesData.map((v, i) => (
              <Link key={i} href={`/services/${v.slug}`} className="block">
                <div className="flex flex-col h-full">
                  <Services service={v} />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* --- */}

      {/* Private Label Section */}
      <FadeUp>
        <section id="private-label" className="py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-5">
            <h2 className="font-plus-jakarta text-xl sm:text-2xl md:text-3xl font-bold m-0">
              🏷️ Private Label – End‑to‑End Build
            </h2>
            <p className="text-gray-700 max-w-3xl">
              We don’t just launch a product — we deliver a complete,
              retail‑ready brand: sourcing, design, website, social media,
              marketing, and marketplace distribution.
            </p>
          </div>
          <div className="card spotlight border-2 border-yellow-400 bg-white relative overflow-hidden">
            <div className="ribbon absolute top-8 right-[-40px] transform rotate-45 bg-yellow-400 text-black font-extrabold px-12 py-1.5 rounded-lg border border-black/10">
              FULL‑SERVICE
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start p-5">
              <div>
                <h3 className="text-xl font-bold">What We Do</h3>
                <ul className="list grid gap-2 mt-2">
                  <li className="flex items-start gap-2 list-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <b className="font-bold">Product Research & Sourcing:</b> AI
                    trend & gap scans, factory vetting, samples, QC, costing &
                    MOQs.
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <b className="font-bold">Custom Branding & Packaging:</b>{" "}
                    logo, labels, packaging dielines, sustainable options,
                    inserts.
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <b className="font-bold">Website Development:</b> Shopify /
                    Woo builds, CRO, SEO, payments, analytics.
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <b className="font-bold">Social Media & Marketing:</b> full
                    setup (IG, TikTok, FB, Pinterest), AI content, influencer &
                    ads.
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <b className="font-bold">Launch & Distribution:</b>{" "}
                    marketplace listings, A+ content, email/SMS automations, UGC
                    seeding.
                  </li>
                  <li className="flex items-start gap-2 list-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <b className="font-bold">Scale & Compliance:</b>{" "}
                    forecasting, versioning from reviews, certifications,
                    international rollout.
                  </li>
                </ul>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="stat flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center">
                    <span className="text-2xl font-extrabold">4–6 wks</span>
                    <span className="text-gray-700 text-sm mt-1">
                      Launch Sprint
                    </span>
                  </div>
                  <div className="stat flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center">
                    <span className="text-2xl font-extrabold">End‑to‑End</span>
                    <span className="text-gray-700 text-sm mt-1">
                      Brand Build
                    </span>
                  </div>
                  <div className="stat flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center">
                    <span className="text-2xl font-extrabold">Global</span>
                    <span className="text-gray-700 text-sm mt-1">
                      Market‑Ready
                    </span>
                  </div>
                  <div className="stat flex flex-col items-center justify-center bg-gray-100 border border-gray-200 p-4 rounded-xl text-center">
                    <span className="text-2xl font-extrabold">Plug‑&‑Play</span>
                    <span className="text-gray-700 text-sm mt-1">
                      Ops & CRM
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 flex-wrap mt-4">
                  <a
                    href="#contact"
                    className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full bg-yellow-400 text-black hover:opacity-90 transition-opacity"
                  >
                    Start Private Label →
                  </a>
                  <a
                    href="#faq"
                    className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full border-2 border-yellow-400 text-black bg-transparent hover:bg-yellow-400 hover:text-black transition-colors"
                  >
                    How it Works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* --- */}

      {/* Packages & Engagement Section */}
      <FadeUp>
        <section id="engagement" className="py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-5">
            <h2 className="font-plus-jakarta text-xl sm:text-2xl md:text-3xl font-bold m-0">
              Packages & Engagement Models
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Choose a starting point — we’ll tailor deliverables to your niche
              (eco‑beauty, suncatchers, leather goods, etc.).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="price-card bg-gray-100 border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-lg mt-1 mb-1">Launch Sprint</h4>
              <div className="text-gray-700 text-sm mb-3">
                Store + first 50 SKUs + core automations
              </div>
              <div className="price text-3xl font-extrabold mt-2 mb-2 text-yellow-400">
                Custom Quote
              </div>
              <ul className="list grid gap-2">
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Shopify/Woo build
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  AI copy & PDPs
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Core CRM flows
                </li>
              </ul>
              <a
                href="#contact"
                className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full bg-yellow-400 text-black hover:opacity-90 transition-opacity mt-4"
              >
                Get Proposal
              </a>
            </div>
            <div className="price-card bg-gray-100 border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-lg mt-1 mb-1">Growth Retainer</h4>
              <div className="text-gray-700 text-sm mb-3">
                Ads, CRO, CRM, content & analytics
              </div>
              <div className="price text-3xl font-extrabold mt-2 mb-2 text-yellow-400">
                Monthly
              </div>
              <ul className="list grid gap-2">
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  SEO + Paid Social
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  A/B tests & CRO
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Dashboards & insights
                </li>
              </ul>
              <a
                href="#contact"
                className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full border-2 border-yellow-400 text-black bg-transparent hover:bg-yellow-400 hover:text-black transition-colors mt-4"
              >
                Discuss Goals
              </a>
            </div>
            <div className="price-card bg-gray-100 border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-lg mt-1 mb-1">
                Private Label Build
              </h4>
              <div className="desc text-gray-700 text-sm mb-3">
                Idea → product → brand → sales
              </div>
              <div className="price text-3xl font-extrabold mt-2 mb-2 text-yellow-400">
                Milestone‑Based
              </div>
              <ul className="list grid gap-2">
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Research & sourcing
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Branding & website
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Marketing & launch
                </li>
              </ul>
              <a
                href="#contact"
                className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full bg-yellow-400 text-black hover:opacity-90 transition-opacity mt-4"
              >
                Start Build
              </a>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* --- */}

      {/* FAQ Section */}
      <FadeUp>
        <section id="faq" className="py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-5">
            <h2 className="font-plus-jakarta text-xl sm:text-2xl md:text-3xl font-bold m-0">
              FAQs
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Short answers to common questions. Need more detail? Drop us a
              line.
            </p>
          </div>
          <details className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-2">
            <summary className="cursor-pointer font-bold">
              How does the Private Label timeline work?
            </summary>
            <p className="text-gray-700 mt-2">
              We typically run a 4–6 week launch sprint covering research,
              sourcing, branding, site build, and pre‑launch marketing.
              Timelines depend on sampling and compliance.
            </p>
          </details>
          <details className="bg-gray-100 border border-gray-200 rounded-lg p-4 mb-2">
            <summary className="cursor-pointer font-bold">
              Do you work with existing stores?
            </summary>
            <p className="text-gray-700 mt-2">
              Yes — we can optimize your current stack, migrate platforms, or
              plug into your ops for growth (ads, CRO, CRM, marketplaces).
            </p>
          </details>
          <details className="bg-gray-100 border border-gray-200 rounded-lg p-4">
            <summary className="cursor-pointer font-bold">
              Which tools & integrations do you support?
            </summary>
            <p className="text-gray-700 mt-2">
              Shopify, WooCommerce, Magento, Amazon, eBay, Etsy, TikTok Shop,
              Meta/Google Ads, Klaviyo, Gorgias/Zendesk, GA4/Looker,
              ShipStation/ShipBob, Stripe/PayPal/BNPL, and more.
            </p>
          </details>
        </section>
      </FadeUp>

      {/* --- */}

      {/* Contact Section */}
      <FadeUp>
        <section id="contact" className="py-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-4 mb-5">
            <h2 className="font-plus-jakarta text-xl sm:text-2xl md:text-3xl font-bold m-0">
              Let’s Build Your Brand
            </h2>
            <p className="text-gray-700 max-w-3xl">
              Tell us about your niche (e.g., eco beauty, suncatchers, leather
              goods) and your goals. We’ll respond with a tailored plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <form className="card bg-gray-100 border border-gray-200 rounded-lg p-5 shadow-md grid gap-3">
              <label className="block">
                Full Name
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>
              <label className="block">
                Email
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </label>
              <label className="block">
                What do you need?
                <textarea
                  rows="5"
                  placeholder="Private label launch, store build, sourcing, marketing…"
                  className="w-full mt-1 p-3 rounded-lg bg-white border border-gray-200 text-black resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </label>
              <div className="flex gap-3 flex-wrap">
                <button
                  className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full bg-yellow-400 text-black hover:opacity-90 transition-opacity"
                  type="submit"
                >
                  Request Proposal
                </button>
                <a
                  className="btn inline-flex items-center justify-center font-bold px-4 py-3 rounded-full border-2 border-yellow-400 text-black bg-transparent hover:bg-yellow-400 hover:text-black transition-colors"
                  href="mailto:hello@yourcompany.com"
                >
                  Email Us
                </a>
              </div>
            </form>
            <div className="card bg-gray-100 border border-gray-200 rounded-lg p-5 shadow-md">
              <h3 className="font-bold text-xl mb-2">Why Choose Us</h3>
              <ul className="list grid gap-2">
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  AI + human expertise for speed & accuracy
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  End‑to‑end private label ownership
                </li>
                <li className="flex items-start gap-2 list-none">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Transparent roadmaps, targets & reporting
                </li>
              </ul>
              <div className="flex gap-2 flex-wrap mt-3">
                <span className="chip text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-bold border border-black/10">
                  Eco‑friendly Options
                </span>
                <span className="chip text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-bold border border-black/10">
                  Global Markets
                </span>
                <span className="chip text-sm px-3 py-1 rounded-full bg-yellow-400 text-black font-bold border border-black/10">
                  Marketplace Ready
                </span>
              </div>
            </div>
          </div>
        </section>
      </FadeUp>
    </div>
  );
};

export default page;
