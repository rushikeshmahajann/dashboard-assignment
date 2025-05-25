import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard/Dashboard'

const MainLayout = () => {
  return (
    <main className='mx-auto overflow-hidden w-screen max-w-[1920px] h-screen flex flex-row'>
        <Sidebar />
        <div className='w-full h-full'>
          <Dashboard />
        </div>

    </main>
  )
}

export default MainLayout