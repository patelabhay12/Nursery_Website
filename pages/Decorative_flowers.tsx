import React from 'react'
import Link from 'next/link';

const data = [
  {
    Img: "./fl1.jpeg"
  }
  , {
    Img: "./fl2.jpeg"
  }
  , {
    Img: "./fl3.jpeg"
  }
  , {
    Img: "./fl4.jpeg"
  }
  , {
    Img: "./fl5.jpeg"
  }
  , {
    Img: "./fl6.jpeg"
  }
  , {
    Img: "./fl7.jpeg"
  }
  , {
    Img: "./fl8.jpeg"
  }
  , {
    Img: "./fl9.jpeg"
  }
  , {
    Img: "./fl10.jpeg"
  }
  , {
    Img: "./fl11.jpeg"
  }
  , {
    Img: "./fl12.jpeg"
  }
]
const Mugs = () => {
  return (
    <>
      <section className="text-gray-600 body-font  ">
        <div className="container px-5 py-24">
          <div className="flex flex-wrap -m-4 justify-center ">


            {
              data.map((item,index) => {
                return (
                  <div key={index} className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-2 grid justify-center ">
                    <Link href={'/product/wear-the-code'} >
                      <div className="block relative rounded overflow-hidden">
                        <img alt="ecommerce" className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block" src={ item.Img} />
                      </div>
                      <div className="mt-4 text-center md:text-left">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Flower</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">A flower blossoms for its own joy. </h2>
                        <p className="mt-1">199₹</p>
                        {/* <p className='mt-1'>S, M, L, XL, XXL</p> */}
                      </div>
                    </Link>
                  </div>
                )
              })


            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Mugs;