import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <div className='mb-8'><NavBar></NavBar></div>
            <div className='flex items-center justify-center mx-auto w-11/12 text-center'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default HomeLayout;