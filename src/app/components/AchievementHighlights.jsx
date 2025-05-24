import React from 'react'

const AchievementHighlights = ({number,desc}) => {
  return (
    <div className="p-4">
      <p className="text-[48px] font-semibold">
        300<span className="text-[#302CFF] font-bold">+</span>
      </p>
      <p className="text-[#71717A] text-[18px]">
        We ensure the successful completion of projects with precision,
        efficiency, and a commitment
      </p>
    </div>
  );
}

export default AchievementHighlights