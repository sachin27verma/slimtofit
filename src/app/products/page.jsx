import React from 'react';

export const ProductCard = () => {
  return (
    <div className=' w-[90%] m-auto  -translate-y-20'>
      <div className=' flex justify-between gap-7'>
      <div className="relative overflow-hidden rounded-lg bg-[url('https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center h-[235px] w-[400px]">
      <div className=" absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-100" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
        <h2 className="text-4xl font-bold text-black">Vegetarian Menu</h2>
        <p className="text-xl text-green-500">700-1600 kcal</p>
        <button className="mt-4 p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white">Learn More</button>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg bg-[url('https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center h-[235px] w-[400px]">
      <div className=" absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-100" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
        <h2 className="text-4xl font-bold text-black">Vegetarian Menu</h2>
        <p className="text-xl text-green-500">700-1600 kcal</p>
        <button className="mt-4 p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white">Learn More</button>
      </div>
    </div>
    <div className="relative overflow-hidden rounded-lg bg-[url('https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')] bg-cover bg-center h-[235px] w-[400px]">
      <div className=" absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-100" />
      <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
        <h2 className="text-4xl font-bold text-black">Vegetarian Menu</h2>
        <p className="text-xl text-green-500">700-1600 kcal</p>
        <button className="mt-4 p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white">Learn More</button>
      </div>
    </div>
       
      </div>
    </div>
  );
};
