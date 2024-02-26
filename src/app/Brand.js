import React from 'react'
import Image from 'next/image'

export default function Brand() {
    return (
        <>
            <div className='md:flex block md:justify-evenly items-center bg-gray-100 md:py-5 py-3'>
                <Image src='/images/zara.png' alt='brand' width='200' height='200' className='justify-center mx-auto my-10' />
                <Image src='/images/vogue.png' alt='brand' width='200' height='200' className='justify-center mx-auto my-10' />
                <Image src='/images/gucci.png' alt='brand' width='200' height='200' className='justify-center mx-auto my-10' />
                <Image src='/images/fashion (2).png' alt='brand' width='200' height='200' className='justify-center mx-auto my-10' />
            </div>
        </>
    )
}
