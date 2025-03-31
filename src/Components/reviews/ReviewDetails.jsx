import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authontications/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReviewDetails = () => {
    const { user } = useContext(AuthContext);
    const reviewDetails = useLoaderData();
    const reviewData = reviewDetails[0];
    const [isAdded, setIsAdded] = useState(false);
    // console.log(reviewData, user);

    useEffect(() => {
        if (user) {
            fetch("https://game-review-server-site.vercel.app/watchList")
                .then(res => res.json())
                .then(data => {
                    // if(data.)
                    // console.log(data[0]);
                    const exists = data.find(item => item.email === user.email && item.reviewId === reviewData._id);
                    // console.log(exists);

                    if (exists)
                        setIsAdded(true)
                })

        }
    }, [user])
    console.log(isAdded);

    const handleAddToWatchList = () => {
        const email = user.email;
        const name = user.name;
        // const reviewerName = reviewData.name;
        // const reviewerEmail = reviewData.email;
        const data = { email, name, reviewId: reviewData._id, reviewData }

        fetch("https://game-review-server-site.vercel.app/addToWatchList", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: "Added to WatchList Successfully!",
                        icon: "success",
                        draggable: false
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "Error!",
                    text: "Already Exist",
                    icon: "error",
                    draggable: true
                });
            })

    }

    return (
        <div className="bg-base-200 max-h-fit my-auto w-5/6 lg:w-8/12 mx-auto p-4 lg:p-10">
            <div className="hero-content flex-col lg:flex-row lg:items-start lg:justify-start lg:space-x-10">
                <img
                    className="lg:max-w-xs rounded-lg shadow-2xl"
                    src={reviewData.img}
                    alt={reviewData.title}
                />
                <div className="lg:ml-64 mt-4 lg:mt-0">
                    <h1 className="text-3xl lg:text-5xl font-bold">{reviewData.title}</h1>
                    <div className="badge badge-primary badge-outline my-2">{reviewData.genre}</div>
                    <div className="flex items-center gap-2">
                        <p>Rating: {reviewData.rating}</p>
                        <div className="rating rating-sm lg:rating-md">
                            <input type="radio" name="rating-2" className="mask mask-star" />
                            <input type="radio" name="rating-2" className="mask mask-star" checked />
                            <input type="radio" name="rating-2" className="mask mask-star" />
                            <input type="radio" name="rating-2" className="mask mask-star" />
                            <input type="radio" name="rating-2" className="mask mask-star" />
                        </div>
                    </div>
                    <h4 className='pt-2'>Reviewer Name: <span className='font-bold'>{reviewData.name}</span></h4>
                    <h4 className='pt-2'>Reviewer Email: <span className='font-bold'>{reviewData.email}</span></h4>
                    <button onClick={handleAddToWatchList} className={`btn mt-4 ${isAdded ? "btn-disabled" : ""}`}>{isAdded ? "Already in WatchList" : "Add To WatchList"}</button>
                </div>
            </div>
            <p className="py-6 px-2 lg:px-0">Game details: {reviewData.description}</p>
        </div>
    );
};

export default ReviewDetails;