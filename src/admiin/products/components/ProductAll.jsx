import React, { useState } from 'react'

const ProductAll = () => {
  const [count, setCount] = useState(6)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const newProduct = {
      title,
      price,
      color,
      description
    }

    console.log('Yangi mahsulot:', newProduct)
    setCount(prev => prev + 1)

    // Formani tozalash
    setTitle('')
    setPrice('')
    setColor('')
    setDescription('')
  }

  return (
    <div className='flex h-screen'>
      {/* Main Content */}
      <div className='flex-1 p-5'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-3xl font-semibold'>Products</h2>
            <p className='font-bold text-xl'>Count: ({count})</p>
          </div>

          {/* Add Product Form */}
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label className='block font-medium mb-1'>Title</label>
              <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                className='w-full border border-gray-300 rounded px-3 py-2'
                placeholder='Enter product title'
                required
              />
            </div>

            <div>
              <label className='block font-medium mb-1'>Price</label>
              <input
                type='number'
                value={price}
                onChange={e => setPrice(e.target.value)}
                className='w-full border border-gray-300 rounded px-3 py-2'
                placeholder='Enter product price'
                required
              />
            </div>

            <div>
              <label className='block font-medium mb-1'>Color</label>
              <input
                type='color'
                value={color}
                onChange={e => setColor(e.target.value)}
                className='w-full h-10 p-1 rounded'
              />
            </div>

            <div>
              <label className='block font-medium mb-1'>Description</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='w-full border border-gray-300 rounded px-3 py-2'
                placeholder='Write product description'
                rows={4}
                required
              />
            </div>

            <button
              type='submit'
              className='bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600'
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductAll
