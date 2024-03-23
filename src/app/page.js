// import Image from "next/image";
// import Hero from './HeroSection/Herosection'
import { AIsolution } from './AIsolution/page';
import BMICalculator from './Bmi/page';
import Footer from './Footer/page';
// import Footer from './Footer/page';
import { Herosection } from './HeroSection/page';
import OurBenefits from './OurBenefits/page';
import { Services } from './Ourservices/page';
import Stats from './Stats/page';
import { Success } from './Successtory/page';
import Testimonial from './Whatclientsay/page';
import { ProductCard } from './products/page';
import { About } from './whychooseit/page';
import reviews from '@/Data/data';

export default function Home() {
  return (
    <>
  <Herosection/>
  
  <ProductCard/>
  <AIsolution/>
  <About/>
  <Services/>
  <BMICalculator/>
  <OurBenefits/>
  <Stats/>
  <Success/>
  <Testimonial reviews={reviews}/>
  <Footer/>
  </>
  );
}
