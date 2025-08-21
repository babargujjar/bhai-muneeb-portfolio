import React from "react";

const Button = ({ text }) => {
  return (
    <button className="rounded-lg cursor-pointer px-3 py-2 mb-2 text-yellow-400 border-yellow-400 border text-[16px]">
      {text}
    </button>
  );
};

export default Button;
