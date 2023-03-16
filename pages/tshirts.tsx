import React from 'react';
import Link from 'next/link';
const mongoose = require('mongoose');
// import Product from '../models/Product';


// export async function getServerSideProps(context: any) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }
//   let products = await Product.find();

//   return {
//     props: {
//       products: JSON.parse(JSON.stringify(products))
//     }

//   }
// }

const Tshirts = () => {
  // console.log(products);
  return (
    <>
      <section className="text-gray-600 body-font  ">
        <div className="container px-5 py-24">
          <div className="flex flex-wrap -m-4  justify-center">
            <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-2 grid justify-center ">
              <Link href={'/product/wear-the-code'} >
                <div className="block relative rounded overflow-hidden">
                  <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src="./arika.jpeg" />
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Palms</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Make The neture wanderfull</h2>
                  <p className="mt-1">599₹</p>
                  {/* <p className='mt-1'>S, M, L, XL, XXL</p> */}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Tshirts;