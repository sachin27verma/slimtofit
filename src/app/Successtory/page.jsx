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
        <div>
        <div className="bg-[#8cc28c] p-4 max-w-sm mx-auto rounded-lg shadow-lg">
        {/* <div className="text-white font-bold text-2xl text-center mb-4">HERBAL TRANSFORMATION</div> */}
        <div className="flex justify-between items-center bg-[#2c3e50] text-white p-2 rounded-lg">
          <div>
          <img
            alt="Spices and herbs"
            className="object-cover w-[400px] h-[400px]   aspect-square  p-5 object-top  "
            height="768"
            src="/h4.jpg"
            
            width="902"
          />
          <p className=' text-center text-xl font-bold tracking-wider uppercase'>Before</p>
          </div>
         
        </div>
      </div>
        </div>
        <div>
        <div className="bg-[#8cc28c] p-4 max-w-sm mx-auto rounded-lg shadow-lg">
        {/* <div className="text-white font-bold text-2xl text-center mb-4">HERBAL TRANSFORMATION</div> */}
        <div className="flex justify-between items-center bg-[#2c3e50] text-white p-2 rounded-lg">
          <div>
          <img
            alt="Spices and herbs"
            className="object-cover w-[400px] h-[400px]   aspect-square  p-5 object-top  "
            height="768"
            src="/h4.jpg"
            
            width="902"
          />
          <p className=' text-center text-xl font-bold tracking-wider uppercase'>Before</p>
          </div>
         
        </div>
      </div>
        </div>
        <div>
        <div className="bg-[#8cc28c] p-4 max-w-sm mx-auto rounded-lg shadow-lg">
        {/* <div className="text-white font-bold text-2xl text-center mb-4">HERBAL TRANSFORMATION</div> */}
        <div className="flex justify-between items-center  text-white  rounded-lg">
          <div>
          <img
            alt="Spices and herbs"
            className="object-cover w-[400px] h-[400px]   aspect-square  p-5 object-top  "
            height="768"
            src="/h4.jpg"
            
            width="902"
          />
          <p className=' text-center text-xl font-bold tracking-wider uppercase'>Before</p>
          </div>
         
        </div>
      </div>
        </div>
        <div>
        <div className="bg-[#8cc28c] p-4 max-w-sm mx-auto rounded-lg shadow-lg">
        {/* <div className="text-white font-bold text-2xl text-center mb-4">HERBAL TRANSFORMATION</div> */}
        <div className="flex justify-between items-center bg-[#2c3e50] text-white p-2 rounded-lg">
          <div>
          <img
            alt="Spices and herbs"
            className="object-cover w-[400px] h-[400px]   aspect-square  p-5 object-top  "
            height="768"
            src="/h4.jpg"
            
            width="902"
          />
          <p className=' text-center text-xl font-bold tracking-wider uppercase'>Before</p>
          </div>
         
        </div>
      </div>
        </div>
      </Carousel>

      
    </div>
  )
}

