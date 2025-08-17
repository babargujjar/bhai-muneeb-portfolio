import React from "react";
import StatCard from "../components/StatCard";

const IconZap = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IconClock = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconLightbulb = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 3c0 2.8 2 5 4 7l-2 2h3" />
    <path d="M12 22v-3" />
    <path d="M10 18h4" />
  </svg>
);

const IconHandshake = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10" />
    <path d="M6 16v-2a2 2 0 0 1 2-2h3" />
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    <path d="M12 22H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10" />
    <path d="M22 10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z" />
    <path d="M12 22v-3" />
    <path d="M10 18h4" />
  </svg>
);

 const statsData = [
   {
     number: "3,000",
     text: "Successful Brand Stores Built",
   },
   {
     number: "50",
     text: "Experienced & Dedicated Team",
   },
   {
     number: "3.0%",
     text: "ROI-Driven Strategies",
   },
   {
     number: "3",
     text: "Years of Partnerships & Support",
   },
 ];

const page = () => {
  return (
    <div className="bg-white text-gray-900 font-inter tracking-wide leading-relaxed">
      <div className="container py-8 md:py-16">
        {/* Hero / Who We Are Section */}
        <section className="text-center max-w-6xl mx-auto px-4 mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Crafting eCommerce Success Stories Since 2021
          </h1>
          <p className="text-gray-600 text-md sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            At **Betelbee**, we've been delivering expert eCommerce services
            since 2021. In just a few years, we've successfully built and
            managed more than **3,000 brand stores**, many of which are now
            flourishing in competitive markets. With every project, our goal
            remains the same — to provide clients with tailored strategies that
            generate long-term growth and measurable results.
          </p>
        </section>

        <hr className="border-t-2 border-yellow-400 my-16" />

        {/* Our Vision & Mission Section */}
        <section className="mb-16 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
            Our Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-500">
                Our Vision
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Our vision is to make eCommerce success accessible for every
                brand, no matter the size. We believe every business has the
                potential to grow, and we are here to unlock that potential.
              </p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-500">
                Our Mission
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Our mission is to deliver services with innovation,
                transparency, and dedication. We strive to exceed client
                expectations by focusing on quality, efficiency, and results
                that matter.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t-2 border-yellow-400 my-16" />

        {/* Our Core Values Section */}
        <section className="mb-16 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Card: Dedication & Commitment */}
            <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
              <IconZap className="w-12 h-12 mb-3 text-yellow-500" />
              <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
                Dedication & Commitment
              </h3>
              <p className="text-gray-600 text-sm">
                Putting our full energy into every project.
              </p>
            </div>
            {/* Value Card: Timely Delivery */}
            <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
              <IconClock className="w-12 h-12 mb-3 text-yellow-500" />
              <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
                Timely Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Respecting deadlines without compromising quality.
              </p>
            </div>
            {/* Value Card: Innovation */}
            <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
              <IconLightbulb className="w-12 h-12 mb-3 text-yellow-500" />
              <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Adopting modern strategies that bring real impact.
              </p>
            </div>
            {/* Value Card: Transparency */}
            <div className="card bg-gray-100 border border-gray-200 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
              <IconHandshake className="w-12 h-12 mb-3 text-yellow-500" />
              <h3 className="font-bold text-lg md:text-xl mb-2 text-gray-800">
                Transparency
              </h3>
              <p className="text-gray-600 text-sm">
                Keeping clients informed and involved at every stage.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t-2 border-yellow-400 my-16" />

        {/* AI-Driven Growth Section */}
        <section className="mb-16 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                AI-Driven Growth
              </h2>
              <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
                To stay ahead in the fast-changing digital world, we integrate
                **Artificial Intelligence (AI)** into our projects. From
                AI-powered customer support to smart automation, our team
                leverages advanced tools to streamline processes, improve
                efficiency, and boost results. This modern approach ensures our
                clients always stay competitive and future-ready.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              {/* Placeholder for an AI-related illustration/icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400 opacity-80"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 13.3V17" />
                <path d="M12 17V10.7" />
                <path d="M17 13.3V7" />
              </svg>
            </div>
          </div>
        </section>

        <hr className="border-t-2 border-yellow-400 my-16" />

        {/* Proven Success Stories Section */}
        <section className="mb-16 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center items-center">
              {/* Placeholder for a success icon/illustration */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400 opacity-80"
              >
                <path d="M12 20h9" />
                <path d="M16.5 16.5 12 21 7.5 16.5" />
                <path d="M12 14V2m0 0L9 5m3-3 3 3" />
              </svg>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Proven Success Stories
              </h2>
              <p className="text-gray-700 text-md md:text-lg leading-relaxed">
                Over the years, we’ve helped numerous brands scale to new
                heights. For example, our tailored strategies helped a small
                fashion brand grow into a **$50K+ monthly revenue business in
                just six months**. With a proven record of success, we take
                pride in helping brands achieve their biggest milestones.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-t-2 border-yellow-400 my-16" />

        {/* Global Reach Section */}
        <section className="mb-16 max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
              <h2 className="text-2xl ms:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Global Reach
              </h2>
              <p className="text-gray-700 text-md md:text-lg leading-relaxed">
                We proudly serve clients across the **UK, USA, and Europe**,
                making us a trusted partner in global eCommerce growth. No
                matter where our clients are, we provide consistent support and
                high-quality services that adapt to different markets.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              {/* Placeholder for a global icon/illustration */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-400 opacity-80"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" />
                <path d="M2 12h20" />
              </svg>
            </div>
          </div>
        </section>

        <hr className="border-t-2 border-yellow-400 my-16" />

        {/* Why Choose Betelbee? Section */}
        <section className="mb-16 max-w-6xl mx-auto px-4">
          <h2 className="text-2xl ms:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
            Why Choose Betelbee?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((stat, index) => (
              <div key={index}>
                <StatCard number={stat.number} text={stat.text} />
              </div>
            ))}
          </div>
        </section>

        <hr className="border-t-2 border-yellow-400 my-16" />

        {/* Our Promise Section */}
        <section className="text-center max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Our Promise
          </h2>
          <p className="text-gray-700 text-md md:text-lg leading-relaxed max-w-4xl mx-auto">
            At Betelbee, we don’t just deliver services — we deliver success.
            With a passionate team, innovative strategies, and a commitment to
            excellence, we are here to take your brand to the next level.
            Partner with us, and let’s build your success story together.
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;