import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Reviews = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    // const { img, title, genre, publishingYear } = loaderData;

    const [reviews, setReviews] = useState(loaderData)

    const handleSort = (sort) => {
        if (sort === "rating") {
            fetch("http://localhost:5000/review/sortbyRating")
                .then(res => res.json())
                .then(item => setReviews(item))
                .catch(error => console.log(error))
        } else if (sort === "year") {
            fetch("http://localhost:5000/review/sortbyYear")
                .then(res => res.json())
                .then(item => setReviews(item))
                .catch(error => console.log(error))
        }
    }

    return (
        <div>
            <div className='flex flex-col items-center justify-center'>
                <h3 className='font-bold text-3xl mb-4'>
                    <Typewriter
                        words={['Your Game WatchList']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>
                <div className="flex w-full justify-end">
                    <div className="dropdown dropdown-bottom dropdown-end ml-auto">
                        <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                            <li><a onClick={() => handleSort("year")}>Year</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review =>
                        <div key={review._id} className="card bg-base-100 w-80 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={review.img}
                                    alt={review.title}
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{review.title}</h2>
                                <div className="badge badge-primary badge-outline">{review.genre}</div>
                                <p>Published: {review.publishingYear}</p>
                                <p className='font-thin'>Rated: {review.rating}</p>
                                <div className="card-actions">
                                    <NavLink to={`/reviews/${review._id}`} className="btn btn-primary">Show details</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default Reviews;