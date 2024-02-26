"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// SVG icon for menu toggle
const MenuIcon = ({ onClick }) => (
  <button onClick={onClick} className='w-6 h-6 md:hidden cursor-pointer'>
    <svg
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M4 6h16M4 12h16m-7 6h7'
      />
    </svg>
  </button>
);

export default function Navbar() {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='md:flex block md:justify-between items-center md:mx-14 md:my-5 my-2 px-8 pb-4 md:pb-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-extrabold md:mr-10 pl-3'>FS.</h2>
        <MenuIcon onClick={toggleMenu} />
      </div>
      <ul
        className={`${isOpen ? 'block' : 'hidden'
          } md:flex sm:block md:space-x-14 pl-3 md:justify-center md:mx-auto items-center`}
      >
        <li>
          <Link href='/' className='hover:text-blue-500'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/' className='hover:text-blue-500'>
            Shop
          </Link>
        </li>
        <li>
          <Link href='/' className='hover:text-blue-500'>
            Feature
          </Link>
        </li>
        <li>
          <Link href='/' className='hover:text-blue-500'>
            Contact
          </Link>
        </li>
      </ul>
      <div className={`${isOpen ? 'flex justify-between' : 'hidden'
        } md:flex items-center md:space-x-10 pl-3 pt-1 space-y-2`}>
        <Image src='/images/shopping-cart 1.png' width={18} height={18} alt='cart' />
        <button className='bg-transparent text-black border-2 border-black px-6 py-1 rounded-sm'>
          LOGIN
        </button>
      </div>
    </nav>
  );
}