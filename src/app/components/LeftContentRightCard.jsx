// import React from 'react'
// import Button from './Button';
// import Heading from './Heading';
// import Image from 'next/image';

// const LeftContentRightCard = () => {
//   const card = [
//     {
//       img: "/assets/cardimg.svg",
//       title: "Free consulting with every service",
//       desc: "Get expert advice before you spend a single rupee or dollar.",
//     },
//     {
//       img: "/assets/cardimg.svg",
//       title: "Platform-Specific Growth Plans",
//       desc: "Custom strategies tailored for Shopify, eBay, TikTok Shop, and more.",
//     },
//     {
//       img: "/assets/cardimg.svg",
//       title: "Real-Time Analytics Dashboards",
//       desc: "Track your performance live—see what’s working, fix what’s not.",
//     },
//     {
//       img: "/assets/cardimg.svg",
//       title: "Ongoing Optimization & Support",
//       desc: "We don’t stop after launch—our team ensures your business keeps improving.",
//     },
//   ];
//   return (
//     <div className="flex w-full py-20 gap-5">
//       <div className="w-[45%]">
//         <Button text="Core Features" />
//         <Heading
//           title="Expert Digital Commerce"
//           highlight="Solutions"
//           className="text-[48px] my-3"
//         />
//         <p className="text-[18px] text-[#71717A]">
//           We design systems that sell while you sleep — through platforms,
//           performance, and proven processes.
//         </p>
//       </div>
//       <div className="w-[55%]">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {card.map((v, i) => (
//             <div key={i} className="border rounded-2xl p-10 border-[#CDCDCD]">
//               <Image
//                 className="mb-10"
//                 src={v.img}
//                 alt=""
//                 width={90}
//                 height={90}
//               />
//               <h2 className="font-semibold mb-3 text-black text-[24px]">
//                 {v.title}
//               </h2>
//               <p className="text-[18px] text-[#71717A] ">
//                 {v.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftContentRightCard

import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import Image from "next/image";

const LeftContentRightCard = () => {
  const card = [
    {
      img: "/assets/cardimg.svg",
      title: "Free consulting with every service",
      desc: "Get expert advice before you spend a single rupee or dollar.",
    },
    {
      img: "/assets/cardimg.svg",
      title: "Platform-Specific Growth Plans",
      desc: "Custom strategies tailored for Shopify, eBay, TikTok Shop, and more.",
    },
    {
      img: "/assets/cardimg.svg",
      title: "Real-Time Analytics Dashboards",
      desc: "Track your performance live—see what’s working, fix what’s not.",
    },
    {
      img: "/assets/cardimg.svg",
      title: "Ongoing Optimization & Support",
      desc: "We don’t stop after launch—our team ensures your business keeps improving.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full py-20 gap-10">
      {/* Left Content */}
      <div className="w-full lg:w-[45%]">
        <Button text="Core Features" />
        <Heading
          title="Expert Digital Commerce"
          highlight="Solutions"
          className="text-[36px] lg:text-[48px] my-3"
        />
        <p className="text-[16px] lg:text-[18px] text-[#71717A]">
          We design systems that sell while you sleep — through platforms,
          performance, and proven processes.
        </p>
      </div>

      {/* Right Cards */}
      <div className="w-full lg:w-[55%]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
          {card.map((v, i) => (
            <div
              key={i}
              className="border rounded-2xl p-8 md:p-10 border-[#CDCDCD]"
            >
              <Image
                className="mb-10"
                src={v.img}
                alt=""
                width={90}
                height={90}
              />
              <h2 className="font-semibold mb-3 text-black text-[20px] lg:text-[24px]">
                {v.title}
              </h2>
              <p className="text-[16px] lg:text-[18px] text-[#71717A]">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftContentRightCard;
