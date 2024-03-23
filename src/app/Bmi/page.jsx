'use client'
import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightMeters = height / 100;
    const bmiValue = weight / (heightMeters * heightMeters);
    setBMI(bmiValue.toFixed(2));
  };

  return (
<div>
<h1 className="about-title abril-fatface-regular m-10 tracking-wider text-center text-5xl font-bold mb-4  text-green-500">
          Bmi Calculator
        </h1>
    <div className="container w-2/6 shadow-xl mx-auto m-10 p-4 bg-green-100 shadow-md"> {/* Herbal green background */}
      

      <div className="  mx-auto   justify-between gap-4">  {/* Grid layout for inputs and button */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
      </div>

      <button
        className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={calculateBMI}
      >
        Calculate BMI
      </button>

      {bmi !== null && (
        <div className="mt-4">
          <p className="text-lg font-medium text-gray-700">Your BMI: {bmi}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default BMICalculator;
