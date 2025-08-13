import React from 'react'
import AchievementHighlights from './AchievementHighlights';

const Stats = () => {
    const stats = [
      {
        number: "3k",
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 my-10">
      {stats.map((v, i) => (
        <div key={i}>
          <AchievementHighlights desc={v.desc} number={v.number} />
        </div>
      ))}
    </div>
  );
}

export default Stats