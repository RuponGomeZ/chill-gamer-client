import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import HighestRatedGames from './HighestRatedGames';

const Home = () => {
    const data = useLoaderData()
    // console.log(data);

    return (
        <div>
            <div>
                <h3 className='text-3xl mb-5'>Top Games</h3>
                <Banner data={data} />
            </div>

            <div className='my-28'>
                <h3 className='text-3xl mb-5'>Highest Rated Games</h3>
                {
                    data.map(game => <HighestRatedGames game={game}></HighestRatedGames>)
                }
            </div>
        </div>
    );
};

export default Home;