import React from 'react'
import Navbar from './../../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from './../../components/Footer'

const Account = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <header className='flex items-center justify-between gap-5 border-b py-4 px-6 relative z-20'>
          <Link to={'/'} className='text-2xl font-bold'>
            Exclusive
          </Link>

          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/'
              className='font-medium relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black after:scale-0 after:transition-transform after:duration-200 hover:after:scale-100'
            >
              Home
            </Link>
            <Link
              to='/contact'
              className='font-medium relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black after:scale-0 after:transition-transform after:duration-200 hover:after:scale-100'
            >
              Contact
            </Link>
            <Link
              to='/about'
              className='font-medium relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black after:scale-0 after:transition-transform after:duration-200 hover:after:scale-100'
            >
              About
            </Link>
            <Link
              to='/sign-up'
              className='font-medium relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black after:scale-0 after:transition-transform after:duration-200 hover:after:scale-100'
            >
              Sign Up
            </Link>
          </nav>

          <div className='flex items-center space-x-8'>
            <div className='relative'>
              <input
                type='text'
                placeholder='What are you looking for?'
                className='bg-gray-100 rounded-md py-2 px-4 pr-10 w-48 md:w-64'
              />
              <span className='absolute right-3 top-2.5 text-gray-500'>
                <svg
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                </svg>
              </span>
            </div>
            <button className='hidden md:block'>
              <Link to={'/like'} style={{ fontSize: '20px' }}>
                <svg
                  width='22'
                  height='20'
                  viewBox='0 0 22 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            </button>
            <button className='hidden md:block'>
              <Link to={'/cart'} style={{ fontSize: '20px' }}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M3 5H7L10 22H26'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            </button>
          </div>
        </header>

        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 px-4 pt-10 md:pt-16 mb-10 md:mb-16 text-sm'>
          <div className='flex items-center gap-2 flex-wrap'>
            <Link to='/' className='text-gray-500 hover:underline'>
              Home
            </Link>
            <span className='text-gray-500'>/</span>
            <p>My Account</p>
          </div>
          <p>
            Welcome! <span className='text-red-500'>Md Rimel</span>
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 mb-20 lg:mb-36 px-4 '>
          {/* Left Side */}
          <div className='w-full lg:max-w-[300px]'>
            <p className='text-lg font-semibold'>Manage My Account</p>
            <div className='flex flex-col mt-4 mb-6 '>
              {['My Profile', 'Address Book', 'My Payment Options'].map(
                item => (
                  <Link
                    to={'/'}
                    key={item}
                    className='m-1 text-slate-400 hover:text-red-500'
                  >
                    {item}
                  </Link>
                )
              )}
            </div>

            <p className='text-lg font-semibold'>My Orders</p>
            <div className='flex flex-col mt-4 mb-6'>
              {['My Returns', 'My Cancellations'].map(item => (
                <Link
                  key={item}
                  className='m-1 text-slate-400 hover:text-red-500'
                >
                  {item}
                </Link>
              ))}
            </div>

            <p className='text-lg font-semibold'>Wishlist</p>
          </div>

          {/* Right Side */}
          <div className='w-full bg-white rounded-lg shadow-lg p-6 sm:p-10'>
            <p className='text-2xl font-semibold mb-6 text-red-500'>
              Edit Your Profile
            </p>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    First Name
                    <input
                      type='text'
                      placeholder='MD'
                      className='w-full px-4 py-3 mt-2 bg-gray-100 rounded-md focus:outline-none'
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Last Name
                    <input
                      type='text'
                      placeholder='Rimel'
                      className='w-full px-4 py-3 mt-2 bg-gray-100 rounded-md focus:outline-none'
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Email
                    <input
                      type='email'
                      placeholder='email@example.com'
                      className='w-full px-4 py-3 mt-2 bg-gray-100 rounded-md focus:outline-none'
                      required
                    />
                  </label>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700'>
                    Address
                    <input
                      type='text'
                      placeholder='Tashkent'
                      className='w-full px-4 py-3 mt-2 bg-gray-100 rounded-md focus:outline-none'
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Password section */}
              <div>
                <p className='text-lg font-medium mb-2'>Password Changes</p>
                <input
                  type='password'
                  placeholder='Current Password'
                  className='w-full px-4 py-3 mt-2 bg-gray-100 rounded-md focus:outline-none'
                  required
                />
                <input
                  type='password'
                  placeholder='New Password'
                  className='w-full px-4 py-3 mt-3 bg-gray-100 rounded-md focus:outline-none'
                  required
                />
                <input
                  type='password'
                  placeholder='Confirm New Password'
                  className='w-full px-4 py-3 mt-3 bg-gray-100 rounded-md focus:outline-none'
                  required
                />
              </div>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 justify-end pt-4'>
                <button
                  type='button'
                  className='text-black font-medium px-6 py-3 border rounded-md hover:bg-gray-100 transition-colors duration-200'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300'
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Account
