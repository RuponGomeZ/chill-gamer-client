import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authontications/AuthProvider';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const email = user ? user.email : '';
    console.log(user);

    const [myReviews, setMyReviews] = useState([]);
    console.log(myReviews);

    useEffect(() => {
        fetch(`http://localhost:5000/my-reviews/${email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
            .catch(err => console.log(err))
    }, [email])

    const handleDelete = (id) => {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "bg-green-500 text-white px-4 my-2 py-2 rounded-md hover:bg-green-600",
                cancelButton: "bg-red-500 text-white px-4 my-4 py-2 rounded-md hover:bg-red-600"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        })

            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/delete-review/${id}`, {
                        method: 'DELETE'
                    }
                    )
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                const remainingReviews = myReviews.filter(review => review._id !== id);
                                setMyReviews(remainingReviews);

                            }
                        })
                        .catch(err => console.log(err))
                    swalWithBootstrapButtons.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"

                    });
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error"
                    });
                }

            });


    }


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
                            <tr key={review._id}>
                                <th>{index + 1}</th>
                                <td>{review.title}</td>
                                <td>{review.genre}</td>
                                <td>{review.publishingYear}</td>
                                <td>{review.rating}</td>
                                <td className='flex gap-5'>
                                    <button><NavLink to={`/update-review/${review._id}`}>Update</NavLink></button>
                                    <button onClick={() => handleDelete(review._id)} className='text-red-700'>Delete</button>
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