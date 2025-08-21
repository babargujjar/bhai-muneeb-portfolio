import React from "react";

const IconButton = ({ text, Icon }) => {
  return (
    <button
      className="
            rounded-xl
            hover:bg-white hover:text-yellow-400
            transition-all duration-1000 hover:scale-95
            cursor-pointer sm:font-bold font-semibold
            sm:px-6 sm:py-4 px-4 py-2
            tracking-wider
            flex items-center gap-1
            text-white bg-yellow-400
            border text-[14px] sm:text-[18px]
          "
    >
      {text}
      <Icon className="w-4" />
    </button>
  );
};

export default IconButton;
