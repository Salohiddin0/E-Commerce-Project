import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1 className='flex justify-center mt-24 text-2xl text-blue-500'>About</h1>
      <Link className='flex justify-center mt-4 underline' to={'/' }>Back</Link>
    </div>
  )
}

export default About
