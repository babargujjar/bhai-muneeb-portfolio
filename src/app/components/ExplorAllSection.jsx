import React from 'react'
import Button from './Button'
import Heading from './Heading';
import IconButton from './IconButton';
import { Search } from 'lucide-react';
import Services from './services';
import LeftTextRightImage from './LeftTextRightImage';

const ExplorAllSection = () => {
  return (
    <div>
      <div className="text-center pb-10">
        <Button text="Innovative Services" />
        <Heading
          title="Providing Exclusive Business"
          highlight="Features"
          className="max-w-[40%] text-5xl my-7"
        />
        <p className="text-[#71717A] text-[18px] font-normal my-6 leading-7 max-w-[40%] mx-auto">
          Experience top-tier, innovative features engineered to boost global
          business growth, streamline operations, and elevate efficiency across
          every sector
        </p>
        <div className="flex justify-center items-center">
          <IconButton text="Explore All" Icon={Search} />
        </div>
      </div>

      <div className=" bg-white">
        {[1, 2, 3].map((v, i) => (
          <div key={i} className="my-8">
            <Services />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExplorAllSection