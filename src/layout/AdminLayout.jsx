import React from 'react'
import Sidebar from '../admiin/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
      <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 h-screen'>
            <Sidebar />
          </div>
          <div className='col-span-10'>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminLayout
