import React from 'react'
import TextBox2 from '../../components/utils/TextBox2'
import back from '../../icons/left.png'
import { useNavigate } from 'react-router-dom'

const CourseDetailsScreen = ({ type }) => {

    const navigate = useNavigate()

    const handleDeleteBtn = () => {

    }

    const editCourseHandler = () => {

    }

    

    return (
        <div className="flex w-full h-screen overflow-auto">
            <div className="flex flex-col w-full mobile:w-full px-10 tablet:px-0 mx-auto">


                <div className="m-auto shadow-4xl pb-[30px] bg-white my-7 rounded-xl w-full gap-x-5">
                    <div className="w-full m-auto">
                        <div className="flex justify-between items-center px-5 py-3 border-b-lightborder border-b-2 w-full">
                            <h1 className="text-base3 font-segoe font-semibold mobile:text-base2 flex items-center gap-x-2">
                                <img src={back} alt="back" className="w-[30px] h-[20px] inline-block pr-2 cursor-pointer" onClick={() => navigate(-1)} />
                                <label>Course Details </label>
                            </h1>

                            <div className="flex gap-2 actions">
                                {
                                    type == "instructor" && <>
                                        < button className='p-2 bg-viewBlue text-white rounded-[20px] px-5' onClick={editCourseHandler}>Edit</button>
                                        <button className='p-2 bg-primary text-white rounded-[20px] px-5'>Delete</button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-[95%] m-auto form pt-5">
                        <div className="grid grid-cols-2 items-center gap-x-7">
                            <TextBox2
                                label={"Course Title"}
                                name={"title"}
                            // credentials={address}
                            // value={address.line1}
                            // setValue={setAddress}
                            // readOnly={isReadOnly}
                            />
                            <TextBox2
                                label={"Instructor"}
                                name={"instructor"}
                            // credentials={address}
                            // value={address.line1}
                            // setValue={setAddress}
                            // readOnly={isReadOnly}
                            />
                            <TextBox2
                                label={"Instructor"}
                                name={"instructor"}
                            // credentials={address}
                            // value={address.line1}
                            // setValue={setAddress}
                            // readOnly={isReadOnly}
                            />
                            <TextBox2
                                label={"Course Code"}
                                name={"code"}
                            // credentials={address}
                            // value={address.line1}
                            // setValue={setAddress}
                            // readOnly={isReadOnly}
                            />
                            <TextBox2
                                label={"Credit Hours"}
                                name={"ch"}
                            // credentials={address}
                            // value={address.line1}
                            // setValue={setAddress}
                            // readOnly={isReadOnly}
                            />
                        </div>

                        <div className="w-full text-left mt-2">
                            <label className="text-base1 font-normal block mb-1" htmlFor="message">
                                Course Over View
                            </label>
                            <textarea
                                className={`w-full bg-lightgrey rounded-xl p-2 outline-none`}
                                id="message"
                                rows="5"
                                placeholder="Overview..."
                                name="description"
                            // value={credentials.description}
                            // readOnly={isReadOnly}
                            // onChange={(e) =>
                            //     setCredentials({
                            //         ...credentials,
                            //         [e.target.name]: e.target.value,
                            //     })
                            // }
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CourseDetailsScreen