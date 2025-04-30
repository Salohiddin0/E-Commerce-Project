import { useState } from 'react'
import CarouselForm from './components/CarouselForm'
import CarouselList from './components/CarouselList'

const Carousel = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [files, setFiles] = useState([])
  const [carouselItems, setCarouselItems] = useState([])
  const [title, setTitle] = useState('')
  const [link, setLink] = useState('')
  const [color, setColor] = useState('#ffffff')

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)

  const handleFileUpload = e => setFiles([...(e.target.files || [])])
  const handleDrop = e => {
    e.preventDefault()
    setFiles([...(e.dataTransfer.files || [])])
  }
  const handleDragOver = e => e.preventDefault()

  const handleAddCarousel = () => {
    if (files.length && title && link) {
      const newItem = {
        title,
        image: URL.createObjectURL(files[0]),
        link,
        color
      }
      setCarouselItems([...carouselItems, newItem])
      setFiles([])
      setTitle('')
      setLink('')
      setColor('#ffffff')
    }
  }

  return (
    <div className='flex h-screen'>
      <div className='flex-1 p-5'>
        <CarouselForm
          title={title}
          setTitle={setTitle}
          link={link}
          setLink={setLink}
          color={color}
          setColor={setColor}
          files={files}
          setFiles={setFiles}
          handleAddCarousel={handleAddCarousel}
          handleDrop={handleDrop}
          handleDragOver={handleDragOver}
          handleFileUpload={handleFileUpload}
        />
        <CarouselList
          carouselItems={carouselItems}
          setCarouselItems={setCarouselItems}
        />
      </div>
    </div>
  )
}

export default Carousel
