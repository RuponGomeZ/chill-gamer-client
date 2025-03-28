import React, { use, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './Authontications/AuthProvider';
import { Tooltip } from 'react-tooltip';
import ThemeSwitch from './ThemeSwitch';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);


    const links = [
        <NavLink key="home" to={"/"}>Home</NavLink>,
        <NavLink key="all-reviews" to={"/all-reviews"}>All Reviews</NavLink>,
        user && (
            <>
                <NavLink key="add-reviews" to={"/add-reviews"}>Add Reviews</NavLink>
                <NavLink key="my-reviews" to={`/my-reviews/${user.email}`}>My Reviews</NavLink>
            </>
        ),
        < NavLink key="game-watchlist" to={"/game-watchlist"} > Game WatchList</NavLink >
    ]

    const handleLogout = () => {
        logOut();
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>{links}</li>
                            <li><button onClick={handleLogout} className=' underline my-auto cursor-pointer'>Logout</button></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Chill Gamer</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {links}
                    </ul>
                </div>
                <div className="lg:navbar-end flex">
                    {user?.email ? (
                        <div className='flex'>
                            <div className='justify-center items-center flex flex-col mr-4'>
                                {/* <img className='w-10 rounded-full' src={user.photoURL} alt={user.name} /> */}
                                <p data-tooltip-id="my-tooltip" className='font-bold'>{user.email}</p>
                            </div>
                            <div className='hidden sm:block'><button onClick={handleLogout} className=' underline my-auto cursor-pointer'>Logout</button></div>
                        </div>
                    ) : (
                        <Link to={"/login"} className="btn">Login/ Register</Link>
                    )}
                    <div className='ml-6'><ThemeSwitch /></div>
                </div>
                {
                    user ? <Tooltip id="my-tooltip" place="top" effect="solid">
                        <img className=' rounded-full w-20 ' src={user.photoURL} alt="" />
                    </Tooltip> : ''
                }
            </div>
        </div >
    );
};

export default NavBar;