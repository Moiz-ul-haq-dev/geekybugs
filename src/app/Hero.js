import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <>
            <div className="md:flex block md:mx-auto px-8 md:justify-around items-center">
                <div className='md:max-w-xl p-3 text-justify'>
                    <h1 className='md:text-6xl text-3xl font-semibold py-1'><span className='md:mr-8 mr-4'>Choose</span> Perfect</h1>
                    <h1 className='md:text-6xl text-3xl font-semibold py-1'><span className='md:mr-10 mr-5'>Fashion</span> <span className='md:mr-10 mr-5'>For</span> You</h1>
                    <p className='text-lg md:py-4 py-2 md:mb-4 mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='flex md:space-x-5 space-x-7 items-center'>
                        <button className='bg-gray-400 shadow-lg shadow-slate-500 text-white font-semibold px-7 md:px-14 py-3 md:py-5 md:mr-auto'>Explore Now</button>
                        <Image src='/images/Group 59.png' className='w-24 h-14' alt='hero' width='125' height='50' />
                        <h3 className='text-lg text-gray-500'>Live demo...</h3>
                    </div>
                </div>
                <div className='md:max-w-xl px-4'>
                    <Image src='/images/Group 58.png' alt='hero' width='500' height='500' />
                </div>
            </div>
        </>
    )
}
