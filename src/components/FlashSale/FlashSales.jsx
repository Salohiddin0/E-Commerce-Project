'use client'

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { fetchProducts, updateCountdown } from '../../redux/slices/productSlice'
import { addToCart } from '../../redux/slices/cartSlice'
import { addToWishlist } from '../../redux/slices/wishlistSlice'
import ProductCard from '../product/ProductCard'

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
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header section */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-[40px] mt-[35px] md:mt-[90px]'>
          <div className='flex flex-col'>
            {/* Today's label */}
            <div className='relative mb-4'>
              <div className='bg-red-500 text-white py-2 px-6 rounded-r-full inline-block'>
                <Link to='/' className='font-medium'>
                  Today's
                </Link>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-4 md:gap-[110px]'>
              <h2 className='text-3xl font-bold mb-2 md:mb-4'>Flash Sales</h2>

              <div className='flex mt-2 md:mt-0'>
                <div className='flex flex-col items-center mr-2 md:mr-4'>
                  <span className='text-xl md:text-2xl font-bold'>
                    {formatTime(timeLeft.days)}
                  </span>
                  <span className='text-xs text-gray-500'>Days</span>
                </div>
                <span className='text-xl md:text-2xl font-bold mx-1'>:</span>

                <div className='flex flex-col items-center mr-2 md:mr-4'>
                  <span className='text-xl md:text-2xl font-bold'>
                    {formatTime(timeLeft.hours)}
                  </span>
                  <span className='text-xs text-gray-500'>Hours</span>
                </div>
                <span className='text-xl md:text-2xl font-bold mx-1'>:</span>

                <div className='flex flex-col items-center mr-2 md:mr-4'>
                  <span className='text-xl md:text-2xl font-bold'>
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span className='text-xs text-gray-500'>Minutes</span>
                </div>
                <span className='text-xl md:text-2xl font-bold mx-1'>:</span>

                <div className='flex flex-col items-center'>
                  <span className='text-xl md:text-2xl font-bold'>
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
                <ProductCard
                  product={product}
                  handleAddToWishlist={handleAddToWishlist}
                  handleAddToCart={handleAddToCart}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View all products button */}
        <div className='flex justify-center mt-10'>
          <Link to='/view-all'>
            <button className='bg-red-500 hover:bg-red-600 mb-[60px] text-white px-8 py-3 rounded-md font-medium transition-colors duration-300'>
              View All Products
            </button>
          </Link>
        </div>

        <hr />
      </div>
    </div>
  )
}

export default FlashSales
