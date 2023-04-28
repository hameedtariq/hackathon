import React, { useState, useEffect } from "react";
import SideNavLink from "./SideNavLink";
import logoutLogo from "../icons/logoutIcon.svg";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../store/slices/studentSlices";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../icons/logo.png'

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { adminInfo: hostLogin } = useSelector((state) => state.login);

  // const { sideNav } = useSelector((state) => {
  //   return state;
  // });

  const handleLogout = () => {
    console.log("hello");
    dispatch(logout());
    navigate("/login");
  };

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
              className="w-full"
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
              link={"student/dashboard"}
            />

            <SideNavLink
              icon={"course"}
              label={"Courses"}
              link={"student/course"}
            />

            <SideNavLink
              icon={"assignment"}
              label={"Assignments"}
              link={`student/assignments`}
            />

            <SideNavLink
              icon={"grade"}
              label={"Grades"}
              link={`student/grade`}
            />
            {/* <SideNavLink 
            // icon={orderIcon} 
            label={"Orders"} link={"orderList"} />
            <SideNavLink 
            // icon={packageIcon} 
            label={"Packages"} link={"packages"} /> */}
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
  );
};

export default SideNav;
