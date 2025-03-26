import React, { useContext } from 'react';
import { AuthContext } from '../Authontications/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const ReviewDetails = () => {
    const data = useContext(AuthContext);
    const reviewDetails = useLoaderData();
    const reviewData = reviewDetails[0];
    // console.log(reviewDetails);

    return (
        <div className="hero bg-base-200 min-h-screen w-8/12 mx-auto p-10">
            <div>
                <div className="hero-content flex-col lg:flex-row justify-start items-center space-x-10">
                    <img className="max-w-sm rounded-lg shadow-2xl "
                        src={reviewData.img}
                        alt={reviewData.title} />
                    <div className='ml-64'>
                        <h1 className="text-5xl font-bold">{reviewData.title}</h1>
                        <div className="badge badge-primary badge-outline">{reviewData.genre}</div>
                        <p>Rating: {reviewData.rating}</p> <div className="rating">
                            <div className="mask mask-star" aria-label="1 star"></div>
                            <div className="mask mask-star" aria-label="2 star"></div>
                            <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
                            <div className="mask mask-star" aria-label="4 star"></div>
                            <div className="mask mask-star" aria-label="5 star"></div>
                        </div>
                        <h4 className='pt-2'>Reviewer Name: <span className='font-bold'>{reviewData.name}</span></h4>
                        <h4 className='pt-2'>Reviewer Email: <span className='font-bold'>{reviewData.email}</span></h4>
                        <button className='btn'>Add To WatchList</button>
                    </div>
                </div>
                <p className="py-6"> Game details: {reviewData.description} </p>
            </div>
        </div>
    );
};

export default ReviewDetails;