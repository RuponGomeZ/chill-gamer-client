import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './Components/Authontications/AuthProvider';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter';

const WatchList = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);

    const [watchlist, setwatchList] = useState(data.filter(item => item.email === user.email));

    console.log(data);

    const handleDelete = (id) => {
        fetch(`https://game-review-server-site.vercel.app/watchList/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Removed from WatchList successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    fetch("https://game-review-server-site.vercel.app/watchList")
                        .then(res => res.json())
                        .then(updatedData => {
                            const userWatchlist = updatedData.filter(item => item.email === user.email);
                            setwatchList(userWatchlist);
                        });
                }
            })
            .catch(err => console.error("Error deleting item:", err));
    };

    return (
        <div className='lg:w-2/4 w-11/12'>
            <h2 className='font-bold text-lg lg:text-3xl'><Typewriter
                words={['Your Game WatchList']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
            /></h2>
            <div className="overflow-x-auto min-h-40 mt-10 border">
                <table className="table table-zebra">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Title</th>
                            <th className=' md:block hidden'>Genre</th>
                            <th>Rating</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {watchlist.length > 0 ? (
                            watchlist.map((item, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item.reviewData.title}</td>
                                    <td className=' md:block hidden'>{item.reviewData.genre}</td>
                                    <td>{item.reviewData.rating}</td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-red-600 hover:underline text-xs sm:text-sm"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">
                                    No items in your WatchList.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WatchList;