import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Heart, Minus, Plus, ShoppingCart, Truck } from 'lucide-react'
import {
  fetchProducts,
  fetchProductById,
  addToCart
} from '../../redux/slices/productSlice'
import Navbar from '../Navbar'
import UserDropdown from './../../pages/UserDropdown/UserDropdown'
import ProductItemImage from './item/ProductItemImage'
import ProductCard from './ProductCard'
import Footer from './../Footer'

const ProductDetail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { currentProduct, relatedProducts, items, loading, error } =
    useSelector(state => state.products)

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // const handleWishlistClick = () => {
  //   dispatch(addToWishlist(product))
  // }

  useEffect(() => {
    // If we don't have items yet, fetch all products for related items
    if (items.length === 0) {
      dispatch(fetchProducts())
    }

    // Fetch the current product
    if (id) {
      dispatch(fetchProductById(id))
    }
  }, [dispatch, id, items.length])

  const handleQuantityChange = value => {
    if (value >= 1) {
      setQuantity(value)
    }
  }

  const wishlistCount = useSelector(state => state.wishlist.items.length)
  const cartItems = useSelector(state => state.cart.items)

  const handleAddToCart = () => {
    if (currentProduct) {
      dispatch(addToCart({ ...currentProduct, quantity }))
      // You could add a toast notification here
      alert(`Added ${quantity} ${currentProduct.title} to cart!`)
    }
  }

  if (loading) {
    return (
      <div className='container mx-auto px-4 py-8 mt-44 flex justify-center items-center h-64'>
        <div className='text-center'>
          <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500 mb-4'></div>
          <p>Loading products...</p>
        </div>
      </div>
    )
  }
  if (error) {
    return (
      <div className='container mx-auto px-4 py-8 flex justify-center items-center min-h-[50vh]'>
        <div className='text-xl text-red-500'>Error: {error}</div>
      </div>
    )
  }

  if (!currentProduct) {
    return (
      <div className='container mx-auto px-4 py-8 flex justify-center items-center min-h-[50vh]'>
        <div className='text-xl'>Product not found</div>
      </div>
    )
  }

  // Create an array of images for thumbnails (Fake Store API only has one image per product)
  // In a real app, you'd have multiple images
  const productImages = [
    currentProduct.image,
    currentProduct.image,
    currentProduct.image,
    currentProduct.image
  ]

  return (
    <div>
      <Navbar />
      <div className='max-w-screen-xl mx-auto px-4'>
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
              {wishlistCount > 0 && (
                <span className='absolute top-[15px] right-[110px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {wishlistCount}
                </span>
              )}
            </button>
            <button className='relative'>
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

              {cartItems.length > 0 && (
                <span className='absolute bottom-[15px] right-[-5px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {cartItems.length}
                </span>
              )}
            </button>
            <UserDropdown />
          </div>
        </header>

        {/* Breadcrumb */}
        <div className='flex items-center gap-2 text-sm text-gray-500 mb-[50px] md:mb-[80px] mt-[40px] md:mt-[80px]'>
          <a href='/' className='hover:text-gray-700'>
            Account
          </a>
          <span>/</span>
          <a
            href={`/category/${currentProduct.category}`}
            className='hover:text-gray-700'
          >
            {currentProduct.category}
          </a>
          <span>/</span>
          <span className='text-gray-900'>{currentProduct.title}</span>
        </div>

        {/* Product Detail Section */}
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Product Images */}
          <div className='flex gap-4'>
            {/* Thumbnails */}
            <div className='flex flex-col gap-4'>
              {productImages.map((image, index) => (
                <ProductItemImage
                  index={index}
                  selectedImageIndex={selectedImage}
                  currentProduct={currentProduct}
                />
              ))}
            </div>

            {/* Main Image */}
            <div>
              <div className='flex-1 bg-gray-100 p-4 make-gray rounded-sm'>
                <img
                  src={productImages[selectedImage] || '/placeholder.svg'}
                  alt={currentProduct.title}
                  className='w-[500px] h-[400px] object-contain'
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className='text-2xl font-bold mb-2'>{currentProduct.title}</h1>

            {/* Ratings */}
            <div className='flex items-center gap-1 mb-2'>
              <div className='flex text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.round(currentProduct.rating.rate)
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
                ({currentProduct.reviews} Reviews)
              </span>
              <span className='text-sm text-green-500 ml-4'>In Stock</span>
            </div>

            {/* Price */}
            <div className='flex items-center gap-2 mb-6'>
              <span className='text-2xl font-bold'>
                ${currentProduct.currentPrice}
              </span>
              <span className='text-gray-400 line-through'>
                ${currentProduct.originalPrice}
              </span>
              <span className='bg-red-100 text-red-700 text-xs px-2 py-1 rounded'>
                {currentProduct.discount}% OFF
              </span>
            </div>

            {/* Description */}
            <p className='text-gray-600 mb-6'>{currentProduct.description}</p>

            <hr className='my-6' />

            {/* Colors - Fake Store API doesn't have colors, so we'll add some dummy ones */}
            <div className='mb-6'>
              <h3 className='font-medium mb-2'>Colours:</h3>
              <div className='flex gap-2'>
                <button
                  className='w-6 h-6 rounded-full bg-white ring-2 ring-offset-2 ring-gray-400'
                  aria-label='Select white color'
                />
                <button
                  className='w-6 h-6 rounded-full bg-red-500'
                  aria-label='Select red color'
                />
              </div>
            </div>

            {/* Sizes - Fake Store API doesn't have sizes, so we'll add some dummy ones */}
            <div className='mb-6'>
              <h3 className='font-medium mb-2'>Size:</h3>
              <div className='flex gap-2'>
                {['XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                  <button
                    key={size}
                    className={`w-8 h-8 flex items-center justify-center border ${
                      index === 2
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Buy */}
            <div className='flex items-center gap-4 mb-6'>
              <div className='flex items-center border border-gray-300'>
                <button
                  className='px-3 py-2 border-r border-gray-300'
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  <Minus className='w-4 h-4' />
                </button>
                <span className='px-4 py-2'>{quantity}</span>
                <button
                  className='px-3 py-2 border-l border-gray-300'
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  <Plus className='w-4 h-4' />
                </button>
              </div>

              <button
                className='bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded'
                onClick={handleAddToCart}
              >
                Buy Now
              </button>

              <button
                // onClick={handleWishlistClick}
                className='border border-gray-300 p-2 rounded'
              >
                <Heart className='w-5 h-5' />
              </button>
            </div>

            {/* Delivery Info */}
            <div className='border border-gray-200 rounded-md p-4 mb-6'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='bg-gray-100 p-2 rounded-md'>
                  <Truck className='w-5 h-5' />
                </div>
                <div>
                  <h4 className='font-medium'>Free Delivery</h4>
                  <p className='text-sm text-gray-500'>
                    Enter your postal code for delivery availability
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='bg-gray-100 p-2 rounded-md'>
                  <ShoppingCart className='w-5 h-5' />
                </div>
                <div>
                  <h4 className='font-medium'>Return Delivery</h4>
                  <p className='text-sm text-gray-500'>
                    Free 30 days delivery returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div>
            <div className='bg-red-500 text-white py-2 px-6 rounded-r-full inline-block mb-[60px]'>
              <Link to='/' className='font-medium'>
                Related Items
              </Link>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-[80px] md:mb-[140px]'>
              {relatedProducts.slice(0, 8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail
