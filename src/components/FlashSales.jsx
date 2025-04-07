'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const FlashSales = () => {
  // State for products
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  })

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://fakestoreapi.com/products')

        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }

        const data = await response.json()

        // Add random discount to each product
        const productsWithDiscount = data.slice(0, 5).map(product => {
          const discountPercentage = Math.floor(Math.random() * 20) + 20 // Random discount between 20-40%
          const originalPrice = Math.round(product.price)
          const discountedPrice = Math.round(
            (originalPrice * (100 - discountPercentage)) / 100
          )

          return {
            ...product,
            originalPrice: originalPrice,
            currentPrice: discountedPrice,
            discount: discountPercentage,
            reviews: Math.floor(Math.random() * 50) + 50 // Random reviews between 50-100
          }
        })

        setProducts(productsWithDiscount)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                // Timer ended
                clearInterval(timer)
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Format time with leading zeros
  const formatTime = time => {
    return time < 10 ? `0${time}` : time
  }

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-8 flex justify-center items-center h-64'>
        <div className='text-center'>
          <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500 mb-4'></div>
          <p>Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
          <p>Error: {error}</p>
          <p>Please try again later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className='container mx-auto px-4 py-8 '>
      <div className='max-w-7xl mx-auto'>
        {/* Header section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8'>
          <div className='flex flex-col'>
            {/* Today's label */}
            <div className='relative mb-4'>
              <div className='bg-red-500 text-white py-2 px-6 rounded-r-full inline-block'>
                <Link to='/' className='font-medium'>
                  Today's
                </Link>
              </div>
            </div>

            <h2 className='text-3xl font-bold mb-4'>Flash Sales</h2>
          </div>

          {/* Countdown timer */}
          <div className='flex mt-4 md:mt-0'>
            <div className='flex flex-col items-center mr-4'>
              <span className='text-2xl font-bold'>
                {formatTime(timeLeft.days)}
              </span>
              <span className='text-xs text-gray-500'>Days</span>
            </div>
            <span className='text-2xl font-bold mx-1'>:</span>
            <div className='flex flex-col items-center mr-4'>
              <span className='text-2xl font-bold'>
                {formatTime(timeLeft.hours)}
              </span>
              <span className='text-xs text-gray-500'>Hours</span>
            </div>
            <span className='text-2xl font-bold mx-1'>:</span>
            <div className='flex flex-col items-center mr-4'>
              <span className='text-2xl font-bold'>
                {formatTime(timeLeft.minutes)}
              </span>
              <span className='text-xs text-gray-500'>Minutes</span>
            </div>
            <span className='text-2xl font-bold mx-1'>:</span>
            <div className='flex flex-col items-center'>
              <span className='text-2xl font-bold'>
                {formatTime(timeLeft.seconds)}
              </span>
              <span className='text-xs text-gray-500'>Seconds</span>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className='hidden md:flex items-center space-x-2 ml-4'>
            <button className='w-10 h-10 rounded-full border bg-gray-50 flex items-center justify-center hover:bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <button className='w-10 h-10 rounded-full border bg-gray-50 flex items-center justify-center hover:bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Products grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
          {products.map((product, index) => (
            <div
              key={product.id}
              className='bg-gray-50 rounded-lg relative group overflow-hidden'
            >
              {/* Discount badge */}
              <div className='absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-sm z-10'>
                -{product.discount}%
              </div>

              {/* Product image container */}
              <div className='relative h-48 flex justify-center p-4'>
                {/* Wishlist and quick view buttons */}
                <div className='absolute top-4 right-4 flex flex-col space-y-2 z-20'>
                  {/* Heart icon */}
                  <Link
                    to={`/product/${product.id}`}
                    className='bg-[#ffffff] rounded-full p-[5px]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                      />
                    </svg>
                  </Link>

                  {/* Eye icon */}
                  <Link
                    to={`/product/${product.id}`}
                    className='bg-[#ffffff] rounded-full p-[5px]'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={1.5}
                        d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                      />
                    </svg>
                  </Link>
                </div>

                {/* Product image */}
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.title}
                  className='h-full object-contain z-0'
                />

                {/* Add to cart button (hoverda chiqadi) */}
                <button
                  className='absolute bottom-0 left-0 w-full bg-black text-white py-3 font-medium 
                  opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 rounded-md'
                >
                  Add To Cart
                </button>
              </div>

              {/* Product details */}
              <div className='p-4 bg-[#ffffff]'>
                <h3 className='font-medium text-base mb-1'>
                  {product.title.length > 20
                    ? product.title.substring(0, 20) + '...'
                    : product.title}
                </h3>
                <div className='text-red-500 font-semibold'>
                  ${product.currentPrice}
                </div>

                {/* Rating */}
                <div className='flex items-center mt-1'>
                  <div className='flex'>
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg
                        key={star}
                        className='w-4 h-4 text-yellow-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>
                  <span className='text-gray-500 text-xs ml-1'>
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all products button */}
        <div className='flex justify-center mt-10'>
          <button className='bg-red-500 hover:bg-red-600 mb-[60px] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300'>
            View All Products
          </button>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default FlashSales
