"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Tiktok,
  Shirt,
  ShoppingBag as Depop,
  Shopify,
  Wordpress,
  Cubes,
  UsersCog,
  Scale,
  Handshake,
  Lightbulb,
  PiggyBank,
  FlagCheckered,
  Bullseye,
  Gauge,
  Bot,
  LineChart,
  MessageSquare,
  LayoutPanelLeft,
  Settings,
  Scale as ScaleBalance,
  Headset,
  Box,
  Truck,
  PenTool,
  Store,
  Wallet,
  Phone,
  Mail,
} from "lucide-react";

const icons = {
  usersCog: Shirt,
  flagCheckered: Shirt,
  bullseye: Shirt,
  scale: Scale,
  handshake: Handshake,
  lightbulb: Lightbulb,
  piggyBank: PiggyBank,
  gauge: Gauge,
  bot: Bot,
  lineChart: LineChart,
  messageSquare: MessageSquare,
  layoutPanelLeft: LayoutPanelLeft,
  settings: Settings,
  scaleBalance: ScaleBalance,
  headset: Headset,
  box: Box,
  truck: Truck,
  penTool: PenTool,
  store: Store,
  wallet: Wallet,
  phone: Phone,
  mail: Mail,
};

const servicesBadges = [
  { icon: "/assets/amazon.png", label: "Amazon" },
  { icon: "/assets/ebay.png", label: "eBay" },
  { icon: "/assets/etsy.png", label: "Etsy" },
  { icon: "/assets/onbuy.png", label: "OnBuy" },
  { icon: "/assets/tiktokshop.png", label: "TikTok Shop" },
  { icon: "/assets/vinted.png", label: "Vinted" },
  { icon: "/assets/depop.png", label: "Depop" },
  { icon: "/assets/shopify.png", label: "Shopify" },
  { icon: "/assets/woo.jpg", label: "WooCommerce" },
];

const stepsData = [
  {
    num: 1,
    title: "Discovery & Goals",
    description:
      "Quick call to understand your niche, targets, budget, and timelines. We align on what success looks like.",
  },
  {
    num: 2,
    title: "Sourcing & Branding",
    description:
      "Find products and suppliers, define brand name, logo, and packaging options that fit your margins.",
  },
  {
    num: 3,
    title: "Store Build & Content",
    description:
      "Set up Shopify/Woo, craft product pages, policies, images, and essential email/SMS flows.",
  },
  {
    num: 4,
    title: "Launch & Marketplaces",
    description:
      "Go live on your site and key channels (Amazon, eBay, TikTok Shop) with starter ads and tracking.",
  },
  {
    num: 5,
    title: "Optimize & Scale",
    description:
      "Weekly improvements: ads, listings, CRO tests, inventory, and reporting — to grow profitably.",
  },
];

const statsData = [
  { count: "3,000+", label: "Stores Launched" },
  { count: "25k+", label: "Products Processed" },
  { count: "12+", label: "Countries Served" },
  { count: "61%+", label: "Avg. 90‑Day Growth" },
];

const testimonialsData = [
  {
    avatar: "N",
    by: "Nadia R. — Founder, Nova Home",
    meta: "UK • Home & Living",
    quote:
      "Betelbee moved us to Shopify, listed us on TikTok Shop, and our monthly orders tripled in 90 days.",
    results: ["3× orders", "-28% CAC"],
  },
  {
    avatar: "U",
    by: "Usman K. — Owner, UrbanWear",
    meta: "USA • Apparel",
    quote:
      "Listings, reviews, and ads were handled end‑to‑end. We finally broke into Amazon’s top category ranks.",
    results: ["Top‑10 subcat", "+42% ROAS"],
  },
  {
    avatar: "G",
    by: "Gina M. — Co‑founder, GreenGlow",
    meta: "EU • Beauty",
    quote:
      "They fixed our product pages and email flows. Revenue from returning customers jumped fast.",
    results: ["+31% repeat", "+24% AOV"],
  },
];

const aiBenefitsData = [
  {
    icon: icons.bullseye,
    title: "Smarter Targeting",
    description: "Find the right customers and reduce wasted ad spend.",
  },
  {
    icon: icons.gauge,
    title: "Faster Decisions",
    description: "See live performance and act on clear insights.",
  },
  {
    icon: icons.bot,
    title: "Helpful Automation",
    description: "Handle routine tasks and support so your team can focus.",
  },
  {
    icon: icons.lineChart,
    title: "Predictable Growth",
    description: "Forecast demand and plan stock with more confidence.",
  },
];

