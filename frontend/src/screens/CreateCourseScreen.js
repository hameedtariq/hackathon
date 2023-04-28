import React, { useState } from 'react'
import TextBox2 from '../components/utils/TextBox2'
import back from '../icons/left.png'
import { useNavigate } from 'react-router-dom'
import request from '../utils/request'
import { Alert, AlertTitle, CircularProgress } from "@chakra-ui/react";

const CreateCourseScreen = () => {

    const navigate = useNavigate()
    const [image, setImage] = useState()
    const [message, setMessage] = useState('');

    const [course, setCourse] = useState({
        courseName: "",
        courseCode: "",
        instructorId: "",
        courseContent: ""
    });
    const formData = new FormData()

    const addCourseHandler = async () => {
        formData.append("courseFiles", image);
        formData.append("courseName", course.courseName);
        formData.append("courseCode", course.courseCode);
        formData.append("instructorId", course.instructorId);
        formData.append("courseContent", course.courseContent);


        try {
            const { data } = await request.post(
                '/courses',
                { ...course, formData },
                {
                    withCredentials: true,
                }
            )
            console.log(data);
            setMessage("Course Added Successfully")
        } catch (err) {
            console.log("error", err);
        }

    }

    return (
        <div className="flex w-full h-screen overflow-auto">
            <div className="flex flex-col w-full mobile:w-full px-10 tablet:px-0 mx-auto">

                {message && <Alert status='error' w="80%" className='m-auto z-[1000] top-10'>
                    <AlertTitle>{message}</AlertTitle>
                </Alert>}


                <div className="m-auto shadow-4xl pb-[30px] bg-white my-7 rounded-xl w-full gap-x-5">
                    <div className="w-full m-auto">
                        <div className="flex justify-between items-center px-5 py-3 border-b-lightborder border-b-2 w-full">
                            <h1 className="text-base3 font-segoe font-semibold mobile:text-base2 flex items-center gap-x-2">
                                <img src={back} alt="back" className="w-[30px] h-[20px] inline-block pr-2 cursor-pointer" onClick={() => navigate(-1)} />
                                <label>Course Details </label>
                            </h1>

                            <div className="flex gap-2 actions">

                                < button className='p-2 bg-viewBlue text-white rounded-[20px] px-5' onClick={addCourseHandler}>Add</button>

                            </div>
                        </div>
                    </div>

                    <div className="w-[95%] m-auto form pt-5">
                        <div className="grid grid-cols-2 items-center gap-x-7">
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

                            {/* Content */}

                            <div className='flex flex-col gap-2'>
                                <label htmlFor="">Content</label>
                                <input type="file" onChange={(e) => setImage(e.target.files)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default CreateCourseScreen