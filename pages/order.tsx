import React from 'react';
import Image from 'next/image';

const Order = () => {
  return (
    <div className='container px-5 py-24 mx-auto'>
      <div className="lg:w-4/5 flex flex-wrap mx-auto">
        <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0'>
          <h2 className='text-sm title-font text-gray-500 tracking-widest'>CODESWEAR.COM</h2>
          <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>Order id: #987147</h1>

          <p className="leading-relaxed mb-4">Your Order has been Successfully Placed</p>

          <div className="flex mb-4">
            <a className="flex-grow border-indigo-500 py-2 text-lg px-1">Description</a>
            <a className="flex-grow  border-gray-300 py-2 text-lg px-1">Reviews</a>
            <a className="flex-grow  border-gray-300 py-2 text-lg px-1">Details</a>
          </div>
          <div className="flex justify-between border-t border-gray-200 py-2">
            <span className='text-gray-500'>Wear The Code (XL/Black) </span>
            <span className='text-gray-500'>1</span>
            <span className='text-gray-900'>₹499</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 py-2">
            <span className='text-gray-500'>Wear The Code (XL/Black) </span>
            <span className='text-gray-500'>1</span>
            <span className='text-gray-900'>₹499</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 py-2">
            <span className='text-gray-500'>Wear The Code (XL/Black) </span>
            <span className='text-gray-500'>1</span>
            <span className='text-gray-900'>₹499</span>
          </div>
          
          <div className="flex justify-between border-t border-gray-200 py-2">
            <span className='text-gray-900 text-3xl mt-4'>SubTotal: ₹499</span>
            <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none pink:bg-indigo-600 rounded mt-4">Track Order</button>

          </div>
        </div>
        <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" alt="Dummy Image Section" />

      </div>
    </div>
  )
}

export default Order;