const aiKpisData = [
  { count: 61, label: "Avg. 90‑day growth (%)" },
  { count: 30, label: "Lower inventory waste (%)" },
  { count: 24, label: "Hour support coverage" },
  { count: 7, label: "Days to first sales*" },
];

const coreFeaturesData = [
  {
    icon: icons.messageSquare,
    title: "Free Consulting",
    description: "Start with clarity. We map a simple plan before you spend.",
    items: [
      "30‑min discovery call",
      "Action plan & quote",
      "Timeline & milestones",
    ],
  },
  {
    icon: icons.layoutPanelLeft,
    title: "Channel‑Ready Plans",
    description: "Strategies tailored to each platform you sell on.",
    items: [
      "Amazon/eBay/TikTok setup",
      "Listing & policy checks",
      "Growth roadmap",
    ],
  },
  {
    icon: icons.lineChart,
    title: "Live Dashboards",
    description: "Know what’s working in real time and fix what’s not.",
    items: ["Sales & ads in one view", "Weekly insights", "Clear next steps"],
  },
  {
    icon: icons.settings,
    title: "Ongoing Optimization",
    description: "We keep improving your store, ads, and operations.",
    items: ["A/B tests & CRO", "Listing refreshes", "Retention upgrades"],
  },
  {
    icon: icons.scaleBalance,
    title: "Profit First",
    description: "We focus on healthy margins and sustainable growth.",
    items: ["Cost & price review", "Ad ROAS targets", "Inventory turns"],
  },
  {
    icon: icons.headset,
    title: "Human Support",
    description: "Real people, clear answers, fast response times.",
    items: ["Dedicated manager", "Weekly check‑ins", "Priority Slack/email"],
  },
];

const partnerBulletsWeBring = [
  {
    icon: icons.usersCog,
    text: "Experienced team across sourcing, creative, dev, and growth.",
  },
  {
    icon: icons.scale,
    text: "Profit‑first planning with clear roles and milestone reporting.",
  },
  {
    icon: icons.handshake,
    text: "Flexible models: Managed Brand, Joint Venture, or Equity.",
  },
];

const partnerBulletsYouBring = [
  {
    icon: icons.lightbulb,
    text: "Vision or product idea — we validate and shape the offer.",
  },
  {
    icon: icons.piggyBank,
    text: "Investment aligned to a realistic launch and growth plan.",
  },
  {
    icon: icons.flagCheckered,
    text: "Shared targets — we scale together on transparent KPIs.",
  },
];

