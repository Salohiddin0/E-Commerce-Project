import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='container mx-auto flex justify-between items-center py-2 px-4'>
          <div></div>
          <div className='flex items-center gap-[8px] text-white'>
            <h6 className='font-light text-sm'>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h6>
            <a
              href='#'
              className='text-white text-xs font-medium hover:underline'
            >
              Shop Now
            </a>
          </div>
          <div>
            <select className='bg-transparent text-white border-none outline-none text-sm font-medium cursor-pointer'>
              <option className='bg-black text-white' value='English'>
                English
              </option>
              <option className='bg-black text-white' value='Russia'>
                Russia
              </option>
              <option className='bg-black text-white' value='Uzbek'>
                Uzbek
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
