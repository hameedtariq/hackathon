import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import CourseCard from '../components/student/CourseCard'
import AssignmentCard from '../components/student/AssignmentCard'
import request from '../utils/request'

const StudentDashboardScreen = () => {
  const [courses, setCourses] = useState([])
  const [assignments, setAssignments] = useState([])
  const getAllCourses = async () => {
    const { data } = await request.get('/courses')
    setCourses(data.courses)
  }
  const getAllAssignments = async () => {
    const { data } = await request.get('/assignments')
    setAssignments(data.assignments)
  }
  useEffect(() => {
    getAllCourses()
    getAllAssignments()
  }, [])

  return (
    <div className='flex flex-col h-screen w-full p-5'>
      {/* <Header /> */}
      <div className='flex gap-5 items-center justify-center h-full w-full'>
        {/* course section */}
        <div className=' bg-white w-full basis-[55%] border border-lightborder rounded p-4 h-full'>
          {/* Heading */}
          <h1 className='text-base3 mx-auto p-2 border-b-2'>Courses</h1>

          <div className='flex flex-col gap-2 items-center justify-start overflow-auto p-5 w-full h-fit '>
            {/* map func here */}

            {/* Course card */}
            {courses.map((course, index) => {
              return (
                <CourseCard
                  courseName={course.courseName}
                  _id={course._id}
                  courseCode={course.courseCode}
                />
              )
            })}
          </div>
        </div>

        {/* Assignment section */}

        <div className=' bg-white w-full basis-[45%] border border-lightborder rounded p-4 h-full overflow-auto'>
          {/* heading */}
          <h1 className='text-base3 mx-auto p-2 border-b-2'> Assignments</h1>
          <div className='flex flex-col gap-2 items-center justify-start overflow-auto p-5 w-full h-fit'>
            {/* map func here */}

            {/* Assignment card */}
            {assignments.map((assignment, index) => {
              return (
                <AssignmentCard
                  title={assignment.title}
                  description={assignment.description}
                  courseName={assignment.courseId?.courseName}
                  deadline={
                    assignment.deadline
                      ? assignment.deadline
                      : new Date().toLocaleTimeString()
                  }
                />
              )
            })}
          </div>
        </div>
        {/* Assignment Card */}
      </div>
    </div>
  )
}

export default StudentDashboardScreen
