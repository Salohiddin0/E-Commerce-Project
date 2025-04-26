import React from 'react'
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='flex flex-col items-center mt-52'>
      <h1>Admin</h1>
      <Link to={'/'} className='mt-4 underline'>Back</Link>
    </div>
  )
}

export default Admin
