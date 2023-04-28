// put course Id in url parameters

import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({ courseName, courseCode, _id }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className='flex gap-4 flex-col justify-between w-full bg-white h-fit p-3 rounded-md shadow-6xl cursor-pointer'
        onClick={() => navigate(`/student/course/${_id}`)}
      >
        {/* course name */}
        <div>
          <div className='py-1 border-b border-lightborder w-fit pr-5'>
            Course: {`${courseName}`}
          </div>
          <div className='py-1 border-b border-lightborder w-fit pr-5'>
            Course Code: {`${courseCode}`}
          </div>
        </div>

        <button className='bg-primary w-40 rounded-[20px] m-auto text-white cursor-pointer p-2'>
          Add Course
        </button>
      </div>
    </>
  )
}

export default CourseCard
