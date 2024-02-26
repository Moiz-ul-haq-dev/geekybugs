import React from 'react';
import Image from 'next/image';

export default function Offer() {
  return (
    <div className="md:flex block md:px-28 px-8 justify-center mb-32">
      <div className="md:flex w-full md:px-16 px-4 md:pt-10 py-10 md:pb-0 my-0 h-auto" style={{ backgroundColor: 'rgba(85, 76, 59, 0.81)' }}>
        <div className='md:w-3/5'>
          <Image src='/images/Group 64.png' className='w-auto h-auto mx-auto justify-center' alt='hero' width='300' height='300' />
        </div>
        <div className='text-justify pt-10 md:px-28 px-4 text-white'>
          <h1 className='md:text-5xl text-2xl font-semibold py-1' style={{opacity : '70%'}}><span className='mr-8'>Exclusive</span><span className='mr-8'>Offer</span></h1>
          <p className='md:text-lg text-md py-4 mb-4' style={{opacity : '70%'}}>Lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Sed do ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='items-center'>
            <div className='flex max-w-sm gap-4'>
              <button className='bg-white text-black rounded-md font-semibold px-5 py-4 mr-auto'>06 <span className='block text-sm'>Days</span></button>
              <button className='bg-white text-black rounded-md font-semibold px-5 py-4 mr-auto'>18 <span className='block text-sm'>Hours</span></button>
              <button className='bg-white text-black rounded-md font-semibold px-5 py-4 mr-auto'>48 <span className='block text-sm'>Min</span></button>
            </div>
            <div className='block my-5'>
              <button className='bg-white text-black rounded-sm font-semibold px-12 py-4 mt-4'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
