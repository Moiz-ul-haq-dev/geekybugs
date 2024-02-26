import React from 'react'
import Link from 'next/link'
import ProductCard from './ProductCard'

export default function Products() {
  return (
    <>
       <div className='w-full justify-evenly mb-32 px-8'>
            <h1 className='text-3xl font-semibold text-center pb-12'>Our Products</h1>
            <ul className='flex md:space-x-20 md:justify-center justify-evenly md:mx-auto items-center pb-3'>
            <li>
              <Link href='/' className='hover:text-blue-500'>SALE</Link>
            </li>
            <li>
              <Link href='/' className='hover:text-blue-500 underline'>HOT</Link>
            </li>
            <li>
              <Link href='/' className='hover:text-blue-500'>NEW ARRIVALS</Link>
            </li>
            <li>
              <Link href='/' className='hover:text-blue-500'>ACCESSORIES</Link>
            </li>
          </ul>
          <ProductCard />
       </div>
    </>
  )
}
