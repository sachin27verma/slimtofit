// import Image from "next/image";
// import Hero from './HeroSection/Herosection'
import { Herosection } from './HeroSection/page';
import { ProductCard } from './products/page';
import { About } from './whychooseit/page';

export default function Home() {
  return (
    <>
  <Herosection/>
  <ProductCard/>
  <About/>
  </>
  );
}
