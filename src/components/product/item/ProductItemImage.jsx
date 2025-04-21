import React from 'react'

const ProductItemImage = ({ index, selectedImageIndex, currentProduct }) => {
  return (
    <div
      key={index}
      className={`w-24 h-24 make-gray rounded-sm ${
        selectedImageIndex === index ? 'border-red-500' : 'border-gray-200'
      } cursor-pointer`}
      onClick={() => setSelectedImage(index)}
    >
      <img
        src={currentProduct.image || '/placeholder.svg'}
        alt={`${currentProduct.title} thumbnail ${index + 1}`}
        className='w-full h-full object-contain p-2'
      />
    </div>
  )
}

export default ProductItemImage
