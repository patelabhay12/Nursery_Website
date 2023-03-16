import React from 'react';

const forgot = () => {
  return (
    <div className='min-h-full container  mx-auto flex justify-centerm items-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='w-full space-x-3  '>
        <img src="./logo1.png" alt="" className='mx-auto w-auto h-12' />
        <h2 className='text-2xl font-bold mx-auto  text-center mt-6'>Forgot Password</h2>
        <p className='text-center mt-2 text-sm text-gray-600'>
          Or
          <span className='font-medium text-pink-600 hover:text-pink-500'>Login</span>
        </p>

        <div className='grid justify-center mt-7'>
          <input type="email" name='email' autoComplete='email' required className='relative block appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:z-10 focus:border-pink-500 focus:outline-none  focus:ring-pink-500 sm:text-sm' placeholder='Email address' />

          <button className='mt-4 border border-gray-300 rounded-lg bg-pink-500 text-white border-none'>Reset Password</button>
        </div>

        {/* <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm" placeholder="Email address" /> */}
      </div>

      {/* <div className="input_part">
        <input type="text" />
      </div> */}
    </div>
  )
}

export default forgot;