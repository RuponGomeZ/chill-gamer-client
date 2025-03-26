import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Reviews = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    // const { img, title, genre, publishingYear } = loaderData;
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3  gap-10'>
            {
                loaderData.map(review =>
                    <div key={review._id} className="card bg-base-100 w-96 shadow-xl">
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
                            <div className="card-actions">
                                <NavLink to={`/reviews/${review._id}`} className="btn btn-primary">Show details</NavLink>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Reviews;