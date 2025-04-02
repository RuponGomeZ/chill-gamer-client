import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import HighestRatedGames from './HighestRatedGames';
import StayConnected from './StayConnected';
import GamingHardwares from './GamingHardwares';

const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <div className='mt-32 '>
                <h3 className='text-3xl mb-5'>Top Games</h3>
                <p className='text-gray-400'>Picked By Gamers</p>
                <Banner data={data} />
            </div>

            <div className='my-52'>
                <h3 className='text-3xl mb-5'>Highest Rated Games</h3>
                <HighestRatedGames data={data}></HighestRatedGames>
            </div>
            <div className=' my-52 text-center '>
                <h3><h3 className='text-3xl mb-5'>Stay Connected With Us</h3></h3>
                <div className=''><StayConnected></StayConnected></div>
            </div>
            <div className='  text-center '>
                <h3><h3 className='text-3xl mb-5'>Budget Gaming Hardwares You Can Buy</h3></h3>
                <GamingHardwares></GamingHardwares>
            </div>
        </div>
    );
};

export default Home;