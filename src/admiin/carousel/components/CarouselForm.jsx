const CarouselForm = ({
  title,
  setTitle,
  link,
  setLink,
  color,
  setColor,
  files,
  setFiles,
  handleAddCarousel,
  handleDrop,
  handleDragOver,
  handleFileUpload
}) => {
  return (
    <div className='grid grid-cols-3 gap-6'>
      <div className='col-span-2 bg-white p-6 rounded-lg shadow space-y-4'>
        <h2 className='text-2xl font-semibold'>Add Carousel</h2>
        <div
          className='w-full h-[200px] bg-gray-100 rounded flex items-center justify-center'
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <input
            type='file'
            onChange={handleFileUpload}
            className='hidden'
            id='fileUpload'
            accept='image/*'
          />
          <label
            htmlFor='fileUpload'
            className='cursor-pointer flex flex-col items-center justify-center w-full h-full'
          >
            <svg
              width='97'
              height='84'
              viewBox='0 0 97 84'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M84.8154 12H52.5654L43.3779 3.5625C41.1279 1.3125 38.1279 0 34.9404 0H12.8154C6.06543 0 0.81543 5.4375 0.81543 12V72C0.81543 78.75 6.06543 84 12.8154 84H84.8154C91.3779 84 96.8154 78.75 96.8154 72V24C96.8154 17.4375 91.5654 12 84.8154 12ZM87.8154 72C87.8154 73.6875 86.3154 75 84.8154 75H12.8154C11.1279 75 9.81543 73.6875 9.81543 72V12C9.81543 10.5 11.1279 9 12.8154 9H34.7529C35.5029 9 36.2529 9.375 36.8154 9.9375L48.8154 21H84.8154C86.3154 21 87.8154 22.5 87.8154 24V72Z'
                fill='#3E3232'
                fill-opacity='0.25'
              />
            </svg>
            {files.length === 0 ? (
              <>
                <span className="text-gray-400 mt-5">Drop image here or click to upload</span>
              </>
            ) : (
              <img
                src={URL.createObjectURL(files[0])}
                alt='Preview'
                className='w-full h-full object-cover rounded'
              />
            )}
          </label>
        </div>

        <div className='text-right'>
          <button
            className='bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600'
            onClick={handleAddCarousel}
          >
            Add Carousel
          </button>
        </div>
      </div>

      <div>
        <input
          type='text'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='Enter title'
          className='w-full border p-2 rounded'
        />
        <input
          type='text'
          value={link}
          onChange={e => setLink(e.target.value)}
          placeholder='Enter link'
          className='w-full border p-2 mt-3 rounded'
        />
        <label className='block mt-3 mb-1 font-medium'>
          Select Background Color:
        </label>
        <input
          type='color'
          value={color}
          onChange={e => setColor(e.target.value)}
          className='w-full h-10 p-1 rounded'
        />
      </div>
    </div>
  )
}

export default CarouselForm
