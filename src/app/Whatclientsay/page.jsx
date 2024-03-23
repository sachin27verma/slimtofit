'use client'
import React, { useState } from 'react'
import Card from './Card'
// import reviews from '../data'
import {FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Link from 'next/link';

export const Testimonial = ({ reviews }) => {

    const[index, setIndex] = useState(0);

    function leftShiftHandler() {
        // index -1 <0 ? setIndex(reviews.length-1) : setIndex(index-1);

        if(index-1 < 0 ) setIndex(reviews.length -1);
    else setIndex(index-1);
    }
    function rightShiftHandler() {
        if(index+1 >= reviews.length) setIndex(0);
        else setIndex(index+1)
    }
    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return (
        <div className=' shadow-lg border-t-green-400  '>
            <h1 className="about-title abril-fatface-regular m-10 tracking-wider text-center text-5xl font-bold mb-4  text-green-500">
    WHat Clients Say about Us
  </h1>
  <div className=' flex justify-center items-center mt-16'>

  
        
        <div 
            className='w-[85vw] md:w-[700px] bg-white flex flex-col
            justify-center items-center mt-10 p-10 transition-all duration-700
            hover:shadow-xl rounded-md'>
            <div>
                <Card review = {reviews[index]}/>
            </div>
            <div className='flex text-3xl mt-10 gap-3 text-green-400 font-bold text-center justify-center'>    {/*  mx-auto */}
                <button 
                    className='cursor-pointer hover:text-green-500'
                    onClick={leftShiftHandler}
                    >
                    <FiChevronLeft/>
                </button>
                <button 
                    onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-green-500'
                    >
                    <FiChevronRight/>
                </button>
            </div>
            <div className='mt-6'>
                <Link href='/TestimonialForm'>
                <button 
                    onClick={surpriseHandler}
                    className='bg-green-500 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                   Add Your Experience
                </button>
                </Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Testimonial