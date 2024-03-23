import Link from 'next/link';
import React from 'react';

export const AIsolution = () => {
  return (
    <div>
      <h1 className="about-title abril-fatface-regular m-10 tracking-wider text-center text-5xl font-bold mb-4 text-green-500">
        AI solution
      </h1>
      <div className='h-[50vh] bg-green-400 flex justify-center items-center'>
        <div className='p-4 '>
          <img src='./h7.png' alt='AI Solution' height={400} width={400} />
        </div>
        <div className=''>
          <h1 style={titleStyle}>Cure your diseases With Organic Diet</h1>
          <p style={paragraphStyle}>
            We have developed a model that takes symptoms and predicts diseases, providing personalized and trusted organic solutions.
          </p>
          <Link href="/DiseaseSolution" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white-600 transition duration-300 ease-out border-2 border-white-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full font-bold ease">Cheak Out!</span>
<span class="relative invisible">Button Text</span>
</Link>
        </div>
      </div>
    </div>
  );
};

// Inline styles
const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#333', // Adjust color as needed
};

const paragraphStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '1rem',
};

const linkStyle = {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'blue', // Adjust color as needed
  cursor: 'pointer',
  textDecoration: 'underline',
};

export default AIsolution;
