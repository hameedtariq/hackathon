import React from 'react'

import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div id='header' className='h-[80px] bg-white shadow-lg shadow-lightgrey z-10'>
                <div className="flex justify-between items-center h-full px-[100px] mobile:px-8">
                    <div id='brand' className="w-[100px]">
                        <NavLink to="/host">
                            {/* <img className="w-full" src={logo} alt="" /> */}
                        </NavLink>
                    </div>
                    <Link to="/support">
                        <div className="support flex gap-2 mobile:mt-5">
                            {/* <img src={support} alt="" /> */}
                            <h2>support</h2>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header