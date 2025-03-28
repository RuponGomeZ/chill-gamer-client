import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer';

const HomeLayout = () => {
    return (
        <div>
            <div className='mb-8'><NavBar></NavBar></div>
            <div className='flex  justify-center mx-auto w-full text-center min-h-screen'>
                <Outlet></Outlet>
            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;