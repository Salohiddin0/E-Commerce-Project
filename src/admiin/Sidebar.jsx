import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineProduct, AiOutlinePercentage } from 'react-icons/ai'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'
import { useState } from 'react'

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const links = [
    {
      name: 'Products',
      href: '/admin/product-admin',
      icon: AiOutlineProduct,
      submenu: [{ name: 'Add Product', href: '/admin/product-admin/add' }]
    },
    {
      name: 'Invoices',
      href: '/admin/invoices',
      icon: AiOutlinePercentage,
      submenu: [{ name: 'Create Invoice', href: '/admin/invoices/create' }]
    },
    {
      name: 'Carousel',
      href: '/admin/carousel',
      icon: MdOutlineViewCarousel,
      submenu: [{ name: 'Show Carousel', href: '/admin/carousel/show' }]
    }
  ]

  const handleDropdownClick = (name, href) => {
    if (openDropdown !== name) {
      setOpenDropdown(name)
      if (location.pathname !== href) {
        navigate(href)
      }
    } else {
      setOpenDropdown(null)
    }
  }

  return (
    <aside className='w-64 h-full bg-white border-r fixed border-gray-200 flex flex-col'>
      <div className='border-b border-gray-200 p-4 flex items-center justify-center'>
        <Link to='/' className='font-semibold text-lg'>
          E-Commerce-Admin-Panel
        </Link>
      </div>

      <nav className='flex-1 overflow-y-auto p-4'>
        <ul className='space-y-2'>
          {links.map(({ name, href, icon: Icon, submenu }) => (
            <li key={name}>
              <div>
                <button
                  onClick={() => handleDropdownClick(name, href)}
                  className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                    location.pathname.startsWith(href)
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }`}
                >
                  <Icon className='w-6 h-6 mr-2' />
                  <span className='ml-2'>{name}</span>
                </button>
                {openDropdown === name && submenu && (
                  <ul className='pl-6 mt-2 space-y-2'>
                    {submenu.map(sub => (
                      <li key={sub.name}>
                        <NavLink
                          to={sub.href}
                          className={`flex items-center p-2 text-gray-500 rounded-lg transition-colors hover:bg-gray-100 `}
                        >
                          <span>{sub.name}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      <div className='border-t border-gray-200 p-4'>
        <Link
          to='/'
          className='flex items-center w-full p-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors'
        >
          <BiLogOut className='w-6 h-6 ms-7' />
          <span className='ms-3'>Sign Out</span>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
