import React from 'react'
import Sidebar from './Sidebar'

const ShowAllCarousel = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />
      <div className='flex-1 p-5'>
        {/* Bu yerga asosiy content qo'yiladi */}

        <h1 className='text-xl font-semibold'>All Carousel Items</h1>
      </div>
    </div>
  )
}

export default ShowAllCarousel
