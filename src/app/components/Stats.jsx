import React from 'react'
import AchievementHighlights from './AchievementHighlights';

const Stats = () => {
    const stats = [
      {
        number: "3000",
        desc: "eCommerce Stores Launched",
      },
      {
        number: "40k",
        desc: "Products Processed",
      },
      {
        number: "20",
        desc: "Countries Served",
      },
      {
        number: "97%",
        desc: "Avg. Growth Within 90 Days",
      },
    ];
  return (
    <div className="grid items-stretch grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-5">
      {stats.map((v, i) => (
        <div key={i} >
          <AchievementHighlights desc={v.desc} number={v.number} />
        </div>
      ))}
    </div>
  );
}

export default Stats

// src/components/Stats.jsx

// "use client"
// import React from 'react';
// import { motion, useInView } from '@/lib/framer';

// const statsData = [
//   { value: 3000, label: 'Stores Launched' },
//   { value: 25, label: 'Products Processed', unit: 'k+' },
//   { value: 12, label: 'Countries Served', unit: '+' },
//   { value: 61, label: 'Avg. 90-Day Growth', unit: '%' },
// ];

// const AnimatedStat = ({ value, label, unit }) => {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.5 });
//   const [displayedValue, setDisplayedValue] = React.useState(0);

//   React.useEffect(() => {
//     if (isInView) {
//       const duration = 900;
//       const start = performance.now();
//       const step = (timestamp) => {
//         const progress = Math.min((timestamp - start) / duration, 1);
//         setDisplayedValue(Math.round(value * progress));
//         if (progress < 1) {
//           requestAnimationFrame(step);
//         }
//       };
//       requestAnimationFrame(step);
//     }
//   }, [isInView, value]);

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//       viewport={{ once: true }}
//       className="p-4 text-center rounded-xl bg-panel shadow-sm border border-stroke"
//     >
//       <div className="text-3xl font-extrabold text-black">{displayedValue}{unit}</div>
//       <div className="mt-1 text-muted">{label}</div>
//     </motion.div>
//   );
// };

// const Stats = () => {
//   return (
//     <section id="why" className="py-16 bg-white">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-extrabold leading-tight">Why Choose Betelbee?</h2>
//         <div className="w-16 h-1.5 mb-4 rounded-full bg-brand" />
//         <div className="grid gap-4 md:grid-cols-4">
//           {statsData.map((stat, index) => (
//             <AnimatedStat key={index} value={stat.value} label={stat.label} unit={stat.unit} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;