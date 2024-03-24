import React from 'react';

export const ProductCard = () => {
  return (
    <div className=' Offers w-[90%] m-auto  -translate-y-20'>
      <div className=' flex justify-between gap-7'>
      <div className="relative overflow-hidden rounded-lg bg-[url('https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center h-[235px] w-[400px]">
      <div className=" absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-100" />
    
      <div className="absolute inset-0  flex flex-col items-start justify-center p-4">
      <div className=' flex items-center  bg-green-400 px-2 rounded-full right-1 top-1 absolute'>
        <p className=' text-white text-md font-bold justify-between '>-7</p>
        {/* <img src='/image.png' width={20} height={40}/> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.765 2.998a3 3 0 0 1 4.47 0l.7.782a1 1 0 0 0 .801.332l1.05-.058a3 3 0 0 1 3.16 3.16l-.058 1.05a1 1 0 0 0 .332.8l.783.7a3 3 0 0 1 0 4.471l-.783.7a1 1 0 0 0-.332.801l.058 1.05a3 3 0 0 1-3.16 3.16l-1.05-.058a1 1 0 0 0-.8.332l-.7.783a3 3 0 0 1-4.471 0l-.7-.783a1 1 0 0 0-.801-.332l-1.05.058a3 3 0 0 1-3.16-3.16l.058-1.05a1 1 0 0 0-.332-.8l-.782-.7a3 3 0 0 1 0-4.471l.782-.7a1 1 0 0 0 .332-.801l-.058-1.05a3 3 0 0 1 3.16-3.16l1.05.058a1 1 0 0 0 .8-.332zm5.942 5.295a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0M9.5 8A1.5 1.5 0 0 0 8 9.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V9.5A1.5 1.5 0 0 0 9.51 8zm5 5a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5v-.01a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd" className=' text-white'/></svg>
      </div>
        <h2 className="text-4xl font-bold text-black">Vegetarian Menu</h2>
        <p className=" text-green-500 font-bold text-sm ">700-1600 kcal</p>
        <button className="mt-4 p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white">Learn More</button>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg bg-[url('https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center h-[235px] w-[400px]">
      <div className=" absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-100" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
        <h2 className="text-4xl font-bold text-black">Vegetarian Menu</h2>
        <p className="text-green-500 font-bold text-sm">700-1600 kcal</p>
        <button className="mt-4 p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white">Learn More</button>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg bg-[url('https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center h-[235px] w-[400px]">
      <div className=" absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-100" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
        <h2 className="text-4xl font-bold text-black">Vegetarian Menu</h2>
        <p className="text-green-500 font-bold text-sm">700-1600 kcal</p>
        <button className="mt-4 p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white">Learn More</button>
      </div>
    </div>
       
      </div>
    </div>
  );
};