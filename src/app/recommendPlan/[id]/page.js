// import React, { useEffect, useState } from 'react';
// import { Productcard } from '../../../components/Productcard';
import Productcard from '../../../components/Productcard';

import { getProducts,getRecommendProducts } from '../../../components/lib/actions/actions';


// import Button from './Button'; // Assuming Button component is defined in a separate file

export  const Services = async({params}) => {
  // const productdata=[1,2,3,4]
  const productdata=await getRecommendProducts(params.id);
  console.log(productdata);
  // const [productdata,setProductdata]=useState([])
  // const fetchData=async()=>{
  //  await connectToDB();
  //  const data=await Product.find({});
  //  console.log(data);
  // }
  //  useEffect(()=>{
  //  fetchData();
  //  },[])
  return (
    <div>
      
      <div className=' py-7 bg-cover flex   align-middle  bg-center' 
      // style={{ backgroundImage: "url('./h6.jpg')",}}
      >{productdata.length >0 ?
        (<div className=' w-5/6 mx-auto flex flex-col justify-center flex-wrap gap-[100px] '>
            <h1 className='text-lg text-black font-bold mx-auto text-underline' >Recommended Products</h1>
          {productdata.map((e)=>(<Productcard key={e.index} item={e} className="mx-auto" />))}
        {/* <Productcard/> */}
        </div>):<div>No Plans Sorry</div>}
      </div>
    </div>
  );
};

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
  );
}

export default Services;