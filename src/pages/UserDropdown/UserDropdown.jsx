'use client'

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserDropdown () {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleEscape (event) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className='focus:outline-none hidden md:block'
      >
        <svg
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='32' height='32' rx='16' fill='#DB4444' />
          <path
            d='M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {open && (
        <div className='absolute right-0 mt-2 w-64 bg-gray-600/70 backdrop-blur-md shadow-lg rounded-lg z-50 overflow-hidden'>
          <ul className='text-sm text-white'>
            <li className='flex items-center px-4 py-3 hover:bg-gray-500/50'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-3'
              >
                <path
                  d='M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27'
                  stroke='#FAFAFA'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z'
                  stroke='#FAFAFA'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <Link to='/account'>Manage My Account</Link>
            </li>
            <li className='flex items-center px-4 py-3 hover:bg-gray-500/50'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-3'
              >
                <path
                  d='M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z'
                  stroke='#FAFAFA'
                  strokeWidth='1.5'
                  strokeLinejoin='round'
                />
                <path
                  d='M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6'
                  stroke='#FAFAFA'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <Link to='/orders'>My Order</Link>
            </li>
            <li className='flex items-center px-4 py-3 hover:bg-gray-500/50'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-3'
              >
                <g clipPath='url(#clip0_1008_458)'>
                  <path
                    d='M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16'
                    stroke='#FAFAFA'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <circle
                    cx='12'
                    cy='12'
                    r='11.25'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_1008_458'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <Link to='/cancellations'>My Cancellations</Link>
            </li>
            <li className='flex items-center px-4 py-3 hover:bg-gray-500/50'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-3'
              >
                <path
                  d='M19.8284 9.93621C20.4517 9.93621 20.7176 10.7286 20.2205 11.1046L16.8905 13.6234C16.1688 14.1693 15.8661 15.1087 16.1334 15.9732L17.3864 20.0261C17.5735 20.6312 16.8729 21.1193 16.3701 20.7341L13.3075 18.3879C12.536 17.7969 11.464 17.7969 10.6925 18.3879L7.61357 20.7466C7.11152 21.1312 6.41161 20.645 6.59677 20.0403L7.83243 16.0046C8.09532 15.146 7.79694 14.2145 7.08413 13.6684L3.73432 11.1022C3.24111 10.7244 3.50831 9.93621 4.12961 9.93621H8.12744C9.07024 9.93621 9.90305 9.32198 10.1815 8.42125L11.379 4.5479C11.5678 3.93721 12.4322 3.93722 12.621 4.5479L13.8185 8.42124C14.0969 9.32198 14.9298 9.93621 15.8726 9.93621H19.8284Z'
                  stroke='#FAFAFA'
                  strokeWidth='1.5'
                />
              </svg>
              <Link to='/reviews'>My Reviews</Link>
            </li>
            <li className='flex items-center px-4 py-3 hover:bg-gray-500/50 border-t border-gray-500/50'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-3'
              >
                <path
                  d='M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17'
                  stroke='#FAFAFA'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <button onClick={() => alert('Logging out...')}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
