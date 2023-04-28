import React from 'react'
import logo from '../icons/logo.png'
import { useNavigate, NavLink } from "react-router-dom";
import SideNavLink from "./SideNavLink";
import { loginReset, logout } from '../store/slices/studentSlices';
import { useDispatch } from 'react-redux';


const InstructorSideNav = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        console.log("hello");
        dispatch(logout());
        dispatch(loginReset())
        navigate("/login");
    }
    return (
        <>
            <div
                id="navLeft"
                className="flex-col items-center w-[300px] min-w-[220px] bg-white shadow-5xl sticky flex top-0 min-h-[650px]"
            >

                {/* Logo */}
                <div className="flex justify-center items-center brand h-[160px] w-[90%] m-auto mt-2">
                    <NavLink to="/dashboard" className="w-[70%]">
                        <img
                            className="w-full text-primary"
                            src={logo}
                            alt=""
                        />
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="nav flex-grow w-full">
                    <ul className="flex flex-col gap-2 justify-center items-center mt-5">

                        <SideNavLink
                            icon={"dashboard"}
                            label={"Dashboard"}
                            link={"instructor/dashboard"}
                        />

                        <SideNavLink
                            icon={"course"}
                            label={"Courses"}
                            link={"instructor/course/123"}
                        />

                        <SideNavLink
                            icon={"assignment"}
                            label={"Assignments"}
                            link={`instructor/assignments`}
                        />

                        {/* <SideNavLink
                            icon={"grade"}
                            label={"Grades"}
                            link={`student/grade`}
                        /> */}
                    </ul>
                </div>

                {/* Logout Button */}

                <div
                    className="flex justify-center border-t-2 border-lightborder w-full m-auto bottom-5 absolute"
                    onClick={handleLogout}
                >
                    <SideNavLink icon={"logout"} label={"Logout"} />
                </div>
            </div>
        </>
    )
}

export default InstructorSideNav