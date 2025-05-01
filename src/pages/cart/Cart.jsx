import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice'
import Navbar from './../../components/Navbar'
import { Link } from 'react-router-dom'
import UserDropdown from './../UserDropdown/UserDropdown'

const Cart = () => {
  const dispatch = useDispatch()

  // Cart va Wishlist state'larini olish
  const cartItems = useSelector(state => state.cart.items)
  const wishlistItems = useSelector(state => state.wishlist.items)

  const cartCount = cartItems.length
  const wishlistCount = wishlistItems.length

  // Miqdorni o‘zgartirish funksiyasi
  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }))
  }

  // Mahsulotni o‘chirish funksiyasi
  const handleRemove = id => {
    dispatch(removeFromCart(id))
  }

  // Umumiy narx (subtotal) hisoblash
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0
  )

  return (
    <>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <header className='flex items-center justify-between border-b py-4 px-6 relative z-20'>
          <Link to='/' className='hidden md:block text-2xl font-bold'>
            Exclusive
          </Link>

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

            <button className='relative'>
              <Link to='/wishlist'>
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
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {wishlistCount}
                </span>
              )}
            </button>

            <button className='relative'>
              <Link to='/cart'>
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
              {cartCount > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                  {cartCount}
                </span>
              )}
            </button>

            <UserDropdown />
          </div>
        </header>

        <div className='p-8'>
          <h2 className='text-xl font-semibold mb-6'>Cart Items</h2>

          {cartItems.length === 0 ? (
            <p className='text-gray-600'>Your cart is empty 🛒</p>
          ) : (
            <div className='grid gap-4'>
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className='flex items-center border p-4 justify-between'
                >
                  <div className='flex items-center gap-4'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-20 h-20 object-contain'
                    />
                    <div>
                      <h4 className='font-semibold'>{item.title}</h4>
                      <p>${item.currentPrice}</p>
                    </div>
                  </div>
                  <select
                    value={item.quantity}
                    onChange={e =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className='border px-2 py-1'
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>
                        {n < 10 ? `0${n}` : n}
                      </option>
                    ))}
                  </select>
                  <p className='w-24 text-center'>
                    ${item.currentPrice * item.quantity}
                  </p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className='text-red-600 text-xl'
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Subtotal Summary */}
          {cartItems.length > 0 && (
            <div className='text-right mt-6 font-semibold text-lg'>
              Subtotal: ${subtotal.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
