import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import UserDropdown from '../UserDropdown/UserDropdown'
import Footer from '../../components/Footer'

const Cart = () => {
  const cartItems = 2

  return (
    <>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <header className='flex items-center justify-between border-b py-4 px-6 relative z-20'>
          <Link to={'/'} className='hidden md:block text-2xl font-bold'>
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
            <button className=''>
              <Link to={'/wishlist'} style={{ fontSize: '20px' }}>
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
            <button className=''>
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
              {cartItems > 0 && (
                <span className='absolute top-[15px] right-[65px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {cartItems}
                </span>
              )}
            </button>
            <UserDropdown />
          </div>
        </header>

        {/* Breadcrumb */}
        <div className='flex gap-2 px-6 pt-[50px] md:pt-[80px] mb-[50px] md:mb-[80px] text-sm'>
          <Link to='/' className='text-gray-500 hover:underline'>
            Home
          </Link>
          <span className='text-gray-500'>/</span>
          <p>Cart</p>
        </div>

        {/* Cart Items */}
        <div
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
            paddingLeft: '40px',
            paddingRight: '39px',
            borderRadius: '8px',
            boxShadow: '0 2px 14px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className='flex justify-between'>
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>

        {/* Cart Items2 */}
        <div
          className='mt-[40px]'
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
            paddingLeft: '40px',
            paddingRight: '39px',
            borderRadius: '8px',
            boxShadow: '0 2px 14px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className='flex items-center justify-between'>
            <p>LCD Monitor</p>
            <p>$650</p>
            <div className='border border-gray-300 p-2 rounded-md'>
              <input
                type='number'
                defaultValue={1}
                className='w-12 text-center appearance-none'
                min={1}
              />
            </div>

            <p>$650</p>
          </div>
        </div>

        <div
          className='mt-[40px]'
          style={{
            paddingTop: '24px',
            paddingBottom: '24px',
            paddingLeft: '40px',
            paddingRight: '39px',
            borderRadius: '8px',
            boxShadow: '0 2px 14px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className='flex items-center justify-between'>
            <p>LCD Monitor</p>
            <p>$650</p>
            <div className='border border-gray-300 p-2 rounded-md'>
              <input
                type='number'
                defaultValue={1}
                className='w-12 text-center appearance-none'
                min={1}
              />
            </div>

            <p>$650</p>
          </div>
        </div>

        {/* Cart Items center */}

        <div className='flex justify-between mt-[24px]'>
          <div className='border border-gray-500 p-4 rounded-md'>
            <Link className='className="py-4 px-12 font-bold'>
              Return To Shop
            </Link>
          </div>

          <div className='border border-gray-500 p-4 rounded-md'>
            <Link className='className="py-4 px-12 font-bold'>Update Cart</Link>
          </div>
        </div>

        <div className='flex gap-4 mt-[80px]'>
          <input
            type='text'
            placeholder='Coupon Code'
            className='border border-gray-600 p-3 px-4 rounded-md w-72'
          />
          <button className='bg-red-500 text-white px-6 py-3 rounded-md font-semibold'>
            Apply Coupon
          </button>
        </div>

        {/* Cart bottom */}
        <div className='mb-[80px]'>
          <div>
            {/* Cart Total Section */}
            <div className='border border-gray-600 p-6 rounded-md w-full max-w-sm'>
              <h2 className='text-xl font-bold mb-4'>Cart Total</h2>
              <div className='flex justify-between mb-2'>
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <hr className='my-2' />
              <div className='flex justify-between mb-2'>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr className='my-2' />
              <div className='flex justify-between font-semibold text-lg mb-4'>
                <span>Total:</span>
                <span>$1750</span>
              </div>
              <button className='bg-red-500 text-white w-full py-3 rounded-md font-semibold'>
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
