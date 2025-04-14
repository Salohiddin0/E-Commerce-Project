import React, { useEffect } from 'react'
import ProductCard from '../product/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/slices/productSlice'
import { ChevronLeft, ChevronRight } from 'lucide-react' // Agar lucide-react o'rnatilmagan bo'lsa, o'rnatish kerak

const OurProducts = ({ handleAddToCart, handleAddToWishlist }) => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(state => state.products)

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
        <span className='font-medium'>Our Products</span>
      </div>

      <div className='flex items-center justify-between flex-col md:flex-row gap-4 md:gap-12'>
        <h2 className='text-3xl font-bold mb-2 md:mb-4'>
          Explore Our Products
        </h2>

        {/* Navigation arrows */}
        <div className='flex items-center gap-2'>
          <button className='hidden md:block w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors'>
            <ChevronLeft className='w-5 h-5' />
          </button>
          <button className='hidden md:block w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors'>
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-[60px] mb-[60px] md:mb-[100px]'>
        {items && items.length > 0 ? (
          items
            .slice(0, 8)
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

      {/* View All Products Button */}
      <div className='flex justify-center mb-[60px]'>
        <button className='bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded transition-colors'>
          View All Products
        </button>
      </div>
    </div>
  )
}

export default OurProducts
