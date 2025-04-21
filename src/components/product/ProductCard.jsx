import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product, handleAddToWishlist, handleAddToCart }) => {
  return (
    <div className='group relative border rounded-sm overflow-hidden'>
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

        {/* Discount */}
        <span className='absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded'>
          -{product.discount}%
        </span>

        {/* Icons */}
        <div className='absolute top-2 right-2 flex flex-col gap-2'>
          <Link
            onClick={() => handleAddToWishlist(product)}
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
        <h3 className='text-sm font-semibold mb-2'>{product.title}</h3>
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
  )
}

export default ProductCard
