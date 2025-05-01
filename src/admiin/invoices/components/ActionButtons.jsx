import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../redux/slices/productSlice'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const ProductList = () => {
  const dispatch = useDispatch()

  // Redux store'dan mahsulotlar va loading holatlarini olish
  const { items, loading, error } = useSelector(state => state.products)

  const [discounts, setDiscounts] = useState(Array(items.length).fill(0))

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleDiscountChange = (e, index) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value)) {
      const newDiscounts = [...discounts]
      newDiscounts[index] = value
      setDiscounts(newDiscounts)
    }
  }

  // Chegirmali narxni hisoblash
  const calculateDiscount = (price, index) => {
    const discount = discounts[index] || 0
    return (price - (price * discount) / 100).toFixed(2)
  }

  // Agar loading holati bo'lsa, loading xabarini ko'rsatish
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

  // Agar xatolik bo'lsa, xato xabarini ko'rsatish
  if (error) {
    return <p>{error}</p>
  }

  // Drag-and-drop qachon tugaydi
  const onDragEnd = result => {
    const { destination, source } = result

    // Agar maqsad mavjud bo'lmasa, hech narsa qilmang
    if (!destination) return

    // Agar boshlang'ich va yakuniy joy bir xil bo'lsa, hech narsa qilmang
    if (destination.index === source.index) return

    // Mahsulotlarni yangi tartibda qayta o'rnating
    const reorderedItems = Array.from(items)
    const [removed] = reorderedItems.splice(source.index, 1)
    reorderedItems.splice(destination.index, 0, removed)

    // Mahsulotlarni qayta o'rnatish
    // Agar siz redux-ni ishlatayotgan bo'lsangiz, bu yerda reduxga yangilash kodi qo'shilishi mumkin
    // misol uchun: dispatch(setProducts(reorderedItems))
  }

  return (
    <div className='container mx-auto p-4'>
      <p className='text-2xl font-bold mt-5'>All Products</p>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='products' direction='vertical'>
          {provided => (
            <div
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* Mahsulotlar ro'yxatini ko'rsatish */}
              {items.slice(0, 5).map((product, index) => (
                <Draggable
                  key={product.id}
                  draggableId={product.id.toString()}
                  index={index}
                >
                  {provided => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className='bg-white p-4 border rounded-lg shadow-lg flex flex-col justify-between'
                    >
                      <div className='flex justify-between'>
                        <div className='bg-white p-2 rounded-full w-10 h-10 flex justify-center items-center ms-auto'>
                          <button>
                            <svg
                              width='34'
                              height='34'
                              viewBox='0 0 34 34'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <circle cx='17' cy='17' r='17' fill='white' />
                              <path
                                d='M25 10.5714H10.3333L11.6667 26H22.3333L23.6667 10.5714H9M17 14.4286V22.1429M20.3333 14.4286L19.6667 22.1429M13.6667 14.4286L14.3333 22.1429M14.3333 10.5714L15 8H19L19.6667 10.5714'
                                stroke='black'
                                stroke-width='1.56'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <img
                        src={product.image}
                        alt={product.title}
                        className='w-full h-48 object-contain mb-4 rounded-lg'
                      />
                      <div className='flex flex-col items-center'>
                        <div className='text-center text-xl font-semibold mb-2'>
                          {product.title}
                        </div>
                        <div className='text-lg font-bold text-gray-900'>
                          <p>
                            Amount: ${calculateDiscount(product.price, index)}
                          </p>
                          <p className='line-through text-gray-400 mt-1'>
                            Original Price: ${product.price}
                          </p>
                        </div>
                        <div className='mt-2 text-sm text-gray-600'>
                          <p>Discount: {product.discount}%</p>
                        </div>
                        <div className='mt-3 w-full'>
                          <input
                            type='number'
                            placeholder='Enter discount (%)'
                            className='w-full p-2 border rounded-lg mb-3 text-center'
                            onChange={e => handleDiscountChange(e, index)}
                            value={discounts[index]}
                          />
                          <button
                            onClick={() =>
                              alert('Product added with discount!')
                            }
                            className='w-full bg-black text-white py-2 px-4 rounded-lg text-lg mt-2 hover:bg-gray-800'
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Delete tugmasi faqat bitta umumiy tugma */}
      <div className='flex justify-end mt-4'>
        <button className='bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700'>
          Delete Selected
        </button>
      </div>
    </div>
  )
}

export default ProductList
