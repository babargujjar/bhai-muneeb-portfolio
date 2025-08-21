"use client"
import React, { useEffect } from "react";
import {
  Eye,
  Target,
  Heart,
  Clock,
  Lightbulb,
  Handshake,
  Users,
  Wrench,
  LineChart,
  Brain,
  Bot,
  PieChart,
  Leaf,
  Shirt,
  Home,
  Store,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import FadeUp from "../components/FadeUp";

// Data for the 'Our Values' section
const valuesData = [
  {
    icon: Heart,
    title: "Dedication",
    description: "Every project gets our full focus and energy.",
  },
  {
    icon: Clock,
    title: "On‑Time Delivery",
    description: "We respect deadlines without cutting corners.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Fresh, practical ideas that move the needle.",
  },
  {
    icon: Handshake,
    title: "Transparency",
    description: "Clear updates and open communication at every step.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We aim for long‑term success, not quick wins.",
  },
];

// Data for the 'AI Growth' section
const aiGrowthData = [
  {
    icon: Brain,
    title: "Smarter Decisions",
    description:
      "We use AI tools to analyze data quickly and spot trends that matter. This helps us make better decisions and keep your brand ahead of the curve.",
  },
  {
    icon: Bot,
    title: "Automation Made Simple",
    description:
      "From handling customer chats to automating routine tasks, AI helps us save time and improve accuracy — so you can focus on growing your business.",
  },
  {
    icon: PieChart,
    title: "Better Marketing",
    description:
      "AI makes it easier to understand your audience, run smarter ads, and improve customer support — giving your brand a competitive edge.",
  },
];

// Data for the 'Our Clients' section
const clientsData = [
  {
    icon: Leaf,
    title: "EcoLiving UK",
    description: "Scaled their eco‑products store to national recognition.",
  },
  {
    icon: Shirt,
    title: "UrbanWear USA",
    description: "Helped achieve $50K+ monthly revenue in just six months.",
  },
  {
    icon: Home,
    title: "CasaDecor EU",
    description:
      "Expanded across multiple EU markets with a solid growth plan.",
  },
];

// Data for the 'Why Choose Betelbee?' section
const whyChooseData = [
  {
    icon: Store,
    title: "3,000+ Stores",
    description: "Experience you can trust.",
  },
  {
    icon: Wallet,
    title: "5-7+ ROI‑Focused",
    description: "Plans built around real results.",
  },
  {
    icon: Users,
    title: "50+ Team",
    description: "Experienced and dedicated team",
  },
  {
    icon: Bot,
    title: "Automation",
    description: "AI Powered automation",
  },
  {
    icon: Handshake,
    title: "Long‑Term Support",
    description: "We grow with you over time.",
  },
];

// Reusable component for section cards
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
      <Icon className="w-6 h-6 text-black" />
      {title}
    </h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Reusable component for list items
const ListItem = ({ text }) => (
  <li className="flex items-start gap-2">
    <span className="w-3 h-3 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></span>
    {text}
  </li>
);

const page = () => {
  useEffect(() => {
    const yr = document.getElementById("yr");
    if (yr) {
      yr.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <div className="bg-white text-gray-900 max-w-6xl mx-auto px-5 leading-relaxed">
      {/* Hero Section */}
      <FadeUp>
        <section className="py-16 text-center">
          <span className="bg-yellow-400 text-black font-extrabold rounded-full px-3 py-1 text-sm mb-3 inline-block">
            About Betelbee
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
            Helping brands grow online since 2021.
          </h1>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            We’ve built and managed <b>3,000+ eCommerce stores</b>. Our promise
            is simple: clear strategies, honest work, and results you can
            measure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-100 border transition-transform duration-200 ease-in-out hover:-translate-y-1 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold">3,000+</div>
              <div className="text-gray-700">Stores Built</div>
            </div>
            <div className="bg-gray-100 border transition-transform duration-200 ease-in-out hover:-translate-y-1 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold">UK • USA • UAE</div>
              <div className="text-gray-700">Clients Served</div>
            </div>
            <div className="bg-gray-100 border transition-transform duration-200 ease-in-out hover:-translate-y-1 border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold">2021 →</div>
              <div className="text-gray-700">Years Active</div>
            </div>
          </div>
          <div className="flex gap-3 justify-center flex-wrap mt-6">
            <Link
              href="#"
              className="bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
            >
              Work With Us
            </Link>
            <Link
              href={"/about"}
              className="border-2 border-yellow-400 text-black font-extrabold px-5 py-3 rounded-full hover:bg-yellow-400 transition-all"
            >
              What We Do
            </Link>
          </div>
        </section>
      </FadeUp>

      {/* Vision & Mission Section */}
      <FadeUp>
        <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Our Vision & Mission
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Eye className="w-6 h-6 text-black" />
                Vision
              </h3>
              <p className="text-gray-700">
                To make eCommerce success possible for every brand, big or
                small. We imagine a future where businesses of all sizes compete
                on equal grounds with smart strategies and strong execution.
              </p>
            </div>
            <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Target className="w-6 h-6 text-black" />
                Mission
              </h3>
              <p className="text-gray-700">
                To deliver honest, innovative, and results‑driven services that
                help brands grow with confidence. Our mission goes beyond sales
                — it’s about building sustainable growth and long‑term trust.
              </p>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* Our Values Section */}
      <FadeUp>
        <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Our Values
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesData.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </section>
      </FadeUp>

      {/* What We Do Section */}
      <FadeUp>
        <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            What We Do
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Wrench className="w-6 h-6 text-black" />
                End‑to‑End Support
              </h3>
              <ul className="list-none p-0 m-0 space-y-2 mt-4">
                <ListItem text="Find winning products" />
                <ListItem text="Build and manage your store" />
                <ListItem text="Create a strong brand identity" />
                <ListItem text="Run social media and campaigns" />
                <ListItem text="Guide fulfillment and growth" />
              </ul>
            </div>
            <div className="transition-transform duration-200 ease-in-out hover:-translate-y-1 bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <LineChart className="w-6 h-6 text-black" />
                Proven Results
              </h3>
              <p className="text-gray-700">
                We’ve helped brands scale fast. One fashion startup reached{" "}
                <b>$50K+ monthly revenue in six months</b> using our simple
                growth plan. Many others now lead their niches with our support.
              </p>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* Growth with AI Section */}
      <FadeUp>
        <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Growth With AI
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiGrowthData.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </FadeUp>

      {/* Our Clients Section */}
      <FadeUp>
        <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Our Clients
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl">
            We work with entrepreneurs, startups, and established brands across
            the <b>UK, USA, and Europe</b>. Wherever you are, we adapt to your
            market and goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {clientsData.map((client, index) => (
              <FeatureCard
                key={index}
                icon={client.icon}
                title={client.title}
                description={client.description}
              />
            ))}
          </div>
        </section>
      </FadeUp>

      {/* Why Choose Betelbee? Section */}
      <FadeUp>
        <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Why Choose Betelbee?
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseData.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>
      </FadeUp>

      {/* Our Promise Section */}
      <FadeUp>
        <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Our Promise
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
            <p className="text-gray-700">
              We don’t just provide services — <b>we deliver success</b>. With
              dedication, innovation, and care, we’re here to take your brand to
              the next level. We promise transparency, on‑time delivery, and
              ongoing support so you always feel confident in your growth
              journey.
            </p>
            <p className="text-gray-700 mt-4">
              When you partner with Betelbee, you get more than a service
              provider — you gain a trusted partner who treats your business
              like our own. We’re committed to helping you scale with clear
              plans, regular updates, and consistent results.
            </p>
          </div>
        </section>
      </FadeUp>

      {/* Contact CTA */}
      <FadeUp>
        <section className="py-16">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Ready to grow with Betelbee?
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              Tell us about your brand and goals. We’ll send a simple plan you
              can follow.
            </p>
            <Link
              href={"/contact"}
              className="bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </FadeUp>
    </div>
  );
};

export default page;