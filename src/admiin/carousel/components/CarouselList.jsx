import CarouselItem from './CarouselItem'

const CarouselList = ({ carouselItems, setCarouselItems }) => {
  const handleDelete = index => {
    const updatedItems = [...carouselItems]
    updatedItems[index].isDeleted = true
    setCarouselItems(updatedItems)

    setTimeout(() => {
      setCarouselItems(prev => prev.filter((_, i) => i !== index))
    }, 300)
  }

  return (
    <div className='grid grid-cols-3 gap-6 mt-6'>
      {carouselItems.map((item, index) => (
        <CarouselItem
          key={index}
          item={item}
          index={index}
          onDelete={handleDelete}
        />
      ))}
    </div>
  )
}

export default CarouselList
