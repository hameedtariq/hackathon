import React from 'react'

const AssignmentCard = ({ title, description, courseName, deadline }) => {
  return (
    <div className='flex gap-3 flex-col justify-between py-2 px-4 rounded w-full h-fit shadow-6xl'>
      {/* Assignment name */}
      <div>
        <div className=' py-1 border-b border-lightborder w-fit pr-5'>
          Assignment Title: {title}
        </div>
        <div className=' py-1 border-b border-lightborder w-fit pr-5'>
          Description: {description}
        </div>
        <div className=' py-1 border-b border-lightborder w-fit pr-5'>
          Course Name: {courseName}
        </div>
        <div className=' py-1 border-b border-lightborder w-fit pr-5'>
          Deadline:{new Date(deadline).toLocaleTimeString()}
        </div>
      </div>

      <button className='bg-primary cursor-pointer w-20 rounded-[20px] text-white mt-auto ml-auto p-1'>
        open
      </button>
    </div>
  )
}

export default AssignmentCard
