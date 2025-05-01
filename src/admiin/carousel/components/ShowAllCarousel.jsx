import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

/* assets */
import HeroCarousel from '../../../assets/hero_endframe__cvklg0xk3w6e_large 2.png'
import AppleCarousel from '../../../assets/1200px-Apple_gray_logo 1.png'

const ShowAllCarousel = () => {
  const [carousels, setCarousels] = useState([])

  useEffect(() => {
    const dummyData = Array.from({ length: 10 }, (_, i) => ({
      id: `${i + 1}`,
      title: `Carousel Item ${i + 1}`,
      logo: '/placeholder.svg',
      image: `https://via.placeholder.com/300x200?text=Carousel+${i + 1}`
    }))
    setCarousels(dummyData)
  }, [])

  const handleDelete = id => {
    setCarousels(prev => prev.filter(item => item.id !== id))
  }

  const handleDragEnd = result => {
    if (!result.destination) return
    const items = Array.from(carousels)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setCarousels(items)
  }

  return (
    <div className='flex h-screen'>
      <div className='flex-1 p-5 overflow-auto'>
        <div className='bg-white p-6 rounded-lg shadow-lg mb-10 mt-4'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold mb-4'>Carousel All</h2>
            <p className='font-bold text-xl'>Count: ({carousels.length})</p>
          </div>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId='carousel-list'>
              {provided => (
                <div
                  className='grid grid-cols-1 gap-6'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {carousels.slice(0, 10).map((carousel, index) => (
                    <Draggable
                      key={carousel.id}
                      draggableId={carousel.id}
                      index={index}
                    >
                      {provided => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className='flex-1 relative'>
                            <div className='relative bg-black text-white m-6 lg:m-[45px] rounded-xl overflow-hidden'>
                              <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='p-12 md:p-16 max-w-md'>
                                  <div className='flex items-center mb-[20px]'>
                                    <div className='mr-[24px]'>
                                      <img
                                        src={
                                          AppleCarousel || '/placeholder.svg'
                                        }
                                        alt='Apple Logo'
                                        className='w-10 h-10'
                                      />
                                    </div>
                                    <span>iPhone 14 Series</span>
                                  </div>
                                  <p className='text-4xl md:text-5xl font-Inter font-semibold leading-tight md:leading-snug'>
                                    <span>Up to 10%</span> <br />
                                    off Voucher
                                  </p>
                                  <div className='flex items-center mt-4'>
                                    <button className='inline-flex items-center border-b-2 border-white pb-1 font-medium text-white hover:opacity-80 transition duration-200'>
                                      Shop Now
                                    </button>
                                    <span className='ml-2'>
                                      <svg
                                        width='19'
                                        height='16'
                                        viewBox='0 0 19 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                      >
                                        <path
                                          d='M1.5 8H18M18 8L11 1M18 8L11 15'
                                          stroke='#FAFAFA'
                                          strokeWidth='1.5'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>

                                <div className='flex justify-center items-center mt-6 md:mt-0'>
                                  <img
                                    src={HeroCarousel || '/placeholder.svg'}
                                    alt='iPhone 14'
                                    className='w-full max-w-xs md:max-w-none'
                                  />
                                </div>
                              </div>

                              <button
                                onClick={() => handleDelete(carousel.id)}
                                className='absolute top-2 right-2 bg-white text-white px-2 py-2 rounded-full hover:bg-slate-200 transition-all duration-300 ease-in-out transform hover:scale-110'
                              >
                                <svg
                                  width='24'
                                  height='24'
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M20 5.57143H5.33333L6.66667 21H17.3333L18.6667 5.57143H4M12 9.42857V17.1429M15.3333 9.42857L14.6667 17.1429M8.66667 9.42857L9.33333 17.1429M9.33333 5.57143L10 3H14L14.6667 5.57143'
                                    stroke='black'
                                    strokeWidth='1.56'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
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
        </div>
      </div>
    </div>
  )
}

export default ShowAllCarousel
