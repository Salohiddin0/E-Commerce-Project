import React from 'react'

const Countdown = ({ timeLeft, isFinished }) => {
  const formatTime = time => (time < 10 ? `0${time}` : time)

  if (isFinished) {
    return (
      <div className='flex justify-center items-center mt-12'>
        <div className='text-4xl font-bold text-green-500'>
          ✅ Successfully Finished!
        </div>
      </div>
    )
  }

  return (
    <>
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
              {index < 3 && <span className='text-2xl font-bold mx-1'>:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
export default Countdown
