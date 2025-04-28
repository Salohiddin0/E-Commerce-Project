import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {
  AiOutlineProduct,
  AiOutlinePercentage,
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineSetting
} from 'react-icons/ai'
import {
  MdOutlineViewCarousel,
  MdOutlineCategory,
  MdOutlineShoppingCart,
  MdOutlineLocalOffer
} from 'react-icons/md'
import {
  FaMoneyCheckAlt,
  FaUsersCog,
  FaBoxOpen,
  FaReceipt
} from 'react-icons/fa'
import { RiAuctionLine, RiCoupon3Line } from 'react-icons/ri'
import { HiOutlineClipboardList, HiOutlineGlobe } from 'react-icons/hi'
import { TbSettingsAutomation } from 'react-icons/tb'
import { BiLogOut } from 'react-icons/bi'

const Dashboard = () => {
  const links = [
    { name: 'Products', href: '/product-admin', icon: AiOutlineProduct },
    { name: 'Invoices', href: '/invoices', icon: AiOutlinePercentage },
    { name: 'Customers', href: '/customers', icon: MdOutlineViewCarousel },
    { name: 'Categories', href: '/categories', icon: MdOutlineCategory },
    { name: 'Orders', href: '/orders', icon: MdOutlineShoppingCart },
    { name: 'Offers', href: '/offers', icon: MdOutlineLocalOffer },
    { name: 'Transactions', href: '/transactions', icon: FaMoneyCheckAlt },
    { name: 'Users Management', href: '/users', icon: AiOutlineUser },
    { name: 'Settings', href: '/settings', icon: AiOutlineSetting },
    { name: 'Admins', href: '/admins', icon: FaUsersCog },
    { name: 'Dashboard', href: '/dashboard', icon: AiOutlineDashboard },
    { name: 'Applications', href: '/applications', icon: FaBoxOpen },
    { name: 'Receipts', href: '/receipts', icon: FaReceipt },
    { name: 'Auctions', href: '/auctions', icon: RiAuctionLine },
    { name: 'Promo Codes', href: '/promo-codes', icon: RiCoupon3Line },
    { name: 'Reports', href: '/reports', icon: HiOutlineClipboardList },
    { name: 'Web Products', href: '/web-products', icon: HiOutlineGlobe },
    { name: 'Automation', href: '/automation', icon: TbSettingsAutomation }
  ]

  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside className='w-64 bg-white border-r border-gray-200 flex flex-col'>
        <div className='border-b border-gray-200 p-4 flex items-center justify-center'>
          <h1 className='font-semibold text-lg'>E-Commerce-Admin-Panel</h1>
        </div>

        <nav className='flex-1 overflow-y-auto p-4'>
          <ul className='space-y-2'>
            {links.map(({ name, href, icon: Icon }) => (
              <li key={name}>
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
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className='border-t border-gray-200 p-4'>
          <button className='flex items-center w-full p-2 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors'>
            <BiLogOut className='w-6 h-6 mr-2' />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className='flex-1 p-5'>
        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold mb-4'>Products</h2>
            <p className='font-bold text-xl'>Count({links.length})</p>
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

export default Dashboard
