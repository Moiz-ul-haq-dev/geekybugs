"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const feedbacks = [
    {
        quotation: '/images/double-quotes 1.png',
        name: 'John Doe',
        feedback: 'I am very happy with the quality of the products. The customer service is also very helpful.',
    },
    {
        quotation: '/images/double-quotes 1.png',
        name: 'John Lala',
        feedback: 'I am very happy with the quality of the products. The customer service is also very helpful.',
    },
    {
        quotation: '/images/double-quotes 1.png',
        name: 'John Doe',
        feedback: 'I am very happy with the quality of the products. The customer service is also very helpful.',
    },
    {
        quotation: '/images/double-quotes 1.png',
        name: 'John Doe',
        feedback: 'I am very happy with the quality of the products. The customer service is also very helpful.',
    },
];

export default function FeedbackCard() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
    };

    const numCardsInRow = Math.min(3, feedbacks.length);

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="flex justify-center flex-wrap gap-6">
                {[...Array(numCardsInRow)].map((_, index) => {
                    const feedbackIndex = (currentIndex + index) % feedbacks.length;
                    const isSecondCard = index === 1;
                    return (
                        <div key={index} className={`md:max-w-lg py-4 px-4 rounded-sm shadow-md ${isSecondCard ? 'bg-gray-400 shadow-lg shadow-slate-500' : 'bg-gray-300'}`}>
                            <Image src={feedbacks[feedbackIndex].quotation} alt="quotation" width={40} height={40} className='py-6' />
                            <p className="max-w-sm text-xl font-bold text-white py-6">{feedbacks[feedbackIndex].name}</p>
                            <p className="max-w-sm text-lg text-white mb-4">{feedbacks[feedbackIndex].feedback}</p>
                        </div>
                    );
                })}
            </div>
            <div className="mt-16 space-x-40">
                <button onClick={handlePrev} className="text-white rounded-lg hover:px-6 hover:py-3 px-4 py-3 bg-gray-300 hover:bg-gray-400 hover:shadow-lg hover:shadow-slate-500 focus:outline-none">&lt;</button>
                <button onClick={handleNext} className="text-white rounded-lg hover:px-6 hover:py-3 px-4 py-3 bg-gray-300 hover:bg-gray-400 hover:shadow-lg hover:shadow-slate-500 focus:outline-none">&gt;</button>
            </div>
        </div>
    );
}