import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineProduct, AiOutlinePercentage } from 'react-icons/ai'
import { MdOutlineViewCarousel } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const Invoices = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [inputTime, setInputTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setInputTime(prevState => ({
      ...prevState,
      [name]: Number(value)
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setTimeLeft(inputTime)
    setIsRunning(true)
    setIsFinished(false)
  }

  useEffect(() => {
    let timer
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          let { days, hours, minutes, seconds } = prevTime

          if (seconds > 0) {
            seconds--
          } else {
            if (minutes > 0) {
              minutes--
              seconds = 59
            } else {
              if (hours > 0) {
                hours--
                minutes = 59
                seconds = 59
              } else {
                if (days > 0) {
                  days--
                  hours = 23
                  minutes = 59
                  seconds = 59
                } else {
                  clearInterval(timer)
                  setIsRunning(false)
                  setIsFinished(true)
                  return { days: 0, hours: 0, minutes: 0, seconds: 0 }
                }
              }
            }
          }

          return { days, hours, minutes, seconds }
        })
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [isRunning])

  const formatTime = time => (time < 10 ? `0${time}` : time)

  const links = [
    { name: 'Products', href: '/product-admin', icon: AiOutlineProduct },
    { name: 'Invoices', href: '/invoices', icon: AiOutlinePercentage },
    { name: 'Carousel', href: '/carousel', icon: MdOutlineViewCarousel }
  ]

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
              <h2 className='text-3xl font-semibold mb-4'>Invoices</h2>
              <p className='font-bold text-xl'>Count({10})</p>
            </div>
          </div>
          {/* Input Form */}
          <form onSubmit={handleSubmit} className='mt-8'>
            <div className='grid grid-cols-4 gap-4'>
              {['days', 'hours', 'minutes', 'seconds'].map(field => (
                <div key={field} className='flex flex-col items-center'>
                  <label htmlFor={field} className='text-gray-500 capitalize'>
                    {field}
                  </label>
                  <input
                    type='number'
                    id={field}
                    name={field}
                    value={inputTime[field]}
                    onChange={handleInputChange}
                    className='border p-2 rounded w-20 text-center'
                    min={0}
                  />
                </div>
              ))}
            </div>
            <button
              type='submit'
              className='mt-4 w-full bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition-colors'
            >
              Set Time
            </button>
          </form>
          {/* Timer or Success Message */}
          {isFinished ? (
            <div className='flex justify-center items-center mt-12'>
              <div className='text-4xl font-bold text-green-500'>
                ✅ Successfully Finished!
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center mt-8'>
              <div className='flex'>
                {['days', 'hours', 'minutes', 'seconds'].map((field, index) => (
                  <React.Fragment key={field}>
                    <div className='flex flex-col items-center mx-2'>
                      <span className='text-2xl md:text-3xl font-bold'>
                        {formatTime(timeLeft[field])}
                      </span>
                      <span className='text-xs text-gray-500 capitalize'>
                        {field}
                      </span>
                    </div>
                    {index < 3 && (
                      <span className='text-2xl font-bold mx-1'>:</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          {/* Table */}
          <div>
            <div className='flex justify-around mt-12 items-center'>
              <div>
                <button className='border border-teal-500 bg-teal-500 p-3 px-5 rounded-md text-white'>
                  Products Invoices
                </button>
              </div>

              {/* Oradagi chiziq */}
            </div>
          </div>{' '}
        </div>
      </div>
    </>
  )
}

export default Invoices
