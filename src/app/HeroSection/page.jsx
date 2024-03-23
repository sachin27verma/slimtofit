import Image from "next/image";
import React from "react";
import { Header } from "../Header/page";

export const Herosection = () => {
  return (
    <div className="">
      <div className="bg-red-500 fixed w-full h-25 z-50">
       {/* <Header/> */}

        {/* <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script> */}
      </div>
      <main className="h-[100vh] z-2 bg-black relative">
        <Image
          src="/h2.jpg" // Replace with your image path
          alt="Hero Image"
          layout="fill" // Ensures responsive image rendering
          className="object-cover object-top opacity-50" // Set desired opacity
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-white abril-fatface-regular text-7xl font-bold mb-4 uppercase tracking-wider">
            <span className="text-[#FFBA00]">sas</span> fat to slim
          </h1>{" "}
          {/* White text, large size, bold, margin below */}
          <h1 className="text-white text-2xl font-semibold uppercase">
            <span>Eat</span>
            <span className="px-2 text-[#FFBA00]">|</span>{" "}
            {/* Vertical bar between elements */}
            <span>Sleep</span>
            <span className="px-2 text-[#FFBA00]">|</span>
            <span>Lose Weight</span>
          </h1>{" "}
          {/* White text, medium size, semi-bold */}
        </div>
      </main>
    </div>
  );
};