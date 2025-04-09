'use client'

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchProducts, updateCountdown } from '../redux/slices/productSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { addToWishlist } from '../redux/slices/wishlistSlice'

const FlashSales = () => {
  const dispatch = useAppDispatch()
  const { flashSaleItems, loading, error, timeLeft } = useAppSelector(
    state => state.products
  )

  // Fetch products from API
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(updateCountdown())
    }, 1000)

    return () => clearInterval(timer)
  }, [dispatch])

  // Format time with leading zeros
  const formatTime = time => {
    return time < 10 ? `0${time}` : time
  }

  // Swiper reference
  const swiperRef = useRef(null)

  // Handle add to cart
  const handleAddToCart = product => {
    dispatch(addToCart(product))
  }

  // Handle add to wishlist
  const handleAddToWishlist = product => {
    dispatch(addToWishlist(product))
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
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-[40px] mt-[110px]'>
          <div className='flex flex-col'>
            {/* Today's label */}
            <div className='relative mb-4'>
              <div className='bg-red-500 text-white py-2 px-6 rounded-r-full inline-block'>
                <Link to='/' className='font-medium'>
                  Today's
                </Link>
              </div>
            </div>
            <div className='flex items-center gap-[110px]'>
              <h2 className='text-3xl font-bold mb-4'>Flash Sales</h2>

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
            </div>
          </div>

          {/* Navigation arrows */}
          <div className='hidden md:flex items-center space-x-2 ml-4 mt-7'>
            <button
              onClick={() => swiperRef.current.swiper.slidePrev()}
              className='w-12 h-12 rounded-full border bg-gray-50 flex items-center justify-center hover:bg-gray-100'
            >
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
            <button
              onClick={() => swiperRef.current.swiper.slideNext()}
              className='w-12 h-12 rounded-full border bg-gray-50 flex items-center justify-center hover:bg-gray-100'
            >
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

        {/* Products grid with Swiper */}
        <div className='relative'>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }
            }}
            className='mySwiper'
          >
            {flashSaleItems.map(product => (
              <SwiperSlide key={product.id}>
                <div className='group relative border rounded-sm overflow-hidden'>
                  <div className='relative group/card'>
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={product.title}
                      className='w-full h-48 object-contain bg-[#f5f5f5] p-4'
                    />

                    {/* Discount */}
                    <span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded'>
                      -{product.discount}%
                    </span>

                    {/* Icons */}
                    <div className='absolute top-2 right-2 flex flex-col gap-2'>
                      <Link to={`/product/${product.id}`}
                        onClick={() => handleAddToWishlist(product)}
                        className="bg-white p-2 rounded-full shadow
                        hover:bg-gray-100" >
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z'
                            stroke='black'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </Link>
                      <Link
                        to={`/product/${product.id}`}
                        className='bg-white p-2 rounded-full shadow hover:bg-gray-100'
                      >
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z'
                            stroke='black'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                            stroke='black'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Add to Cart: only appears on hover */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className='absolute inset-x-0 bottom-0 bg-black text-white py-2 text-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-300'
                    >
                      Add To Cart
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className='bg-white p-4'>
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
                    <div className='flex items-center gap-1 mt-1 text-yellow-500'>
                      {[...Array(5)].map((_, index) => (
                        <span key={index}>⭐</span>
                      ))}
                      <span className='text-gray-500 text-xs ml-1'>
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
