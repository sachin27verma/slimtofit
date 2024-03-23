import React from 'react';
// import Button from './Button'; // Assuming Button component is defined in a separate file

export const Services = () => {
  return (
    <div>
      <div>
        <h1 className="about-title abril-fatface-regular tracking-wider text-center text-5xl font-bold mb-4 m-10 text-green-500">
          Our Services
        </h1>
      </div>
      <div className=' py-7 bg-cover flex   align-middle  bg-center' 
      // style={{ backgroundImage: "url('./h6.jpg')",}}
      >
        <div className=' w-5/6 mx-auto flex justify-center flex-wrap gap-[100px] '>
        <div className='w-[414px] h-[275px] bg-gray-50 shadow-xl rounded-md'>
        <div className="flex  justify-center items-center p-6 bg-[#f0fdf4]">
          <div className="flex items-center ">
            {/* Replace the src attribute with the correct image source */}
            <img
              alt="Bowl of food"
              className="h-20 w-20 rounded-full"
              src="food1.jpeg" // Replace this with the correct image source
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-[#065f46]">Slimming Menu</h2>
              <p className="text-[#065f46]">800-1200 kcal</p>
            </div>
          </div>
          <LeafIcon className="h-6 w-6 text-[#065f46]" />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600">
            We have gathered for you the freshest programs using delicious organic products from around the world.
          </p>
          <div className="mt-4 flex justify-between items-baseline">
            <span className="text-lg font-semibold text-[#065f46]">$49.99 USD/week</span>
            <button className="bg-[#10b981] p-3 text-white">Order Now</button>
          </div>
        </div>
        </div>
        <div className='w-[414px] h-[275px] bg-gray-50 shadow-xl rounded-md'>
        <div className="flex  justify-between items-center p-6 bg-[#f0fdf4]">
          <div className="flex items-center">
            {/* Replace the src attribute with the correct image source */}
            <img
              alt="Bowl of food"
              className="h-20 w-20 rounded-full"
              src="food2.jpeg" // Replace this with the correct image source
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-[#065f46]">Slimming Menu</h2>
              <p className="text-[#065f46]">800-1200 kcal</p>
            </div>
          </div>
          <LeafIcon className="h-6 w-6 text-[#065f46]" />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600">
            We have gathered for you the freshest programs using delicious organic products from around the world.
          </p>
          <div className="mt-4 flex justify-between items-baseline">
            <span className="text-lg font-semibold text-[#065f46]">$49.99 USD/week</span>
            <button className="bg-[#10b981] p-3 text-white">Order Now</button>
          </div>
        </div>
        </div>
        <div className='w-[414px] h-[275px] bg-gray-50 shadow-xl rounded-md'>
        <div className="flex  justify-center items-center p-6 bg-[#f0fdf4]">
          <div className="flex items-center ">
            {/* Replace the src attribute with the correct image source */}
            <img
              alt="Bowl of food"
              className="h-20 w-20 rounded-full"
              src="food1.jpeg" // Replace this with the correct image source
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-[#065f46]">Slimming Menu</h2>
              <p className="text-[#065f46]">800-1200 kcal</p>
            </div>
          </div>
          <LeafIcon className="h-6 w-6 text-[#065f46]" />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600">
            We have gathered for you the freshest programs using delicious organic products from around the world.
          </p>
          <div className="mt-4 flex justify-between items-baseline">
            <span className="text-lg font-semibold text-[#065f46]">$49.99 USD/week</span>
            <button className="bg-[#10b981] p-3 text-white">Order Now</button>
          </div>
        </div>
        </div>
        <div className='w-[414px] h-[275px] bg-gray-50 shadow-xl rounded-md'>
        <div className="flex  justify-between items-center p-6 bg-[#f0fdf4]">
          <div className="flex items-center">
            {/* Replace the src attribute with the correct image source */}
            <img
              alt="Bowl of food"
              className="h-20 w-20 rounded-full"
              src="food2.jpeg" // Replace this with the correct image source
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <div className="ml-4">
              <h2 className="text-2xl font-bold text-[#065f46]">Slimming Menu</h2>
              <p className="text-[#065f46]">800-1200 kcal</p>
            </div>
          </div>
          <LeafIcon className="h-6 w-6 text-[#065f46]" />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-600">
            We have gathered for you the freshest programs using delicious organic products from around the world.
          </p>
          <div className="mt-4 flex justify-between items-baseline">
            <span className="text-lg font-semibold text-[#065f46]">$49.99 USD/week</span>
            <button className="bg-[#10b981] p-3 text-white">Order Now</button>
          </div>
        </div>
        </div>
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