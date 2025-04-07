import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FlashSales from '../components/FlashSales'

//  assets

import Apple14 from '../assets/hero_endframe__cvklg0xk3w6e_large 2.png'
import AppleLogo from '../assets/1200px-Apple_gray_logo 1.png'
import Footer from '../components/Footer'
import Category from './Category'

export default function Home () {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % 5)
    }, 5000)
    return () => clearInterval(interval)
  })

  const categories = [
    { name: "Woman's Fashion", hasSubmenu: true },
    { name: "Men's Fashion", hasSubmenu: true },
    { name: 'Electronics', hasSubmenu: false, path: '/electronics' },
    { name: 'Home & Lifestyle', hasSubmenu: false, path: '/home-lifestyle' },
    { name: 'Medicine', hasSubmenu: false, path: '/medicine' },
    { name: 'Sports & Outdoor', hasSubmenu: false, path: '/sports-outdoor' },
    { name: "Baby's & Toys", hasSubmenu: false, path: '/babies-toys' },
    { name: 'Groceries & Pets', hasSubmenu: false, path: '/groceries-pets' },
    { name: 'Health & Beauty', hasSubmenu: false, path: '/health-beauty' }
  ]

  const handleDotClick = index => {
    setActiveSlide(index)
  }

  return (
    <div>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <header className='flex items-center justify-between border-b py-4 px-6'>
          <h1 className='text-2xl font-bold'>Exclusive</h1>

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
                    stroke-width='1.5'
                    stroke-linecap='round'
                  />
                </svg>
              </span>
            </div>
            <button className='p-2'>
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
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </Link>
            </button>
            <button className='p-2'>
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
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M3 5H7L10 22H26'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8'
                    stroke='black'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </Link>
            </button>
          </div>
        </header>
        {/* Main Content */}
        <div className='flex flex-col md:flex-row'>
          {/* Sidebar Categories */}
          <div className='w-full md:w-64 border-r'>
            <ul className='py-4'>
              {categories.map((category, index) => (
                <li key={index} className='px-6 py-2.5 hover:bg-gray-100'>
                  <Link
                    to={category.path}
                    className='flex items-center justify-between'
                  >
                    <span>{category.name}</span>
                    {category.hasSubmenu && (
                      <span>
                        <svg
                          width='8'
                          height='13'
                          viewBox='0 0 8 13'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z'
                            fill='black'
                          />
                        </svg>
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex-1 relative'>
            <div className='relative bg-black text-white m-[45px]'>
              <div className='flex justify-between'>
                <div className='p-12 md:p-16 max-w-md'>
                  <div className='flex items-center mb-[20px]'>
                    <div className='mr-[24px]'>
                      <img src={AppleLogo} alt='' />
                    </div>

                    <span>iPhone 14 Series</span>
                  </div>
                  <p className='text-4xl md:text-5xl font-Inter font-semibold leading-tight md:leading-snug'>
                    <span>Up to 10%</span> <br />
                    off Voucher
                  </p>

                  <div className='flex items-center mt-4'>
                    <button className='inline-flex items-center border-b-2 border-white pb-1 font-medium text-white hover:opacity-80 transition duration-200'>
                      Shop Now
                    </button>
                    <span className='ml-2'>
                      <svg
                        width='19'
                        height='16'
                        viewBox='0 0 19 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1.5 8H18M18 8L11 1M18 8L11 15'
                          stroke='#FAFAFA'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* iPhone Image */}
                <div className='flex'>
                  <img src={Apple14} alt='' />
                </div>
              </div>
              {/* Pagination Dots */}
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                {[0, 1, 2, 3, 4].map(index => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`h-2.5 w-2.5 rounded-full ${
                      activeSlide === index ? 'bg-red-500' : 'bg-gray-400'
                    }`}
                    style={{
                      height: '10px',
                      width: '10px',
                      borderRadius: '50%',
                      backgroundColor:
                        activeSlide === index ? '#f44336' : '#cccccc',
                      margin: '0 4px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <FlashSales />
        <Category />
      </div>
      <Footer />
    </div>
  )
}
