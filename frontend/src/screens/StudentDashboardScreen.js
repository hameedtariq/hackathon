import React from 'react'
import Header from '../components/Header'
import CourseCard from '../components/student/CourseCard'
import AssignmentCard from '../components/student/AssignmentCard'

const StudentDashboardScreen = () => {
    return (
        <div className="flex flex-col h-screen w-full p-5">
            {/* <Header /> */}
            <div className="flex gap-5 items-center justify-center h-full w-full">

                {/* course section */}
                <div className=" bg-white w-full basis-[55%] border border-lightborder rounded p-4 h-full">

                    {/* Heading */}
                    <h1 className='text-base3 mx-auto p-2 border-b-2'>Courses</h1>

                    <div className="flex flex-col gap-2 items-center justify-start overflow-auto p-5 w-full h-fit">
                        {/* map func here */}

                        {/* Course card */}
                        <CourseCard />
                    </div>
                </div>

                {/* Assignment section */}
                <div className=" bg-white w-full basis-[45%] border border-lightborder rounded p-4 h-full">
                    {/* heading */}
                    <h1 className='text-base3 mx-auto p-2 border-b-2'> Assignments</h1>
                    <div className="flex flex-col gap-2 items-center justify-start overflow-auto p-5 w-full h-fit">
                        {/* map func here */}

                        {/* Assignment card */}
                        <AssignmentCard />
                    </div>
                </div>
                {/* Assignment Card */}


            </div>


        </div>

    )
}

export default StudentDashboardScreen