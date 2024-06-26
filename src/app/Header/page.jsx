"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Link from 'next/link';
export const Header = () => {
  const scrolltoHash = function (element_id) {
    const element = document.getElementsByClassName(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    
  }
  const  {data:session } = useSession();
  console.log(session);
  console.log(session?.data);
  let loggedIn = false;
  if(session?.success)
  {
     loggedIn = true;
  }
  return (
    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto"> <img src="logo.jpeg" class="h-6 mr-3 rounded-full sm:h-9" alt="Landwind Logo"/>
      <a href="#" class="flex items-center">
       
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          {/* SAS */}
        </span>
      </a>
      <div class="flex items-center lg:order-2">
        <div class="hidden mt-2 mr-4 sm:inline-block">
          <span></span>
        </div>

        { loggedIn ? <CircleUserRound className='text-white' /> :( <><a
                href="/register"
                class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-1 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                Register
              </a>
              <a
              href="/login"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
              Sign In
            </a></>)
              }
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="true">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2">
        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <Link
              href="/"
              class="block py-2 pl-3 pr-4 text-green-400 bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-green-400"
              aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <p
              onClick={() => scrolltoHash('Features')}
              class="block cursor-pointer py-2 pl-3 pr-4 text-gray-700 border-b border-green-400 hover:bg-green-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-green-400 lg:dark:hover:bg-transparent dark:border-gray-700">
              Features
            </p>
          </li>
          <li>
            <p
              onClick={() => scrolltoHash('BMI')}
              class="block cursor-pointer  py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              BMI
            </p>
          </li>
          <li>
            <p
              onClick={() => scrolltoHash('Category')}
              class="block cursor-pointer py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              Category
            </p>
          </li>
          <li>
            <p
              onClick={() => scrolltoHash('Testimonial')}
              class="block cursor-pointer py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              Testimonial
            </p>
          </li>
          <li>
            <p
              onClick={() => scrolltoHash('Services')}
              class="block cursor-pointer   py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
              Services
            </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}