import React from 'react'
import FeedbackCard from './FeedbackCard'

export default function Feedback() {
  return (
    <>
        <div className='max-w-full justify-center mb-32 px-8'>
            <h1 className='text-4xl font-bold text-center pb-12'>Feedback Corner</h1>
            <p className='text-center'>We are always looking for feedback from our customers. Please let us know what you think.</p>
            <FeedbackCard />
       </div>
    </>
  )
}
