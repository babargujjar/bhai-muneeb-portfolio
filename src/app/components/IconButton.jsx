import React from 'react'

const IconButton = ({ text, Icon }) => {
  return (
    <button
      className="
            rounded-xl
            hover:bg-white hover:text-black
            transition-all duration-1000 hover:scale-95
            cursor-pointer font-bold
            px-6 py-4
            tracking-wider
            flex items-center gap-2
            text-white bg-[#302CFF]
            border text-[18px]
          "
    >
      {text}
      <Icon className="w-4" />
    </button>
  );
};

export default IconButton