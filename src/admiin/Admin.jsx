import { Link, NavLink } from 'react-router-dom'
import { AiOutlineProduct, AiOutlinePercentage } from 'react-icons/ai'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import { useState } from 'react'

const Admin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const links = [
    {
      name: 'Products',
      active: true,
      href: '/product-admin',
      icon: AiOutlineProduct
    },
    {
      name: 'Invoices',
      href: '/invoices',
      icon: AiOutlinePercentage,
      isDropdown: true
    },
    { name: 'Carousel', href: '/carousel', icon: MdOutlineViewCarousel }
  ]

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState) // Dropdownni ochish va yopish
  }

  return (
    <>
      <div className='flex h-screen'>
        {/* Sidebar */}

        {/* Main Content */}
        <div className='text-center flex-1 mt-64'>
          <h1 className='text-2xl font-bold '>
            Assalomu Aleykum Admin Panel ga Xush Kelibsiz
          </h1>
        </div>
      </div>
    </>
  )
}

export default Admin
