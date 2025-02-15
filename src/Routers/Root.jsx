import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { AuthContext } from '../Providers/AuthProvider';
import { HashLoader } from 'react-spinners';

const Root = () => {
    const { Loading } = useContext(AuthContext)
    return (
        <>
         {
            Loading ? <div className="flex justify-center items-center h-screen">
            <HashLoader color='#F05A7E' size={150}></HashLoader>
         </div> :
         <>
         <div className="w-full bg-[#F05A7E] fixed z-50">
                <Navbar/>
            </div>
            <div className="w-full h-[66px]"></div>
            <Outlet></Outlet>
            <Footer></Footer>
         </>
         }
        </>
    );
};

export default Root;