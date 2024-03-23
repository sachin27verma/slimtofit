import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-green-500 flex justify-center items-center">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Submit a testimonial</h1>
        <p className="text-gray-500 text-center mb-6">We'd love to hear your thoughts!</p>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-bold mb-1">Name<sup className=' text-red-600'>*</sup> </label>
            <input
              id="name"
              placeholder="Enter your name"
              className=' shadow-lg h-10 px-3 focus:outline-green-300'
            
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="profession" className="text-sm mb-1 font-bold">Profession<sup className=' text-red-600'>*</sup></label>
            <input
              id="profession"
              placeholder="Enter your profession"
              className=' shadow-lg h-10 px-3  focus:outline-green-300'
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm mb-1 font-bold">Description<sup className=' text-red-600'>*</sup></label>
            <textarea
              id="description"
              placeholder="Enter your message"
              className=' shadow-lg h-10 px-3  focus:outline-green-300 min-h-[100px]'
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="file" className="text-sm mb-1">Upload an image</label>
            <input accept="image/*" id="file" type="file" className="input-field" />
          </div>
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">Submit</button>
      </div>
    </div>
  );
};

export default Page;
