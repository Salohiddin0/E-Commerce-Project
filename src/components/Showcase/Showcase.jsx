'use client'

import { useState, useEffect } from 'react'

import Frame1 from '..//../assets/Frame 694.png'
import OurProducts from '../OurProducts/OurProducts'

export default function Showcase () {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35
  })

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1
        const newMinutes =
          newSeconds < 0 ? prevTime.minutes - 1 : prevTime.minutes
        const newHours = newMinutes < 0 ? prevTime.hours - 1 : prevTime.hours
        const newDays = newHours < 0 ? prevTime.days - 1 : prevTime.days

        return {
          days: newDays < 0 ? 0 : newDays,
          hours:
            newHours < 0 ? 23 : (newMinutes < 0 ? newHours : newHours) % 24,
          minutes: newMinutes < 0 ? 59 : newMinutes % 60,
          seconds: newSeconds < 0 ? 59 : newSeconds % 60
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <div className='relative w-full bg-black rounded-lg overflow-hidden mb-[35px] md:mb-[71px]'>
        <div className='container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2 mb-8 md:mb-0 z-10'>
            <p className='text-green-500 font-medium mb-2'>Categories</p>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-8 leading-tight'>
              Enhance Your
              <br />
              Music Experience
            </h1>

            {/* Countdown timer */}
            <div className='flex space-x-4 mb-8'>
              <div className='flex flex-col items-center'>
                <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                  <span className='text-black font-bold'>
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className='text-white text-xs mt-1'>Hours</span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                  <span className='text-black font-bold'>
                    {timeLeft.days.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className='text-white text-xs mt-1'>Days</span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                  <span className='text-black font-bold'>
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className='text-white text-xs mt-1'>Minutes</span>
              </div>

              <div className='flex flex-col items-center'>
                <div className='bg-white rounded-full w-16 h-16 flex items-center justify-center'>
                  <span className='text-black font-bold'>
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                </div>
                <span className='text-white text-xs mt-1'>Seconds</span>
              </div>
            </div>

            <button className='bg-[#00ff66] text-white px-8 py-3 rounded-md font-medium text-lg'>
              Buy Now!
            </button>
          </div>

          <div className='md:w-1/2 flex justify-center md:justify-end z-10'>
            <img
              src={Frame1}
              alt='JBL Speaker'
              className='object-contain'
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
      <OurProducts />
    </div>
  )
}
