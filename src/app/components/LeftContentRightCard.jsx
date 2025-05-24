import React from 'react'
import Button from './Button';
import Heading from './Heading';
import Image from 'next/image';

const LeftContentRightCard = () => {
  return (
    <div className="flex w-full py-20 gap-5">
      <div className="w-[45%]">
        <Button text="Core Features" />
        <Heading
          title="Expert Business Solutions"
          highlight="Provider"
          className="text-[48px] my-3"
        />
        <p className="text-[18px] text-[#71717A]">
          We provide expert, customized solutions designed to drive sustainable
          growth, enhance operational efficiency, and ensure long-term business
        </p>
      </div>
      <div className="w-[55%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((v, i) => (
            <div key={i} className="border rounded-2xl p-10 border-[#CDCDCD]">
              <Image className='mb-10' src="/assets/cardimg.svg" alt="" width={90} height={90} />
              <h2 className="font-semibold mb-3 text-black text-[24px]">
                Free consulting
              </h2>
              <p className="text-[18px] text-[#71717A] ">
                Access expert advice with our free consulting services to guide
                your business decisions.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftContentRightCard