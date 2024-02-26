import React from 'react';
import Image from 'next/image';

const products = [
  {
    imageName: 'Product1.png',
    heading: 'Winter Wear Full Sleeve',
    price: 'Rs 999',
    rating: '4.1 ⭐',
  },
  {
    imageName: 'Product2.png',
    heading: 'Summer Collection Tank Top',
    price: 'Rs 599',
    rating: '4.5 ⭐',
  },
  {
    imageName: 'Product3.png',
    heading: 'Casual Wear Full Sleeve',
    price: 'Rs 799',
    rating: '4.3 ⭐',
  },
  {
    imageName: 'Product4.png',
    heading: 'Winter Wear Full Sleeve',
    price: 'Rs 999',
    rating: '4.1 ⭐',
  },
  {
    imageName: 'Product5.png',
    heading: 'Summer Collection Tank Top',
    price: 'Rs 599',
    rating: '4.5 ⭐',
  },
  {
    imageName: 'Product6.png',
    heading: 'Casual Wear Full Sleeve',
    price: 'Rs 799',
    rating: '4.3 ⭐',
  },
];

export default function ProductCard() {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto'>
        {products.map((product, index) => (
          <div className='flex flex-col items-center justify-center mx-4' key={index}>
            <Image src={`/images/${product.imageName}`} className='p-14' alt='product' width='450' height='300' />
            <h1 className='text-2xl font-semibold py-2'>{product.heading}</h1>
            <p className='text-lg py-2 font-semibold items-center'>{product.price} <span className='mx-2'>|</span> <span>{product.rating}</span></p>
          </div>
        ))}
      </div>
    </>
  );
}
