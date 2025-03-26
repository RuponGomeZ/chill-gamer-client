import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authontications/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const email = user ? user.email : '';
    console.log(user);

    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews/${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(err => console.log(err))
    }, [email])
    // const 
    return (
        <div>
            <div className="overflow-x-auto border-2 border-gray-200 rounded-lg">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Published</th>
                            <th>Rated</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myReviews.map((review, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{review.title}</td>
                                <td>{review.genre}</td>
                                <td>{review.publishingYear}</td>
                                <td>{review.rating}</td>
                                <td className='flex gap-5'>
                                    <button>Edit</button>
                                    <button className='text-red-700'>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;