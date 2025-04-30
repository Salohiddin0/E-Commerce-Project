import { Link, NavLink } from 'react-router-dom'
import { AiOutlineProduct, AiOutlinePercentage } from 'react-icons/ai'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const Sidebar = ({ isDropdownOpen, toggleDropdown }) => {
  const links = [
    { name: 'Products', href: '/admin/product-admin', icon: AiOutlineProduct },
    { name: 'Invoices', href: '/admin/invoices', icon: AiOutlinePercentage },
    { name: 'Carousel', href: '/admin/carousel', icon: MdOutlineViewCarousel }
  ]

  return (
    <aside className='w-64 h-full bg-white border-r fixed-top fixed border-gray-200 flex flex-col'>
      <div className='border-b border-gray-200 p-4 flex items-center justify-center'>
        <Link to='/' className='font-semibold text-lg'>
          E-Commerce-Admin-Panel
        </Link>
      </div>
      <nav className='flex-1 overflow-y-auto p-4'>
        <ul className='space-y-2'>
          {links.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              {name === 'Carousel' ? (
                <div>
                  <NavLink
                    to={href}
                    className={({ isActive }) =>
                      `flex items-center w-full p-2 text-gray-500 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-teal-500 text-white'
                          : 'hover:bg-gray-100 hover:text-gray-700'
                      }`
                    }
                    onClick={toggleDropdown}
                  >
                    <Icon className='w-6 h-6 mr-2' />
                    <span className='ml-2'>{name}</span>
                  </NavLink>
                  {isDropdownOpen && (
                    <ul className='pl-6 mt-2 space-y-2'>
                      <li>
                        <NavLink
                          to='/add-carousel'
                          className={({ isActive }) =>
                            `flex items-center p-2 text-gray-500 rounded-lg transition-colors ${
                              isActive
                                ? 'bg-teal-500 text-white'
                                : 'hover:bg-gray-100 hover:text-gray-700'
                            }`
                          }
                        >
                          <span>Add Carousel</span>
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={href}
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
              )}
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
