"use client"
import React, { useEffect } from "react";
import Link from "next/link";

// Data for the "How We Help" section
const howItWorksData = [
  {
    num: 1,
    title: "Find products that sell",
    description: "We look at trends and pick smart ideas with real demand.",
  },
  {
    num: 2,
    title: "Source and check quality",
    description:
      "We talk to trusted suppliers, compare prices, and review samples.",
  },
  {
    num: 3,
    title: "Design your brand",
    description:
      "Logo, packaging, and simple brand rules that look great everywhere.",
  },
  {
    num: 4,
    title: "Build your store",
    description: "A clean, mobile-friendly Shopify or WooCommerce store.",
  },
  {
    num: 5,
    title: "Set up social & content",
    description:
      "We prepare posts, short videos, and your profiles (Instagram, TikTok, etc.).",
  },
  {
    num: 6,
    title: "Launch & grow",
    description:
      "We list on Amazon/eBay/Etsy/TikTok Shop and guide your first campaigns.",
  },
];

// Data for the "Timeline" section
const timelineData = [
  { week: "Week 1", text: "Pick products and plan the brand." },
  { week: "Week 2", text: "Talk to suppliers and order samples." },
  { week: "Week 3", text: "Approve design and packaging." },
  { week: "Week 4", text: "Build your online store." },
  {
    week: "Week 5–6",
    text: "Launch, list on marketplaces, and start marketing.",
  },
];

// Data for the "Packages" section
const packagesData = [
  {
    title: "Starter",
    description: "One product, basic branding, and a simple store.",
  },
  {
    title: "Standard",
    description: "Two–three products, full branding, store + social setup.",
  },
  {
    title: "Pro",
    description:
      "Product line, packaging, store, social, and marketplace launch.",
  },
];

// Data for the "FAQs" section
const faqData = [
  {
    question: "Do I need experience?",
    answer: "No. We guide you step by step and do the heavy lifting.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most brands go from idea to launch in about 4–6 weeks, depending on samples and approvals.",
  },
  {
    question: "Can you help with marketing?",
    answer:
      "Yes. We set up your social pages and first ads, and show you what to do next.",
  },
  {
    question: "Which platforms do you support?",
    answer: "Shopify, WooCommerce, Amazon, eBay, Etsy, and TikTok Shop.",
  },
];

// Component for a reusable card in the "How We Help" section
const StepCard = ({ num, title, description }) => (
  <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md flex items-start gap-4">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-yellow-400 text-black font-bold rounded-lg">
      {num}
    </div>
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

// Component for the FAQ section
const FAQItem = ({ question, answer }) => (
  <details className="bg-gray-100 border border-gray-200 rounded-2xl p-4 shadow-sm">
    <summary className="cursor-pointer font-bold text-lg">{question}</summary>
    <p className="text-gray-700 mt-2">{answer}</p>
  </details>
);

const page = () => {
  useEffect(() => {
    const yr = document.getElementById("yr");
    if (yr) {
      yr.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <div className="bg-white leading-relaxed">
      <div className="max-w-6xl mx-auto px-5">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <div className="">
            <span className="bg-yellow-400 text-black font-extrabold rounded-full px-3 py-1 text-sm mb-3 inline-block">
              Private Label Made Easy
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              Start your own brand — we’ll handle the hard parts.
            </h1>
            <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              We help you choose the right products, set up your brand and
              store, and get sales coming in. Simple steps, clear prices,
              friendly support.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href={"/contact"}
                className="btn bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
              >
                Get a Free Plan
              </Link>
              <Link
                href="#how"
                className="btn border-2 border-yellow-400 text-black font-extrabold px-5 py-3 rounded-full hover:bg-yellow-400 transition-all"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* What is Private Label? Section */}
        <section id="what" className="py-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
            What is Private Label?
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="text-md sm:text-lg md:text-xl font-bold mb-2">
                It’s your product, your name.
              </h3>
              <p className="text-gray-700">
                We create products under your brand. You pick the idea, we help
                make it real — with your logo, packaging, and story.
              </p>
            </div>
            <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="text-md sm:text-lg md:text-xl font-bold mb-2">
                Why it’s better than reselling
              </h3>
              <p className="text-gray-700">
                You own the brand, set your prices, and stand out from the
                crowd. That means more trust and better profits.
              </p>
            </div>
          </div>
        </section>

        {/* How we help Section */}
        <section id="how" className="py-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
            How We Help You
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorksData.map((step, index) => (
              <StepCard
                key={index}
                num={step.num}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
            Typical Timeline
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="space-y-4">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2.5 flex-shrink-0"></div>
                <div>
                  <b>{item.week}:</b> {item.text}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages Section */}
        <section id="packages" className="py-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
            Packages
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packagesData.map((pkg, index) => (
              <div
                key={index}
                className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md text-center"
              >
                <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                <p className="text-gray-700 mb-3">{pkg.description}</p>
                <div className="text-md sm:text-lg md:text-xl font-extrabold text-black mb-3">
                  Custom Quote
                </div>
                <Link
                  href={"/contact"}
                  className=" bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
                >
                  Ask for Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            FAQs
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
            Ready to build your brand?
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            Tell us your idea and budget. We’ll send a simple plan you can
            follow.
          </p>
          <Link
            href={"/contact"}
            className="btn bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default page;
