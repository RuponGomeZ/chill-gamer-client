import React, { useContext } from 'react';
import { AuthContext } from '../Authontications/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateReview = () => {

    const { user, userinfo } = useContext(AuthContext);
    const dataObj = useLoaderData();
    const gameData = dataObj[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const title = form.title.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const publishingYear = form.publishingYear.value;
        const genre = form.genre.value;
        const name = user ? user.displayName : '';
        const email = user ? user.email : '';

        const data = { img, title, description, rating, publishingYear, genre, name, email };
        console.log(img, title, description, rating, publishingYear, genre, name, email);

        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://game-review-server-site.vercel.app/update-review/${gameData._id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => { console.log(data) })
                    .catch(err => { console.log(err) })
                Swal.fire("Review Updated Successfully!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

        // Updating to all reviews

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6  shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Update Game Review of <span className='text-red-600'>{gameData.title}</span></h2>

                {/* Game Cover Image */}
                <label className="block mb-2 font-semibold">Game Cover Image (URL)</label>
                <input name='img' type="url" className="w-full p-2 border rounded-lg mb-4" defaultValue={gameData.img} placeholder="Enter image URL" />

                {/* Game Title */}
                <label className="block mb-2 font-semibold">Game Title</label>
                <input name='title' type="text" className="w-full p-2 border rounded-lg mb-4" defaultValue={gameData.title} placeholder="Enter game title" />

                {/* Review Description */}
                <label className="block mb-2 font-semibold">Review Description</label>
                <textarea name='description' className="w-full p-2 border rounded-lg mb-4" rows="4" defaultValue={gameData.description} placeholder="Write your review..."></textarea>

                {/* Rating */}
                <label className="block mb-2 font-semibold">Rating (1-5)</label>
                <select name='rating' className="w-full p-2 border rounded-lg mb-4" defaultValue={gameData.rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                {/* Publishing Year */}
                <label className="block mb-2 font-semibold">Publishing Year</label>
                <input name='publishingYear' type="number" className="w-full p-2 border rounded-lg mb-4" defaultValue={gameData.publishingYear} placeholder="Ex: 2025" />

                {/* Genre Dropdown */}
                <label className="block mb-2 font-semibold">Genre</label>
                <select name='genre' className="w-full p-2 border rounded-lg mb-4" defaultValue={gameData.genre}>
                    <option value="Action">Action</option>
                    <option value="RPG">RPG</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Strategy">Strategy</option>
                </select>

                {/* User Email (Read Only) */}
                <label className="block mb-2 font-semibold">User Email</label>
                <input type="email" className="w-full p-2 border rounded-lg mb-4 " value={user ? user.email : ''} readOnly />

                {/* User Name (Read Only) */}
                <label className="block mb-2 font-semibold">User Name</label>
                <input type="text" className="w-full p-2 border rounded-lg mb-4 " value={user ? user.displayName : ''} readOnly />

                {/* Update Button */}
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">
                    Update Review
                </button>
            </form>
        </div>
    );
};

export default UpdateReview;