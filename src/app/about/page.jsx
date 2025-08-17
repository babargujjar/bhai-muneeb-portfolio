// import React from "react";
// import StatCard from "../components/StatCard";

// const IconZap = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//   </svg>
// );

// const IconClock = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <circle cx="12" cy="12" r="10" />
//     <polyline points="12 6 12 12 16 14" />
//   </svg>
// );

// const IconLightbulb = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 3c0 2.8 2 5 4 7l-2 2h3" />
//     <path d="M12 22v-3" />
//     <path d="M10 18h4" />
//   </svg>
// );

// const IconHandshake = ({ className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     <path d="M12 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10" />
//     <path d="M6 16v-2a2 2 0 0 1 2-2h3" />
//     <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
//     <path d="M12 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10" />
//     <path d="M22 10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z" />
//     <path d="M12 22v-3" />
//     <path d="M10 18h4" />
//   </svg>
// );

//  const statsData = [
//    {
//      number: "3,000",
//      text: "Successful Brand Stores Built",
//    },
//    {
//      number: "50",
//      text: "Experienced & Dedicated Team",
//    },
//    {
//      number: "3.0%",
//      text: "ROI-Driven Strategies",
//    },
//    {
//      number: "3",
//      text: "Years of Partnerships & Support",
//    },
//  ];

// const page = () => {
//   return (
//     <div className="bg-white text-gray-900 text-center w-full tracking-wide leading-relaxed">
//       <div className="container py-8 md:py-16">
//         {/* Hero / Who We Are Section */}
//         <section className="text-center max-w-6xl mx-auto px-4 mb-16">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
//             Crafting eCommerce Success Stories Since 2021
//           </h1>
//           <p className="text-gray-600 text-md sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
//             At **Betelbee**, we've been delivering expert eCommerce services
//             since 2021. In just a few years, we've successfully built and
//             managed more than **3,000 brand stores**, many of which are now
//             flourishing in competitive markets. With every project, our goal
//             remains the same — to provide clients with tailored strategies that
//             generate long-term growth and measurable results.
//           </p>
//         </section>

//         <hr className="border-t-2 w-full border-yellow-400 my-16" />

//         {/* Our Vision & Mission Section */}
//         <section className="mb-16 max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
//             Our Guiding Principles
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
//             <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-500">
//                 Our Vision
//               </h3>
//               <p className="text-gray-700 text-base leading-relaxed">
//                 Our vision is to make eCommerce success accessible for every
//                 brand, no matter the size. We believe every business has the
//                 potential to grow, and we are here to unlock that potential.
//               </p>
//             </div>
//             <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
//               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-500">
//                 Our Mission
//               </h3>
//               <p className="text-gray-700 text-base leading-relaxed">
//                 Our mission is to deliver services with innovation,
//                 transparency, and dedication. We strive to exceed client
//                 expectations by focusing on quality, efficiency, and results
//                 that matter.
//               </p>
//             </div>
//           </div>
//         </section>

//         <hr className="border-t-2 border-yellow-400 my-16" />

//         {/* Our Core Values Section */}
//         <section className="mb-16 max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
//             Our Core Values
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Value Card: Dedication & Commitment */}
//             <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
//               <IconZap className="w-12 h-12 mb-3 text-yellow-500" />
//               <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
//                 Dedication & Commitment
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Putting our full energy into every project.
//               </p>
//             </div>
//             {/* Value Card: Timely Delivery */}
//             <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
//               <IconClock className="w-12 h-12 mb-3 text-yellow-500" />
//               <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
//                 Timely Delivery
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Respecting deadlines without compromising quality.
//               </p>
//             </div>
//             {/* Value Card: Innovation */}
//             <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
//               <IconLightbulb className="w-12 h-12 mb-3 text-yellow-500" />
//               <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
//                 Innovation
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Adopting modern strategies that bring real impact.
//               </p>
//             </div>
//             {/* Value Card: Transparency */}
//             <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
//               <IconHandshake className="w-12 h-12 mb-3 text-yellow-500" />
//               <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
//                 Transparency
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Keeping clients informed and involved at every stage.
//               </p>
//             </div>
//           </div>
//         </section>

//         <hr className="border-t-2 border-yellow-400 my-16" />

//         {/* AI-Driven Growth Section */}
//         <section className="mb-16 max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//             <div className="order-2 md:order-1 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//                 AI-Driven Growth
//               </h2>
//               <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
//                 To stay ahead in the fast-changing digital world, we integrate
//                 **Artificial Intelligence (AI)** into our projects. From
//                 AI-powered customer support to smart automation, our team
//                 leverages advanced tools to streamline processes, improve
//                 efficiency, and boost results. This modern approach ensures our
//                 clients always stay competitive and future-ready.
//               </p>
//             </div>
//             <div className="order-1 md:order-2 flex justify-center items-center">
//               {/* Placeholder for an AI-related illustration/icon */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="120"
//                 height="120"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-yellow-400 opacity-80"
//               >
//                 <rect width="18" height="18" x="3" y="3" rx="2" />
//                 <path d="M7 13.3V17" />
//                 <path d="M12 17V10.7" />
//                 <path d="M17 13.3V7" />
//               </svg>
//             </div>
//           </div>
//         </section>

