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

    const handleFilter = (genre) => {
        fetch(`http://localhost:5000/review/${genre}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }

    return (
        <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="flex flex-col items-center mb-6">
                <h3 className="font-bold text-3xl mb-4">
                    <Typewriter
                        words={['Reviews Given by Users']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h3>
            </div>

            {/* Filter/Sort Controls - Fixed Position */}
            <div className="flex justify-end mb-8">
                <div className="flex space-x-20">
                    <details className="dropdown">
                        <summary className="btn">Filter</summary>
                        <ul className="dropdown-content menu bg-base-100 rounded-box w-52 shadow">
                            <li><a onClick={() => handleFilter('Action')}>Action</a></li>
                            <li><a onClick={() => handleFilter('RPG')}>RPG</a></li>
                            <li><a onClick={() => handleFilter('Adventure')}>Adventure</a></li>
                            <li><a onClick={() => handleFilter('Shooter')}>Shooter</a></li>
                            <li><a onClick={() => handleFilter('Strategy')}>Strategy</a></li>
                        </ul>
                    </details>
                    <div className="dropdown">
                        <div tabIndex={0} className="btn">Sort by</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 shadow">
                            <li><a onClick={() => handleSort("rating")}>Rating</a></li>
                            <li><a onClick={() => handleSort("year")}>Year</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div>
                {reviews.length > 0 ? (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map(review => (
                            <div key={review._id} className="card bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={review.img} alt={review.title} className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{review.title}</h2>
                                    <div className="badge badge-primary badge-outline">{review.genre}</div>
                                    <p>Published: {review.publishingYear}</p>
                                    <p className="font-thin">Rated: {review.rating}</p>
                                    <div className="card-actions">
                                        <NavLink to={`/reviews/${review._id}`} className="btn btn-primary">Show details</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg">No reviews available for this Genre</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reviews;