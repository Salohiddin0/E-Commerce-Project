import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Side1 from '../../assets/Side Image.png'
import { FcGoogle } from 'react-icons/fc' // Make sure to install react-icons
import Footer from '../../components/Footer'

const SignUp = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <header className='flex items-center justify-between  py-4 px-6 relative z-20'>
          <Link to={'/'} className=' text-2xl font-bold'>
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
              to='/signup'
              className='font-medium relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black after:scale-0 after:transition-transform after:duration-200 hover:after:scale-100'
            >
              Sign Up
            </Link>
          </nav>

          <div className='flex items-center space-x-4'>
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
          </div>
        </header>
      </div>
      <hr />

      <div className='flex flex-col md:flex-row container mx-auto px-4 mt-[40px] md:mt-[70px] mb-[70px] md:mb- [140px]'>
        {/* Left side - Image */}
        <div className='w-full md:w-1/2 bg-[#CBE4E8] flex items-center justify-center mb-[45px] hidden sm:block'>
          <img
            src={Side1 || '/placeholder.svg'}
            alt='Shopping illustration'
            className=''
          />
        </div>

        {/* Right side - Form */}
        <div className='w-full md:w-1/2 p-6 md:p-12 flex items-center justify-center'>
          <div className='w-full max-w-md'>
            <h1 className='text-3xl font-medium mb-[24px]'>
              Create an account
            </h1>
            <p className='text-gray-500 mb-8'>Enter your details below</p>

            <form className='space-y-4'>
              <div>
                <input
                  type='text'
                  placeholder='Name'
                  className='w-full px-4 py-3 border-b border-gray-300  rounded focus:outline-none focus:ring-1 focus:ring-red-500'
                />
              </div>

              <div>
                <input
                  type='text'
                  placeholder='Email or Phone Number'
                  className='w-full px-4 py-3 border-b border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-500'
                />
              </div>

              <div>
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full px-4 py-3 border-b border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-red-500'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded transition-colors'
              >
                Create Account
              </button>

              <button
                type='button'
                className='w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded hover:bg-gray-50 transition-colors'
              >
                <FcGoogle size={20} />
                <span>Sign up with Google</span>
              </button>
            </form>

            <div className='mt-6 text-center'>
              <span className='text-gray-600'>Already have account?</span>{' '}
              <Link
                to='/login'
                className='text-blue-600 ms-2 font-medium hover:underline'
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
