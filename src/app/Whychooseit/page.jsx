import React from 'react';
import Card from '@/components/Cards/page'; // Assuming CardHover is in this location

export const About = () => {
  // Provide meaningful default values for CardHover parameters
  const defaultCardProps = {
    imageSrc: 'https://via.placeholder.com/300x200', // Placeholder image
    title: 'Empower Your Wellbeing',
    text: 'Invest in a holistic approach to your health and happiness.',
    learnMoreText: 'Learn More',
    discount: 10, // Example discount percentage
  };

  return (
    <div className="about-section pt-4"> {/* Added a class for easier styling */}
      <div className="about-content flex justify-center items-center flex-col"> {/* Tailwind classes for centering */}
        <h1 className="about-title abril-fatface-regular tracking-wider text-center text-5xl font-bold mb-4 text-[#FFBA00]"> {/* Tailwind classes for styling */}
          Why Choose Us?
        </h1>
        <p className="text-2xl tracking-wider font-semibold about-description text-center"> {/* Tailwind classes for styling */}
          A joyful investment in your body,<br />
          mind and spirit
        </p>
      </div>
      <div className="flex max-w-7xl mx-auto">
        <div className="flex-1">
          <img
            alt="Spices and herbs"
            className="object-cover rounded-tr-3xl rounded-bl-3xl p-5 object-top w-full h-full"
            height="768"
            src="/h3.jpg"
            style={{
              aspectRatio: "902/768",
              objectFit: "cover",
            }}
            width="902"
          />
        </div>
        <div className="flex-1 px-12 py-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109H17.4c.56 0 .839 0 1.053-.109c.188-.096.341-.25.437-.437c.11-.214.11-.494.11-1.054v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C18.24 12 17.96 12 17.4 12zm0 0v-2a3 3 0 0 1 3-3M5 12v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 17 6.04 17 6.598 17h1.804c.559 0 .838 0 1.052-.109c.188-.096.341-.25.437-.437C10 16.24 10 15.96 10 15.4v-1.803c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C9.24 12 8.96 12 8.4 12zm0 0v-2a3 3 0 0 1 3-3"/></svg>
          <h6 className="text-sm font-semibold italic text-green-700">India's best dietician and health expert clinic.</h6>
          <h1 className="mt-4 text-5xl font-bold text-gray-800">Welcome To SAS FAT TO SLIM</h1>
          <p className="mt-6 text-base text-gray-700">
            We have a client base across the globe. Our diet is completely different from all other dietitians. The diet
            is more about Indian food and not at all about Brown Bread, Brown Rice or those fancy Salads The concept of
            ‘Eat & Sleep’ is a revolutionary concept, we believe in putting nutrients in the body rather than starving
            people out of food.
          </p>
          <p className="mt-4 text-base text-gray-700">
            We make our clients to lose up to 7 kgs and 4 inches from various part of their body within one month, without
            exercises and without making them starve. Also, the diet has helped clients in controlling their diabetes. The
            diet containing nutrients rich food makes the clients energetic and fresh, unlike other dieticians who drain
            out energy by stopping food and starving people.
          </p>
          <p className="mt-4 text-base text-gray-700">
            It is recognized for the pioneering & innovative work in the field of Obesity Control & Management with
            particular emphasis to developing new and effective ways & programs to combat Obesity.
          </p>
          <div className="mt-8 flex items-center">
            <PhoneIcon className="text-green-700 h-6 w-6" />
            <a className="ml-2 text-lg font-semibold text-green-700" href="#">
              +91-9897717000
            </a>
          </div>
        </div>
      </div>
      {/* <Card  /> Pass default props to CardHover */}
    </div>
  );
};

/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/KoH3VHucgH2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// export default function Component() {
//     return (
      
//     )
//   }
  
  function PhoneIcon(props) {
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  