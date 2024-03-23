import React from 'react';
import { ProductCard } from '../products/page';
import Productcard from '@/components/Productcard';
// import Button from './Button'; // Assuming Button component is defined in a separate file

export const Services = () => {
  const productdata=[1,2,3,4]
  return (
    <div className='Services'>
      <div>
        <h1 className="about-title abril-fatface-regular tracking-wider text-center text-5xl font-bold mb-4 m-10 text-green-500">
          Our Services
        </h1>
      </div>
      <div className=' py-7 bg-cover flex   align-middle  bg-center' 
      // style={{ backgroundImage: "url('./h6.jpg')",}}
      >
        <div className=' w-5/6 mx-auto flex justify-center flex-wrap gap-[100px] '>
          {productdata.map((e)=>(<Productcard key={e.index}/>))}
        <Productcard/>
        </div>
      </div>
    </div>
  );
};

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export default Services;