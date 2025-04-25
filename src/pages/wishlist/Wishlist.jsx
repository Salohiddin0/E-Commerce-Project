import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromWishlist,
  clearWishlist
} from '../../redux/slices/wishlistSlice'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import UserDropdown from '../UserDropdown/UserDropdown'
import ProductCard from '../../components/product/ProductCard'

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist.items)
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        {/* Header */}

        <header className='flex items-center justify-between border-b py-4 px-6 relative z-20 mb-[30px] md:mb-[80px]'>
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
              {wishlistItems.length > 0 && (
                <span className='absolute top-[15px] right-[110px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {wishlistItems.length}
                </span>
              )}
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
            </button>
            <UserDropdown />
          </div>
        </header>

        {/* Main Content */}

        <div className='flex justify-between items-center mb-6 p-[20px]'>
          <h1 className='text-2xl font-semibold'>
            Wishlist ({wishlistItems.length})
          </h1>
          {wishlistItems.length > 0 && (
            <button
              className=' text-black border border-slate-400 px-5 py-3 rounded'
              onClick={() => dispatch(clearWishlist())}
            >
              Move All To Bag
            </button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <p className='text-gray-500'>Your wishlist is empty.</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:mb-[60px] p-[20px]'>
            {wishlistItems.map(product => (
              <div
                key={product.id}
                className='group relative border rounded-sm overflow-hidden flex flex-col'
              >
                <div className='relative group/card cursor-pointer'>
                  <Link to={`/product-detail/${product.id}`}>
                    <div className='make-gray'>
                      <img
                        src={product.image || '/placeholder.svg'}
                        alt={product.title}
                        className='w-full h-48 object-contain p-4'
                      />
                    </div>
                  </Link>

                  <span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded'>
                    -{product.discount}%
                  </span>

                  <div className='absolute top-2 right-2 flex flex-col gap-2'>
                    <button
                      onClick={() => dispatch(removeFromWishlist(product.id))}
                      className='bg-white p-1 rounded-full shadow'
                    >
                      <svg
                        width='34'
                        height='34'
                        viewBox='0 0 34 34'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx='17' cy='17' r='17' fill='white' />
                        <path
                          d='M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714'
                          stroke='black'
                          stroke-width='1.56'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className='absolute inset-x-0 bottom-0 bg-black text-white py-2 text-sm flex justify-center items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300'
                  >
                    <svg
                      width='25'
                      height='24'
                      viewBox='0 0 25 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z'
                        stroke='white'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z'
                        stroke='white'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M2.75 3.75H5.75L8 16.5H20'
                        stroke='white'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5'
                        stroke='white'
                        stroke-width='1.5'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                    Add To Cart
                  </button>
                </div>

                <div className='bg-white p-4 flex flex-col justify-between'>
                  <h3 className='text-sm font-semibold mb-2'>
                    {product.title}
                  </h3>
                  <div className='flex items-center gap-2 text-sm'>
                    <span className='text-red-500 font-semibold'>
                      ${product.currentPrice}
                    </span>
                    <span className='line-through text-gray-400'>
                      ${product.originalPrice}
                    </span>
                  </div>
                  <div className='flex items-center gap-1 mt-2'>
                    <div className='flex text-yellow-400'>
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.round(product.rating?.rate)
                              ? 'fill-current'
                              : 'fill-gray-300'
                          }`}
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z' />
                        </svg>
                      ))}
                    </div>
                    <span className='text-sm text-gray-500'>
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className='mt-[80px]'>
          <div className='flex justify-between items-center'>
            <div className='bg-red-500 text-white py-2 px-6 rounded-r-full inline-block'>
              <span className='font-medium'>Just For You</span>
            </div>

            <div>
              <Link
                to='/view-all'
                className='border border-slate-400 px-9 py-3 rounded-md font-medium text-center transition-colors duration-300'
              >
                See All
              </Link>
            </div>
          </div>
          <div></div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Wishlist