const CompleteHomePage = () => {
  const phrases = ["Start Faster", "Scale Smarter", "Sell Everywhere"];
  const kpiRefs = useRef([]);
  const partnerRevealRefs = useRef([]);

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[index];
    const currentLength = text.length;
    const typingSpeed = 100;
    const pauseDuration = 1000;
    let timer;

    if (typing && currentLength < currentPhrase.length) {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, currentLength + 1));
      }, typingSpeed);
    } else if (typing && currentLength === currentPhrase.length) {
      timer = setTimeout(() => {
        setTyping(false);
      }, pauseDuration);
    } else if (!typing && currentLength > 0) {
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, currentLength - 1));
      }, typingSpeed / 2);
    } else if (!typing && currentLength === 0) {
      setTyping(true);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [text, typing, index]);

  useEffect(() => {
    // Animate KPI counters
    const animate = (el) => {
      const target = +el.dataset.count;
      const duration = 900;
      const start = performance.now();
      const step = (timestamp) => {
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.round(target * progress);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target.querySelector(".count"));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    kpiRefs.current.forEach((kpi) => io.observe(kpi));

    // Reveal on scroll for partner section
    const rIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            rIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    partnerRevealRefs.current.forEach((el) => {
      if (el) {
        rIO.observe(el);
      }
    });
  }, []);

  return (
    <div className="font-sans text-black antialiased bg-white leading-relaxed">
      {/* Hero */}
      <section className="text-center py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <span className="inline-block bg-amber-400 text-black font-extrabold rounded-full px-3 py-1.5 mb-3">
            eCommerce Growth Partner
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            <div className="relative h-[72px] sm:h-[80px] mt-2 flex justify-center items-center overflow-hidden max-w-full">
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-[#feb436] whitespace-nowrap"
              >
                {text}
              </motion.span>
            </div>
          </h1>
          <p className="text-gray-700 max-w-4xl mx-auto">
            From <b>product to profit</b>, we handle it all — sourcing,
            branding, store setup, marketing, and scaling across Amazon, eBay,
            Walmart, Etsy, TikTok Shop, and more.
          </p>
          <div className="flex gap-3 justify-center flex-wrap mt-4.5">
            <a
              href="#services"
              className="inline-block px-4 py-3 rounded-full border-2 border-transparent bg-amber-400 text-black font-extrabold"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="inline-block px-4 py-3 rounded-full border-2 border-amber-400 text-black font-extrabold hover:bg-amber-400"
            >
              Get Free Demo
            </a>
          </div>
          <div
            className="flex flex-wrap justify-center gap-2.5 mt-3"
            aria-label="Platforms we support"
          >
            {servicesBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <span
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-3 py-2 rounded-full font-semibold"
                >
                  <img
                    src={badge.icon}
                    alt={badge.label}
                    className="w-4 h-4 object-contain" // 16px = w-4 h-4
                  />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Message (image left) */}
      <section id="message" className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            Our Message
          </h2>
          <div className="w-18 h-1.5 bg-amber-400 rounded-md my-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(260px,520px)_1fr] gap-4.5 items-center">
            <img
              className="w-full h-full min-h-[260px] object-cover rounded-xl border border-gray-200 shadow-lg"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
              alt="Betelbee team working on eCommerce growth"
            />
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4.5 shadow-lg">
              <h3 className="font-semibold text-[17px] md:text-[20px]">
                Built for Your Growth
              </h3>
              <p className="text-gray-700">
                We started Betelbee to make eCommerce easier for everyone. Clear
                plans, simple tools, and steady support — so you can focus on
                your brand while we handle the heavy lifting.
              </p>
              <ul className="mt-2.5 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="text-sm">
                    Practical strategies you can act on today
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="text-sm">
                    Transparent reporting and honest advice
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="text-sm">
                    Long‑term partnership focused on results
                  </span>
                </li>
              </ul>
              <div className="flex gap-3 flex-wrap mt-3">
                <a
                  href="#contact"
                  className="inline-block px-4 py-3 rounded-full border-2 border-transparent bg-amber-400 text-black font-extrabold"
                >
                  Let’s Talk
                </a>
                <a
                  href="#services"
                  className="inline-block px-4 py-3 rounded-full border-2 border-amber-400 text-black font-extrabold hover:bg-amber-400"
                >
                  See What We Do
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            How It Works
          </h2>
          <div className="w-18 h-1.5 bg-amber-400 rounded-md my-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-lg"
              >
                <h3 className="flex items-center gap-2.5 mb-2">
                  <span className="w-7 h-7 rounded-full bg-amber-400 inline-flex items-center justify-center font-extrabold">
                    {step.num}
                  </span>
                  <p className="text-black font-semibold text-[17px] md:text-[20px]">
                    {step.title}
                  </p>
                </h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Stats */}
      <section id="why" className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            Why Choose Betelbee?
          </h2>
          <div className="w-18 h-1.5 bg-amber-400 rounded-md my-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-extrabold">{stat.count}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We've Helped Grow (replaces Success Stories) */}
      <section id="stories" className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            Brands We’ve Helped Grow
          </h2>
          <div className="w-18 h-1.5 bg-amber-400 rounded-md my-2"></div>
          <p className="text-gray-700">
            Real teams, real outcomes. Here are a few names and words from
            clients we’ve supported. Swap these placeholders with your own logos
            and photos anytime.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-2.5 mb-4">
            <div className="flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl shadow-lg font-extrabold">
              <span className="py-2 px-4 rounded-xl bg-amber-400">
                Nova Home
              </span>
            </div>
            <div className="flex items-center justify-center h-14 bg-gray-50 border border-gray-200 rounded-xl shadow-lg font-extrabold">
              <span className="py-2 px-4 rounded-xl bg-amber-400">
                UrbanWear
              </span>
            </div>
            <div className="flex items-center justify-center h-14 bg-gray-50 border border-gray-200 rounded-xl shadow-lg font-extrabold">
              <span className="py-2 px-4 rounded-xl bg-amber-400">
                GreenGlow
              </span>
            </div>
            <div className="flex items-center justify-center h-14 bg-gray-50 border border-gray-200 rounded-xl shadow-lg font-extrabold">
              <span className="py-2 px-4 rounded-xl bg-amber-400">PetPals</span>
            </div>
            <div className="flex items-center justify-center h-14 bg-gray-50 border border-gray-200 rounded-xl shadow-lg font-extrabold">
              <span className="py-2 px-4 rounded-xl bg-amber-400">
                Craftory
              </span>
            </div>
            <div className="flex items-center justify-center h-14 bg-gray-50 border border-gray-200 rounded-xl shadow-lg font-extrabold">
              <span className="py-2 px-4 rounded-xl bg-amber-400">FitFuel</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center font-extrabold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-gray-700 font-semibold">
                      {testimonial.by}
                    </div>
                    <small className="text-gray-600">{testimonial.meta}</small>
                  </div>
                </div>
                <p>“{testimonial.quote}”</p>
                <div className="flex flex-wrap gap-2.5 mt-2.5">
                  {testimonial.results.map((result, i) => (
                    <span
                      key={i}
                      className="border border-dashed border-amber-400 rounded-full px-2.5 py-1.5 font-extrabold text-md md:text-lg "
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 justify-center flex-wrap mt-3.5">
            <a
              href="#contact"
              className="inline-block px-4 py-3 rounded-full border-2 border-transparent bg-amber-400 text-black font-extrabold"
            >
              Share Your Goal
            </a>
            <a
              href="#services"
              className="inline-block px-4 py-3 rounded-full border-2 border-amber-400 text-black font-extrabold hover:bg-amber-400"
            >
              See Our Process
            </a>
          </div>
        </div>
      </section>

      {/* Become a Partner (Premium) */}
      <section className="relative isolate py-16 bg-gradient-to-b from-[#0b0d10] via-[#111418] to-[#0b0d10] text-white border-t-2 border-b-2 border-amber-400">
        <div className="container mx-auto px-5 max-w-6xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4.5 items-center">
            <div
              className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-5 transition-all duration-250 ease-in-out glow-hover opacity-0 translate-y-4"
              ref={(el) => (partnerRevealRefs.current[0] = el)}
            >
              <h2 className="text-xl md:text-3xl font-extrabold mb-2 text-white">
                Partner With Betelbee
              </h2>
              <p className="text-gray-300">
                We manage your eCommerce brand end‑to‑end while you bring the{" "}
                <b>idea</b> and <b>investment</b>. From <b>sourcing</b> and{" "}
                <b>fulfillment</b> to <b>brand identity</b>, <b>stores</b>, and
                day‑to‑day operations — we handle everything and grow{" "}
                <b>together</b>.
              </p>
              <ul className="grid gap-2.5 mt-2">
                <li className="flex gap-2.5 items-start">
                  <Box
                    className="text-black bg-amber-400 rounded-md p-1.5"
                    size={24}
                  />
                  <span>
                    <b>Sourcing & Suppliers</b> — vetted factories, MOQs,
                    samples, and QC.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Truck
                    className="text-black bg-amber-400 rounded-md p-1.5"
                    size={24}
                  />
                  <span>
                    <b>Fulfillment & Logistics</b> — 3PL setup, routing,
                    tracking, returns.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <PenTool
                    className="text-black bg-amber-400 rounded-md p-1.5"
                    size={24}
                  />
                  <span>
                    <b>Brand Identity</b> — name, logo, packaging, content
                    guidelines.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Store
                    className="text-black bg-amber-400 rounded-md p-1.5"
                    size={24}
                  />
                  <span>
                    <b>Stores & Marketplaces</b> — Shopify/Woo + Amazon, eBay,
                    TikTok Shop.
                  </span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <Wallet
                    className="text-black bg-amber-400 rounded-md p-1.5"
                    size={24}
                  />
                  <span>
                    <b>Growth</b> — ads, SEO, email/SMS, reviews, reporting, and
                    KPIs.
                  </span>
                </li>
              </ul>
              <div className="flex gap-3 flex-wrap mt-3.5">
                <a
                  href="#contact"
                  className="inline-block px-4 py-3 rounded-full border-2 border-transparent bg-amber-400 text-black font-extrabold"
                >
                  Start a Partnership
                </a>
                <a
                  href="#contact"
                  className="inline-block px-4 py-3 rounded-full border-2 border-amber-400 text-black font-extrabold bg-white hover:bg-amber-400"
                >
                  Book a Free Consultation
                </a>
              </div>
            </div>
            <div
              className="grid gap-3 opacity-0 translate-y-4"
              ref={(el) => (partnerRevealRefs.current[1] = el)}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-5 glow-hover transition-all duration-250 ease-in-out">
                <h3 className="text-lg font-extrabold mb-1.5">What We Bring</h3>
                <ul className="grid gap-2.5">
                  {partnerBulletsWeBring.map((bullet, index) => {
                    const Icon = bullet.icon;
                    return (
                      <li key={index} className="flex gap-2.5 items-start">
                        <Icon
                          className="text-black bg-amber-400 rounded-md p-1.5"
                          size={24}
                        />
                        <span>{bullet.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-5 glow-hover transition-all duration-250 ease-in-out">
                <h3 className="text-lg font-extrabold mb-1.5">
                  What You Bring
                </h3>
                <ul className="grid gap-2.5">
                  {partnerBulletsYouBring.map((bullet, index) => {
                    const Icon = bullet.icon;
                    return (
                      <li key={index} className="flex gap-2.5 items-start">
                        <Icon
                          className="text-black bg-amber-400 rounded-md p-1.5"
                          size={24}
                        />
                        <span>{bullet.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth with AI */}
      <section id="ai" className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            Growth With AI
          </h2>
          <div className="w-18 h-1.5 bg-amber-400 rounded-md my-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {aiBenefitsData.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-lg transition-transform duration-200 ease-in-out hover:-translate-y-1"
                >
                  <h3 className="flex items-center gap-2.5 mb-1.5">
                    <Icon className="bg-amber-400 rounded-md p-1.5" size={20} />{" "}
                    <p className="text-black font-semibold text-[15px] md:text-[20px]">
                      {benefit.title}
                    </p>
                  </h3>
                  <p>{benefit.description}</p>
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3.5">
            {aiKpisData.map((kpi, index) => (
              <div
                key={index}
                className="bg-white border-2 border-dashed border-amber-400 rounded-xl p-4 text-center"
                ref={(el) => (kpiRefs.current[index] = el)}
              >
                <span
                  className="count text-3xl font-extrabold block"
                  data-count={kpi.count}
                >
                  0
                </span>
                <span className="text-gray-700">{kpi.label}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-2">
            *Typical for simple catalogs & in‑stock items. Results vary by niche
            and budget.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4.5 shadow-lg grid grid-cols-1 md:grid-cols-[minmax(220px,_1fr)_2fr] gap-3.5 items-center mt-4">
            <div className="flex items-center justify-center h-[70px] bg-gray-50 border border-gray-200 rounded-xl shadow-lg font-extrabold">
              <span>FashionCo</span>
            </div>
            <div>
              <h3>Case Study: From $5K to $50K/mo in 6 months</h3>
              <p className="italic">
                “Betelbee’s AI‑assisted ads and product insights helped us scale
                faster without burning our budget. Clear reports, quick actions,
                real results.”
              </p>
              <div className="flex gap-3 flex-wrap mt-1.5">
                <a
                  href="#contact"
                  className="inline-block px-4 py-3 rounded-full border-2 border-transparent bg-amber-400 text-black font-extrabold"
                >
                  Get the Playbook
                </a>
                <a
                  href="#services"
                  className="inline-block px-4 py-3 rounded-full border-2 border-amber-400 text-black font-extrabold hover:bg-amber-400"
                >
                  See the Setup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features (Redesigned) */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
            Core Features
          </h2>
          <div className="w-18 h-1.5 bg-amber-400 rounded-md my-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {coreFeaturesData.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-4.5 shadow-lg"
                >
                  <h3 className="flex items-center gap-2.5 mb-2">
                    <Icon size={20} />{" "}
                    <p className="text-black font-bold text-[18px] md:text-[25px]">
                      {feature.title}
                    </p>
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                  <ul className="mt-2 space-y-1">
                    {feature.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-5 max-w-6xl text-center">
          <h2 className="text-2xl md:text-4xl leading-tight mb-3">
            Ready to grow your brand?
          </h2>
          <div className="w-18 h-1.5 bg-amber-400 rounded-md mx-auto my-2"></div>
          <p className="text-gray-700 mx-auto mb-3.5">
            Tell us your goals and budget. We’ll send a simple plan you can
            follow.
          </p>
          <a
            href="mailto:hello@betelbee.com"
            className="inline-block px-4 py-3 rounded-full border-2 border-transparent bg-amber-400 text-black font-extrabold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default CompleteHomePage;
