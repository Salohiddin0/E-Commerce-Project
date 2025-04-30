const CarouselItem = ({ item, index, onDelete }) => {
  return (
    <div className='relative'>
      <button
        onClick={() => onDelete(index)}
        className='absolute top-2 right-2 bg-white text-white rounded-full p-1 z-10'
        title='Delete'
      >
        ❌
      </button>
      <a
        href={item.link}
        target='_blank'
        rel='noopener noreferrer'
        className='block'
      >
        <div
          className={`p-4 rounded-lg shadow transition-transform transform ${
            item.isDeleted ? 'scale-75 opacity-0' : 'hover:scale-[1.02]'
          }`}
          style={{
            backgroundColor: item.color,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className='w-full h-[150px] object-cover rounded'
          />
          <h3 className='text-lg font-semibold mt-2 text-white'>
            {item.title}
          </h3>
        </div>
      </a>
    </div>
  )
}

export default CarouselItem
