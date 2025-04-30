import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineProduct, AiOutlinePercentage } from 'react-icons/ai'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const ProductAdmin = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)

  const links = [
    {
      name: 'Products',
      href: '/admin/product-admin',
      icon: AiOutlineProduct,
      dropdown: [{ name: 'Add Product', href: '/product-admin/add' }]
    },
    { name: 'Invoices', href: '/admin/invoices', icon: AiOutlinePercentage },
    { name: 'Carousel', href: '/admin/carousel', icon: MdOutlineViewCarousel }
  ]

  return (
    <div className='flex h-screen'>
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
