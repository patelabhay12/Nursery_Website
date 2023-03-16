import React from 'react';
import Link from 'next/link';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';


const checkout = ({ addToCart, cart, subTotal }) => {
  return (
    <div className='container m-auto'>
      <h1 className='font-bold text-3xl text-center my-8'>Checkout</h1>
      <h2 className='px-10 font-semibold text-xl'>1. Delivery Details</h2>
      <div className='flex mx-10 my-4 '>
        <div className=" px-2 w-1/2" >
          <div className=" mb-4">
            <label htmlFor="name" className='leading-7 text-sm text-gray-600'>Name</label>
            <input type="text" id='name' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        <div className="px-2 w-1/2" >
          <div className="mb-4">
            <label htmlFor="email" className='leading-7 text-sm text-gray-600'>Email</label>
            <input type="text" id='email' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
      </div>
      <div className="px-2 w-full" >
        <div className="mx-11">
          <label htmlFor="address" className='leading-7 text-sm text-gray-600'>Address</label>

          <textarea name="" id="" cols="30" rows="1" className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' ></textarea>
        </div>
      </div>
      <div className='flex mx-10 my-4 '>
        <div className=" px-2 w-1/2" >
          <div className=" mb-4">
            <label htmlFor="phone" className='leading-7 text-sm text-gray-600'>Phone</label>
            <input type="text" id='phone' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        <div className="px-2 w-1/2" >
          <div className="mb-4">
            <label htmlFor="city" className='leading-7 text-sm text-gray-600'>City</label>
            <input type="text" id='city' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>

      </div>
      <div className='flex mx-10 my-4 '>
        <div className=" px-2 w-1/2" >
          <div className=" mb-4">
            <label htmlFor="state" className='leading-7 text-sm text-gray-600'>State</label>
            <input type="text" id='state' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
        <div className="px-2 w-1/2" >
          <div className="mb-4">
            <label htmlFor="pincode" className='leading-7 text-sm text-gray-600'>Pincode</label>
            <input type="text" id='pincode' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
          </div>
        </div>
      </div>


      <h2 className='px-10 font-semibold text-xl'>2. Product Review & Pay </h2>
      <div className='mt-5'>
        <div className="sideCart   bg-pink-100  mx-12 mr-16 p-6 mb-4 rounded">
          <span className='absolute top-5 right-3 cursor-pointer text-2xl text-pink-400'><AiFillCloseCircle /></span>
          <ol className='list-decimal font-semibold' >
            {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty!</div>}
            {Object.keys(cart).map((item: any, index: React.Key | null | undefined) => {
              return (
                <li className='f' key={index}>
                  <div className="item flex my-5">

                    <div className=' font-semibold'>{cart[item].name}</div>
                    <div className='w-1/3 font-semibold flex items-center justify-center text-lg'><AiFillMinusCircle className='cursor-pointer text-pink-500 plus' /><span className='mx-2'>{cart[item].qty}</span><AiFillPlusCircle className='cursor-pointer text-pink-500 minus' /></div>
                  </div>
                </li>
              )
            })}

          </ol>
          <div className=' container mb-5 flex align-middle space-x-8' >
            <span className='font-bold mt-3 text-xl'>SubTotal: ₹{subTotal}</span>
            <Link href={'/checkout'}> <button className="flex  mr-2 mt-3 text-white bg-pink-400 border-1 py-2 px-2 focus:outline-1 hover:bg-pink-500 rounded text-sm">Pay Now ₹{subTotal}</button> </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default checkout;