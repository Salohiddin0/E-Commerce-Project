import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { AiOutlineProduct, AiOutlinePercentage } from 'react-icons/ai'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const ProductAdmin = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)

  const links = [
    {
      name: 'Products',
      href: '/product-admin',
      icon: AiOutlineProduct,
      dropdown: [{ name: 'Add Product', href: '/product-admin/add' }]
    },
    { name: 'Invoices', href: '/invoices', icon: AiOutlinePercentage },
    { name: 'Carousel', href: '/carousel', icon: MdOutlineViewCarousel }
  ]

  return (
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
            {links.map(({ name, href, icon: Icon, dropdown }) => (
              <li key={name}>
                <div>
                  <NavLink
                    to={href}
                    onClick={() => {
                      if (name === 'Products') {
                        setIsProductDropdownOpen(!isProductDropdownOpen)
                      }
                    }}
                    className={({ isActive }) =>
                      `flex items-center p-2 text-gray-500 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-teal-500 text-white'
                          : 'hover:bg-gray-100 hover:text-gray-700'
                      }`
                    }
                  >
                    <Icon className='w-6 h-6 mr-2' />
                    <span className='ml-2'>{name}</span>
                  </NavLink>

                  {/* Dropdown menyu faqat Products uchun */}
                  {name === 'Products' && isProductDropdownOpen && dropdown && (
                    <ul className='ml-8 mt-2 space-y-1'>
                      {dropdown.map(({ name: dName, href: dHref }) => (
                        <li key={dName}>
                          <NavLink
                            to={dHref}
                            className='block p-2 text-sm text-gray-600 rounded hover:bg-gray-100'
                          >
                            {dName}
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
      <div className='flex-1 p-5'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold mb-4'>Products</h2>
            <p className='font-bold text-xl'>Count</p>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-2 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <button className='border border-emerald-300 px-7 py-2 rounded-md bg-emerald-300'>
              Show Products
            </button>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <button className='border border-emerald-300 px-7 py-2 rounded-md bg-emerald-300'>
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAdmin
