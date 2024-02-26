import React from 'react'
import Image from 'next/image'

export default function Shop() {
    return (
        <>
            <div className="md:flex block md:mx-auto px-8 md:justify-around items-center md:my-48 my-20">
                <div className='md:max-w-xl p-3 text-justify'>
                    <h1 className='md:text-6xl text-3xl font-light py-1'><span className='md:mr-8 mr-4'>Still</span><span className='md:mr-8 mr-4'>classic</span> with</h1>
                    <h1 className='md:text-6xl text-3xl font-light py-1'><span className='md:mr-10 mr-5'>modern</span> <span className='md:mr-10 mr-5'>style</span></h1>
                    <p className='text-lg md:py-4 py-2 md:mb-4 mb-2'>Lorem50 ipsum dolor sit amet, consectetur adipiscing elit. Sed do ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className='flex space-x-5 items-center'>
                        <button className='bg-transparent border-2 border-black text-black rounded-sm font-semibold md:px-12 px-6 md:py-4 py-2'>Shop Now</button>
                    </div>
                </div>
                <div className='md:max-w-2xl px-3'>
                    <Image src='/images/Group 60.png' alt='hero' width='600' height='700' />
                </div>
            </div>
        </>
    )
}
