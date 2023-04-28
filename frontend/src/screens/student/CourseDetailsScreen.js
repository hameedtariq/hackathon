import React, { useEffect, useState } from 'react'
import TextBox2 from '../../components/utils/TextBox2'
import back from '../../icons/left.png'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import request from '../../utils/request'

const CourseDetailsScreen = ({ type }) => {
    const navigate = useNavigate()

    const [searchParams, setSearchParams] = useSearchParams();
    const courseId = searchParams.get('cid')

    const { Info } = useSelector((state) => state.Info)

    const [message, setMessage] = useState('');

    const [course, setCourse] = useState({
        courseName: "",
        courseCode: "",
        instructorId: "",
        courseContent: ""
    });


    const handleDeleteBtn = async () => {
        // delete course
        try {
            const { data } = await request.delete(`/courses/${courseId}`)
            setMessage(data.message)
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }

    const editCourseHandler = () => { }

    const fetchDetails = async () => {
        // fetch course details
        try {
            let { data } = await request.get(`/courses/${courseId}`)
            console.log(data);

            setCourse({
                courseName: data.courseName,
                courseCode: data.courseCode,
                instructorId: data.instructorId,
                courseContent: data.courseContent
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        // fetch course details
        fetchDetails()
    }, [])

    return (
        <div className='flex w-full h-screen overflow-auto'>
            <div className='flex flex-col w-full mobile:w-full px-10 tablet:px-0 mx-auto'>
                <div className='m-auto shadow-4xl pb-[30px] bg-white my-7 rounded-xl w-full gap-x-5'>
                    <div className='w-full m-auto'>
                        <div className='flex justify-between items-center px-5 py-3 border-b-lightborder border-b-2 w-full'>
                            <h1 className='text-base3 font-segoe font-semibold mobile:text-base2 flex items-center gap-x-2'>
                                <img
                                    src={back}
                                    alt='back'
                                    className='w-[30px] h-[20px] inline-block pr-2 cursor-pointer'
                                    onClick={() => navigate(-1)}
                                />
                                <label>Course Details </label>
                            </h1>

                            <div className='flex gap-2 actions'>
                                {type == 'instructor' && (
                                    <>
                                        <button
                                            className='p-2 bg-viewBlue text-white rounded-[20px] px-5'
                                            onClick={editCourseHandler}
                                        >
                                            Edit
                                        </button>
                                        <button onClick={() => handleDeleteBtn()} className='p-2 bg-primary text-white rounded-[20px] px-5'>
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='w-[95%] m-auto form pt-5'>
                        <div className='grid grid-cols-2 items-center gap-x-7'>
                            <TextBox2
                                label={"Course Name"}
                                name={"courseName"}
                                credentials={course}
                                value={course.courseName}
                                setValue={setCourse}
                            // readOnly={isReadOnly}
                            />
                            <TextBox2
                                label={"Code"}
                                name={"courseCode"}
                                credentials={course}
                                value={course.courseCode}
                                setValue={setCourse}
                            // readOnly={isReadOnly}
                            />
                            <TextBox2
                                label={"Instructor"}
                                name={"instructorId"}
                                credentials={course}
                                value={course.instructorId}
                                setValue={setCourse}
                            // readOnly={isReadOnly}
                            />

                            <div className='w-full text-left mt-2'>
                                <label
                                    className='text-base1 font-normal block mb-1'
                                    htmlFor='message'
                                >
                                    Course Over View
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailsScreen
