'use client'
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Success = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4,
          slidesToSlide: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 612 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 612, min: 0 },
          items: 1,
        },
      };
  return (
    <div>
        <div>
        <h1 className="about-title abril-fatface-regular tracking-wider text-center text-5xl font-bold mb-4 m-10 text-green-500">
          Our Prestigious Clients
        </h1>
        </div>

        <Carousel
        itemClass="react-multi-carousel-item "
        partialVisible={false}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        arrows={true}
        showDots={true}
        keyBoardControl={true}
        className="gd-carousel text-black dark:text-white ">
       <div className="flex justify-center items-center   p-3">
      <div className="grid grid-cols-2 ">
        <div className="flex  bg-green-300  translate-x-6 flex-col items-center py-4  shadow-lg">
          <img
            alt="Before"
            className="mb-2"
            height="200"
            src="/h6.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <span className="text-sm font-semibold tracking-widest text-red-600 abril-fatface-regular">BEFORE</span>
        </div>
        <div className="flex translate-y-3 rotate-12 bg-green-300 flex-col items-center p-4  shadow-lg">
          <img
            alt="After"
            className="mb-2"
            height="200"
            src="/food1.jpeg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <span className="text-sm font-semibold tracking-wider abril-fatface-regular text-red-600">AFTER</span>
        </div>
      </div>
    </div>

      </Carousel>

      
    </div>
  )
}