//         <hr className="border-t-2 border-yellow-400 my-16" />

//         {/* Proven Success Stories Section */}
//         <section className="mb-16 max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//             <div className="flex justify-center items-center">
//               {/* Placeholder for a success icon/illustration */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="120"
//                 height="120"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-yellow-400 opacity-80"
//               >
//                 <path d="M12 20h9" />
//                 <path d="M16.5 16.5 12 21 7.5 16.5" />
//                 <path d="M12 14V2m0 0L9 5m3-3 3 3" />
//               </svg>
//             </div>
//             <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//                 Proven Success Stories
//               </h2>
//               <p className="text-gray-700 text-md md:text-lg leading-relaxed">
//                 Over the years, we’ve helped numerous brands scale to new
//                 heights. For example, our tailored strategies helped a small
//                 fashion brand grow into a **$50K+ monthly revenue business in
//                 just six months**. With a proven record of success, we take
//                 pride in helping brands achieve their biggest milestones.
//               </p>
//             </div>
//           </div>
//         </section>

//         <hr className="border-t-2 border-yellow-400 my-16" />

//         {/* Global Reach Section */}
//         <section className="mb-16 max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//             <div className="order-2 md:order-1 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
//               <h2 className="text-2xl ms:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//                 Global Reach
//               </h2>
//               <p className="text-gray-700 text-md md:text-lg leading-relaxed">
//                 We proudly serve clients across the **UK, USA, and Europe**,
//                 making us a trusted partner in global eCommerce growth. No
//                 matter where our clients are, we provide consistent support and
//                 high-quality services that adapt to different markets.
//               </p>
//             </div>
//             <div className="order-1 md:order-2 flex justify-center items-center">
//               {/* Placeholder for a global icon/illustration */}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="120"
//                 height="120"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-yellow-400 opacity-80"
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" />
//                 <path d="M2 12h20" />
//               </svg>
//             </div>
//           </div>
//         </section>

//         <hr className="border-t-2 border-yellow-400 my-16" />

//         {/* Why Choose Betelbee? Section */}
//         <section className="mb-16 max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl ms:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
//             Why Choose Betelbee?
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//             {statsData.map((stat, index) => (
//               <div key={index}>
//                 <StatCard number={stat.number} text={stat.text} />
//               </div>
//             ))}
//           </div>
//         </section>

//         <hr className="border-t-2 border-yellow-400 my-16" />

//         {/* Our Promise Section */}
//         <section className="text-center max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
//             Our Promise
//           </h2>
//           <p className="text-gray-700 text-md md:text-lg leading-relaxed max-w-4xl mx-auto">
//             At Betelbee, we don’t just deliver services — we deliver success.
//             With a passionate team, innovative strategies, and a commitment to
//             excellence, we are here to take your brand to the next level.
//             Partner with us, and let’s build your success story together.
//           </p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default page;
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
  Check,
} from "lucide-react";
import Link from "next/link";

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
    title: "ROI‑Focused",
    description: "Plans built around real results.",
  },
  {
    icon: Handshake,
    title: "Long‑Term Support",
    description: "We grow with you over time.",
  },
];

// Reusable component for section cards
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="card bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
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
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold">3,000+</div>
              <div className="text-gray-700">Stores Built</div>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold">UK • USA • EU</div>
              <div className="text-gray-700">Clients Served</div>
            </div>
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 text-center shadow-sm">
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

      {/* Vision & Mission Section */}
      <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Our Vision & Mission
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
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
            <div className="card bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
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

      {/* Our Values Section */}
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

      {/* What We Do Section */}
      <section className="py-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            What We Do
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
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
            <div className="card bg-gray-100 border border-gray-200 rounded-2xl p-6 shadow-md">
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

      {/* Growth with AI Section */}
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

      {/* Our Clients Section */}
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

      {/* Why Choose Betelbee? Section */}
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

      {/* Our Promise Section */}
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

      {/* Contact CTA */}
      <section className="py-16">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Ready to grow with Betelbee?
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl mx-auto mb-4">
            Tell us about your brand and goals. We’ll send a simple plan you can
            follow.
          </p>
          <Link
            href={"/contact"}
            className="bg-yellow-400 text-black font-extrabold px-5 py-3 rounded-full border-2 border-transparent hover:border-yellow-400 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default page;