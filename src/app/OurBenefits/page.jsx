
export default function OurBenefits() {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-white">
        <h1 className="about-title abril-fatface-regular tracking-wider text-center text-5xl font-bold mb-4  text-green-500">
          Our Benifits
        </h1>
        <div className="mt-8  items-center justify-center flex  gap-8">
          <div className="flex flex-col items-center" >
            <div className="flex flex-col translate-x-40 aspect-square justify-center w-[300px]  items-center p-6 rounded-full bg-[#f3f4f6]">
              <ScaleIcon className="h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-xl  font-semibold">Balance Body & Mind</h3>
              <p className="mt-2 text-center text-gray-600">
                It is about the mind-body connection and how stress can cause physical pain. We offer our customers a wide
                range of packages.
              </p>
            </div>
            <div className="flex flex-col aspect-square justify-center w-[300px]  items-center p-6 rounded-full bg-[#f3f4f6]">
              <LeafIcon className="h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold">Healthy Daily Life</h3>
              <p className="mt-2 text-center text-gray-600">
                Provide diet plan that provides you healthy living and The plans are detailed and we never leave any
                stones unturned.
              </p>
            </div>
            <div className="flex flex-col translate-x-40  aspect-square justify-center w-[300px]  items-center p-6 rounded-full bg-[#f3f4f6]">
              <BarChartIcon className="h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold">Nutrition Strategies</h3>
              <p className="mt-2 text-center text-gray-600">
                It is about the importance of eating a healthy diet. You would be glad to know that we are certified
                professional.
              </p>
            </div>
          </div>
          <img
            alt="Spices and herbs"
            className="object-cover w-[400px] h-[400px]  rounded-full aspect-square  p-5 object-top  "
            height="768"
            src="/h4.jpg"
            
            width="902"
          />
          <div className="flex flex-col items-center ">
            <div className="flex flex-col aspect-square justify-center  -translate-x-40 w-[300px]  items-center p-6 rounded-full bg-[#f3f4f6]">
              <SaladIcon className="h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold">Healthy Diets</h3>
              <p className="mt-2 text-center text-gray-600">
                All of our meal plans are tailored to fit your specific dietary requirements and tastes.
              </p>
            </div>
            <div className="flex flex-col aspect-square justify-center w-[300px]  items-center p-6 rounded-full bg-[#f3f4f6]">
              <FeatherIcon className="h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold">Stay Light, Feel Light</h3>
              <p className="mt-2 text-center text-gray-600">
                Forget bloating. Our weight loss programs will help you shed pounds and leave you feeling like a feather.
              </p>
            </div>
            <div className="flex flex-col -translate-x-40  aspect-square justify-center w-[300px]  items-center p-6 rounded-full bg-[#f3f4f6]">
              <StethoscopeIcon className="h-12 w-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold">Medically-Approved</h3>
              <p className="mt-2 text-center text-gray-600">
                You may rest easy knowing that you're in good hands thanks to our years of knowledge and
                medically-approved diet plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function BarChartIcon(props) {
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
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
      </svg>
    )
  }
  
  
  function FeatherIcon(props) {
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
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" x2="2" y1="8" y2="22" />
        <line x1="17.5" x2="9" y1="15" y2="15" />
      </svg>
    )
  }
  
  
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
    )
  }
  
  
  function SaladIcon(props) {
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
        <path d="M7 21h10" />
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
        <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
        <path d="m13 12 4-4" />
        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
      </svg>
    )
  }
  
  
  function ScaleIcon(props) {
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
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
        <path d="M7 21h10" />
        <path d="M12 3v18" />
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
      </svg>
    )
  }
  
  
  function StethoscopeIcon(props) {
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
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    )
  }
  