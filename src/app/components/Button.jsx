import React from 'react'

const Button = ({text}) => {
  return (
    <button className="rounded-lg px-3 py-2 text-black border-[#CDCDCD] border text-[16px]">
      {text}
    </button>
  );
}

export default Button