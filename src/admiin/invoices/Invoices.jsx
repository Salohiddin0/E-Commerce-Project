import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import TimerForm from './components/TimerForm'
import Countdown from './components/Countdown'
import ActionButtons from './components/ActionButtons'

const Invoices = () => {
  const [inputTime, setInputTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [timeLeft, setTimeLeft] = useState(inputTime)
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setInputTime(prev => ({ ...prev, [name]: Number(value) }))
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
        setTimeLeft(prev => {
          let { days, hours, minutes, seconds } = prev

          if (seconds > 0) seconds--
          else if (minutes > 0) {
            minutes--
            seconds = 59
          } else if (hours > 0) {
            hours--
            minutes = 59
            seconds = 59
          } else if (days > 0) {
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

          return { days, hours, minutes, seconds }
        })
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isRunning])

  return (
    <div className='flex h-screen'>
      <div className='flex-1 p-5'>
        <Header title='Invoices' count={10} />
        <TimerForm
          inputTime={inputTime}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
        <Countdown timeLeft={timeLeft} isFinished={isFinished} />
        <ActionButtons />
      </div>
    </div>
  )
}

export default Invoices
