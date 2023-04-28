import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const MyAssignmentsScreen = () => {
  return (
    <div className='flex w-full h-screen overflow-auto'>
      <div className='flex flex-col w-full mx-auto h-full'>
        <div className='w-full m-auto h-full p-5'>
          <h1 className='font-bold text-base3'>My Courses</h1>

          {/* map function here */}
          <div
            className={`flex shadow-4xl bg-white my-3 rounded-sm p-3 cursor-pointer border`}
          >
            {courses.length == 0 ? (
              <h1>You are not enrolled in any course</h1>
            ) : (
              courses.map((course) => (
                <div className='flex flex-col items-cente gap-4 w-full px-4 py-2'>
                  <div className='w-full flex flex-col gap-2'>
                    <div className='flex items-center justify-between py-1 border-b border-lightborder w-full pr-5'>
                      <p className='text-base2 font-semibold'>Course Title:</p>
                      <p className='text-base3 font-bold'>{`${course.courseId.courseName}`}</p>
                    </div>
                    <div className='flex items-center justify-between py-1 border-b border-lightborder w-full pr-5'>
                      <p className='text-base2 font-semibold'>Credit Hours:</p>
                      <p className='text-base3 font-bold'>{`3`}</p>
                    </div>
                    <div className='flex items-center justify-between py-1 border-b border-lightborder w-full pr-5'>
                      <p className='text-base2 font-semibold'>Course Code:</p>
                      <p className='text-base3 font-bold'>{`${course.courseId.courseCode}`}</p>
                    </div>
                    <div className='flex items-center justify-between py-1 border-b border-lightborder w-full pr-5'>
                      <p className='text-base2 font-semibold'>Course Status:</p>
                      <p className='text-base3 font-bold'>{`${course.status.toUpperCase()}`}</p>
                    </div>
                  </div>

                  <button className='bg-primary w-20 ml-auto rounded-[20px] p-1 text-white font-bold text-base2'>
                    Edit
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAssignmentsScreen
