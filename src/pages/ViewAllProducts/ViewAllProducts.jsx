import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/product/ProductCard'
import Navbar from './../../components/Navbar'
import UserDropdown from './../UserDropdown/UserDropdown'
import { addToCart } from '../../redux/slices/cartSlice' // Redux action

// Komponent: Barcha mahsulotlarni ko‘rsatadi va cartga qo‘shish imkonini beradi
const ViewAllProducts = () => {
  const dispatch = useDispatch() // Redux dispatch funksiyasi

  // Redux state'dan mahsulotlar, cart va wishlist elementlarini olish
  const products = useSelector(state => state.products.items)
  const cartItems = useSelector(state => state.cart.items)
  const wishlistItems = useSelector(state => state.wishlist.items)

  // cart va wishlist elementlar soni
  const cartCount = cartItems.length
  const wishlistCount = wishlistItems.length

  // Mahsulotni cartga qo‘shish funksiyasi
  const handleAddToCart = product => {
    dispatch(addToCart(product)) // Redux orqali cart slice'ga mahsulotni qo‘shish
  }

  return (
    <>
      {/* Sayt navigatsiyasi */}
      <Navbar />

      <div className='max-w-screen-xl mx-auto p-4'>
        {/* Yuqori header panel */}
        <header className='flex items-center justify-between border-b py-4 px-6 relative z-20'>
          {/* Logo */}
          <Link to='/' className='hidden md:block text-2xl font-bold'>
            Exclusive
          </Link>

          {/* Navigatsiya havolalari */}
          <nav className='hidden md:flex space-x-8'>
            {['/', '/contact', '/about', '/sign-up', '/admin'].map(
              (path, i) => {
                const labels = ['Home', 'Contact', 'About', 'Sign Up', 'Admin']
                return (
                  <Link
                    key={path}
                    to={path}
                    className='font-medium relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-black after:scale-0 after:transition-transform after:duration-200 hover:after:scale-100'
                  >
                    {labels[i]}
                  </Link>
                )
              }
            )}
          </nav>

          {/* Search va ikonkalar (wishlist, cart, user) */}
          <div className='flex items-center space-x-4'>
            {/* Qidiruv input */}
            <div className='relative'>
              <input
                type='text'
                placeholder='What are you looking for?'
                className='bg-gray-100 rounded-md py-2 px-4 pr-10 w-48 md:w-64'
              />
            </div>

            {/* Wishlist tugmasi va hisoblagich */}
            <button className='relative'>
              <Link to='/wishlist'>
                <svg width='22' height='20' viewBox='0 0 22 20' fill='none'>
                  <path
                    d='M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z'
                    stroke='black'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
              {/* Wishlistdagi mahsulotlar soni ko‘rsatiladi */}
              {wishlistCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart tugmasi va hisoblagich */}
            <button className='relative'>
              <Link to='/cart'>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none'>
                  <path
                    d='M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z'
                    stroke='black'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z'
                    stroke='black'
                    strokeWidth='1.5'
                  />
                  <path d='M3 5H7L10 22H26' stroke='black' strokeWidth='1.5' />
                  <path
                    d='M10 16.6667H25.59L27.88 7.26479H8'
                    stroke='black'
                    strokeWidth='1.5'
                  />
                </svg>
              </Link>
              {/* Cartdagi mahsulotlar soni ko‘rsatiladi */}
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Foydalanuvchi dropdown menyusi */}
            <UserDropdown />
          </div>
        </header>

        {/* Sahifa sarlavhasi */}
        <h1 className='text-2xl font-bold mb-7 mt-10'>All Products</h1>

        {/* Mahsulot kartalari (ProductCard) */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart} // Har bir kartaga cartga qo‘shish funksiyasini yuborish
            />
          ))}
        </div>

        {/* Orqaga qaytish havolasi */}
        <Link to='/' className='block mt-6 text-blue-500 hover:underline'>
          Back
        </Link>
      </div>
    </>
  )
}

export default ViewAllProducts
