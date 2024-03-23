'use client'
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div><h1 className="about-title abril-fatface-regular m-10 tracking-wider text-center text-5xl font-bold mb-4  text-green-500">
    Stats
  </h1>
    <div className='bg-green-100 mt-8 py-6 rounded-lg shadow-lg'>
      <div className='max-w-5xl mx-auto px-6'>
        {/* <h2 className='text-2xl font-bold text-white mb-4'>Our Achievements</h2> */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 text-center'>
            <h3 className='text-3xl font-bold'><CountUp duration={3} end={65} />+</h3>
            <p className='text-sm text-gray-600'>Diet plans</p>
          </div>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 text-center'>
            <h3 className='text-3xl font-bold'><CountUp duration={3} end={13} />+</h3>
            <p className='text-sm text-gray-600'>Catergories</p>
          </div>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 text-center'>
            <h3 className='text-3xl font-bold'><CountUp duration={3} end={10000} />+</h3>
            <p className='text-sm text-gray-600'>customers</p>
          </div>
          <div className='flex flex-col items-center justify-center bg-white rounded-lg p-4 text-center'>
            <h3 className='text-3xl font-bold'><CountUp duration={3} end={500} />+</h3>
            <p className='text-sm text-gray-600'>Patents</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Stats;
