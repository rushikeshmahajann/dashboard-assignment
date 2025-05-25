import React from 'react'

const VitalsCard = ({title, icon, percentage, date, bg}) => {

    console.log(percentage);
    
  return (
    <div className='bg-purple-100 w-full 2xl:w-54 p-6 rounded-3xl'>
        <h4 className='tracking-tight text-purple-500 font-medium text-xl flex items-center gap-6'><span className='text-4xl'>{icon}</span>{title}</h4>

        <p className='tracking-tight text-gray-400 py-2 text-xs'>Date: {" "}{date}</p>

        <div className='rounded-full w-full h-2.5 bg-gray-300'>
            <div style={{ width: percentage, backgroundColor: bg }} className={`h-full rounded-full  z-999`}></div>
        </div>

    </div>
  )
}

export default VitalsCard