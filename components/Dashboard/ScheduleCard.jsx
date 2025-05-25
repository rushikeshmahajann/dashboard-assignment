import React from 'react'

const ScheduleCard = ({title, icon, time}) => {
  return (
    <div className='bg-purple-300 py-4 px-6 w-full rounded-4xl text-purple-500 tracking-tight'>
        <h5 className='font-medium text-lg flex items-center justify-between'>{title} <span className='text-2xl'>{icon}</span></h5>
        <time className='opacity-60' >{time}</time>
    
    </div>
  )
}

export default ScheduleCard