// import Image from "next/image";
// import Hero from './HeroSection/Herosection'
import BMICalculator from './Bmi/page';
import { Herosection } from './HeroSection/page';
import OurBenefits from './OurBenefits/page';
import { Services } from './Ourservices/page';
import Stats from './Stats/page';
import { ProductCard } from './products/page';
import { About } from './whychooseit/page';

export default function Home() {
  return (
    <>
  <Herosection/>
  <ProductCard/>
  <About/>
  <Services/>
  <BMICalculator/>
  <OurBenefits/>
  <Stats/>
  </>
  );
}
