import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <>
            <div className="w-full bg-[#F05A7E] fixed z-50">
                <Navbar/>
            </div>
            <div className="w-full h-[66px]"></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;