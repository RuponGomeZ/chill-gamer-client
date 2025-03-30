import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h2 className='font-bold text-6xl'>Error 404</h2>
            <p className='text-3xl'>Page not found</p>
            <Link to={"/"}><p className='underline'>Return Home</p></Link>
        </div>
    );
};

export default ErrorPage;