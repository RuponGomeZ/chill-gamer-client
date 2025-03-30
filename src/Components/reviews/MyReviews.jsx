import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authontications/AuthProvider';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const MyReviews = () => {
    const { user, loading } = useContext(AuthContext);
    const email = user ? user.email : '';
    console.log(user);

    const [myReviews, setMyReviews] = useState([]);
    console.log(myReviews);

    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

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
                    })
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
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error"
                    });
                }
            });
    }

    return (
        <div className="p-2 sm:p-4 max-w-7xl mx-auto">
            <h2 className='font-bold text-2xl mb-6'> <Typewriter
                words={['My Reviews']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            /></h2>
            {/* Responsive container with smaller padding on mobile */}
            <div className="overflow-x-auto border-2 border-gray-200 rounded-lg">
                <table className="min-w-full table-auto table-zebra">
                    {/* Make table responsive */}
                    <thead>
                        <tr className="text-left bg-gray-400 text-xs sm:text-sm md:text-base">
                            {/* Smaller text on mobile */}
                            <th className="px-2 py-1 sm:px-4 sm:py-2">SL</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2">Name</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 hidden sm:table-cell">Genre</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2 hidden sm:table-cell">Published</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2">Rated</th>
                            <th className="px-2 py-1 sm:px-4 sm:py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myReviews.map((review, index) => (
                            <tr key={review._id} className="text-xs sm:text-sm md:text-base">
                                {/* Smaller text on mobile */}
                                <th className="px-2 py-1 sm:px-4 sm:py-2">{index + 1}</th>
                                <td className="px-2 py-1 sm:px-4 sm:py-2">{review.title}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2 hidden sm:table-cell">{review.genre}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2 hidden sm:table-cell">{review.publishingYear}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2">{review.rating}</td>
                                <td className="px-2 py-1 sm:px-4 sm:py-2">
                                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-4">
                                        {/* Stack buttons vertically on small screens */}
                                        <button className="text-blue-600 hover:underline text-xs sm:text-sm">
                                            <NavLink to={`/update-review/${review._id}`}>Update</NavLink>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(review._id)}
                                            className="text-red-600 hover:underline text-xs sm:text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;