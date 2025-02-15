import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import TypedAnim from './TypedAnim';
import { AuthContext } from '../Providers/AuthProvider';
import { FaPen } from 'react-icons/fa6';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [theme, setTheme] = useState(()=>localStorage.getItem('theme') || 'light')
  const { user, LogOut } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all-categories"}>Categories</NavLink></li>
        <li><NavLink to={"/all-art-craft-item"}>Art & craft items</NavLink></li>
        {
          user && <>
          <li><NavLink to={"/addCraft"}>Add Craft Item</NavLink></li>
          <li><NavLink to={"/my-added-craft-list"}>My Art&Craft List</NavLink></li>
          </>
        }
    </>

const handleTheme = e => {
  if (e.target.checked) {
    setTheme('synthwave')
  }
  else {
    setTheme('light')
  }
}

const handleLogOut = () => {
  LogOut()
  .then(()=>{
    console.log("Sign-out successful.")
    Swal.fire({
      title: "Congratulation",
      text: "Sign-out successful.",
      icon: "success"
    });
  })
  .catch((error)=>{
    console.log(error.code)
  })
}


    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
      },[theme])

    return (
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="text-white btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu bg-white text-black font-poppins menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navLinks}
              </ul>
            </div>
            <a className='text-xl md:text-2xl lg:text-3xl text-[#fcfcfc] font-rancho'><TypedAnim cursorChar={"|"} data={['Dreamscape', 'Design']} /></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu text-white menu-horizontal px-1">
                {navLinks}
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <label className="text-white swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input onChange={handleTheme} type="checkbox" className="theme-controller" value="synthwave" />

              {/* sun icon */}
              <svg
                className="swap-off w-8 md:h-10 h-8 md:w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on w-8 md:h-10 h-8 md:w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {/* Avater start */}
            {
              user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                          <div className="w-8 md:w-10 rounded-full">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src={user?.photoURL} />
                          </div>
                        </div>
                        <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                          <li>
                            <Link to={"/user-profile"} className="">
                            <FaPen /> Profile
                              <span className="badge">New</span>
                            </Link>
                          </li>
                          <li><a onClick={handleLogOut}>
                          <RiLogoutCircleRLine />  Logout</a></li>
                        </ul>
                      </div> :
                      <>
                        <NavLink className="bg-[#f73e69] hover:bg-[#F05A7E] btn btn-sm md:btn-md text-white font-semibold font-poppins" to={"/login"}>Login</NavLink>
                        <NavLink className="bg-[#f73e69] hover:bg-[#F05A7E] btn btn-sm md:btn-md text-white font-semibold font-poppins" to={"/registration"}>Register</NavLink>
                      </>
            }
            {/* Avater end */}
          </div>
        </div>
    );
};

export default Navbar;