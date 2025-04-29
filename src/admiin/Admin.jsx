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
        <aside className='w-64 bg-white border-r border-gray-200 flex flex-col'>
          <div className='border-b border-gray-200 p-4 flex items-center justify-center'>
            <Link to={'/'} className='font-semibold text-lg'>
              E-Commerce-Admin-Panel
            </Link>
          </div>

          <nav className='flex-1 overflow-y-auto p-4'>
            <ul className='space-y-2'>
              {links.map(({ name, href, icon: Icon, isDropdown }) => (
                <li
                  key={name}
                  className={`relative ${isDropdown ? 'group' : ''}`}
                >
                  <NavLink
                    to={href}
                    onClick={isDropdown ? toggleDropdown : undefined} // Faqat "Invoices" ustiga bosilganda toggle bo‘lsin
                    className={({ isActive }) =>
                      `flex items-center p-2 text-gray-500 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-teal-500 text-white'
                          : 'hover:bg-teal-100 hover:text-teal-700'
                      }`
                    }
                  >
                    <Icon className='w-6 h-6 mr-2' />
                    <span className='ml-2'>{name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className='border-t border-gray-200 p-4'>
            <Link
              to={'/'}
              className='flex items-center w-full p-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors'
            >
              <BiLogOut className='w-6 h-6 ms-7' />
              <span className='ms-3'>Sign Out</span>
            </Link>
          </div>
        </aside>

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
