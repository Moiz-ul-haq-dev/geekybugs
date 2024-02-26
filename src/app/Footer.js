import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <div className=''>
                <div className='flex flex-col md:flex-row justify-between bg-gray-400 p-5 md:p-10'>
                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='text-white text-4xl font-extrabold mb-4 md:mb-8'>FS.</h1>
                        <p className='text-white mt-2 md:mt-4'>Social Media</p>
                        <ul className='flex text-white mt-2 md:mt-4 space-x-4 md:space-x-6'>
                            <li>FB</li>
                            <li>LI</li>
                            <li>IN</li>
                        </ul>
                    </div>
                    <div className='flex flex-row items-center justify-between md:justify-evenly px-14 w-full mt-4 md:mt-0'>
                        <div className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
                            <h1 className='text-white text-2xl text-center md:text-start font-bold'>Shop</h1>
                            <ul className='text-white items-center text-center md:text-start mt-2'>
                                <li>Products</li>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Release</li>
                            </ul>
                        </div>
                        <div className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
                            <h1 className='text-white text-2xl text-center md:text-start font-bold'>Company</h1>
                            <ul className='text-white text-center md:text-start mt-2'>
                                <li>About Us</li>
                                <li>Contact</li>
                                <li>News</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mt-4 md:mt-0'>
                        <h1 className='text-2xl w-full text-center md:text-start font-bold text-white'>Stay Up TO Date</h1>
                        <div className='flex'>
                            <input type='text' className='border-2 rounded-sm text-white bg-gray-400 border-white p-2 mt-2 md:mt-4' placeholder='Enter Your Email' />
                            <button className='bg-white rounded-sm text-black px-4 py-2 mt-2 md:mt-4'>SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-400 p-3 md:flex block items-center'>
                    <Image src='/images/Line 4.png' className='md:ml-4 md:mt-4' alt='logo' width={1300} height={100} />
                    <ul className='flex space-x-4 mt-2 justify-center mx-auto md:mt-4'>
                        <li className='text-white'>Terms</li>
                        <li className='text-white'>Privacy</li>
                        <li className='text-white'>Cookies</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
