import { Send } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import IconButton from './IconButton';

const Navbar = () => {
  return (
    <div className="font-[var(--font-outfit)] shadow-md mb-5 shadow-gray-100 w-full max-w-[85%] mx-auto rounded-lg bg-white mt-8 border-[#CDCDCD] border">
      <div className="flex justify-between items-center p-3 ">
        <div>logo</div>
        <div className="flex gap-8 text-[18px] font-normal">
          <Link href="/">
            <h2>Home</h2>
          </Link>
          <Link href="/">
            <h2>About</h2>
          </Link>
          <Link href="/">
            <h2>Contact</h2>
          </Link>
          <Link href="/">
            <h2>Pages</h2>
          </Link>
          <Link href="/">
            <h2>Cart</h2>
          </Link>
        </div>
        <div>
          <IconButton text="Contact" Icon={Send} />
        </div>
      </div>
    </div>
  );
}

export default Navbar