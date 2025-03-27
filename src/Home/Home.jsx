import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import HighestRatedGames from './HighestRatedGames';
import StayConnected from './StayConnected';

const Home = () => {
    const data = useLoaderData()
    // console.log(data);

    return (
        <div>
            <div className='mt-32'>
                <h3 className='text-3xl mb-5'>Top Games</h3>
                <Banner data={data} />
            </div>

            <div className='my-52'>
                <h3 className='text-3xl mb-5'>Highest Rated Games</h3>
                <HighestRatedGames data={data}></HighestRatedGames>
            </div>
            <div className='  text-center '>
                <h3><h3 className='text-3xl mb-5'>Stay Connected With Us</h3></h3>
                <StayConnected></StayConnected>
            </div>
        </div>
    );
};

export default Home;