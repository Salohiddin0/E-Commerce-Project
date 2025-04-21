import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '..//../redux/slices/productSlice' // Redux slice dan import

import ProductCard from '../product/ProductCard' // Import pathga E'TIBOR BER!!!
import { Link } from 'react-router-dom'
import Showcase from '../Showcase/Showcase'

const BestSelling = ({ handleAddToCart, handleAddToWishlist }) => {
  const dispatch = useDispatch()

  // Redux state'dan products va loading holatini olish
  const { items, loading, error } = useSelector(state => state.products)

  // fetchProducts() redux thunk'ini componentda chaqirish
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts())
    }
  }, [dispatch, items.length])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='text-center'>
          <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-red-500 mb-4'></div>
          <p>Loading products...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return <div className='text-center text-red-500'>Error: {error}</div>
  }

  return (
    <div className='max-w-screen-xl mx-auto px-4'>
      {/* Header */}
      <div className='bg-red-500 text-white py-2 px-6 mb-5 mt-[70px] rounded-r-full inline-block'>
        <span className='font-medium'>This Month</span>
      </div>

      <div className='flex justify-between flex-col md:flex-row gap-4 md:gap-12'>
        <h2 className='text-3xl font-bold mb-2 md:mb-4'>
          Best Selling Products
        </h2>

        <Link
          to='/view-all'
          className='bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium text-center transition-colors duration-300 mb-4 md:mb-0'
        >
          View All
        </Link>
      </div>

      {/* Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-[60px] mb-[60px] md:mb-[140px]'>
        {items && items.length > 0 ? (
          items
            .slice(0, 4)
            .map(product => (
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                handleAddToWishlist={handleAddToWishlist}
              />
            ))
        ) : (
          <p className='text-center col-span-full'>No products available.</p>
        )}
      </div>

      <Showcase />
    </div>
  )
}

export default BestSelling
