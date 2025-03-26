import React, { useContext } from 'react';
import { AuthContext } from '../Authontications/AuthProvider';

const AddReviews = () => {
    const { user } = useContext(AuthContext);

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

        // Adding to all reviews
        fetch("http://localhost:5000/add-reviews", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => { console.log(data) })
            .catch(err => { console.log(err) })

        //  Adding to my reviews
        fetch("http://localhost:5000/add-my-reviews", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        form.reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Submit a Game Review</h2>

                {/* Game Cover Image */}
                <label className="block mb-2 font-semibold">Game Cover Image (URL)</label>
                <input name='img' type="url" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter image URL" />

                {/* Game Title */}
                <label className="block mb-2 font-semibold">Game Title</label>
                <input name='title' type="text" className="w-full p-2 border rounded-lg mb-4" placeholder="Enter game title" />

                {/* Review Description */}
                <label className="block mb-2 font-semibold">Review Description</label>
                <textarea name='description' className="w-full p-2 border rounded-lg mb-4" rows="4" placeholder="Write your review..."></textarea>

                {/* Rating */}
                <label className="block mb-2 font-semibold">Rating (1-10)</label>
                <input name='rating' type="number" min="1" max="10" className="w-full p-2 border rounded-lg mb-4" />

                {/* Publishing Year */}
                <label className="block mb-2 font-semibold">Publishing Year</label>
                <input name='publishingYear' type="number" className="w-full p-2 border rounded-lg mb-4" placeholder="Ex: 2024" />

                {/* Genre Dropdown */}
                <label className="block mb-2 font-semibold">Genre</label>
                <select name='genre' className="w-full p-2 border rounded-lg mb-4">
                    <option value="Action">Action</option>
                    <option value="RPG">RPG</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Strategy">Strategy</option>
                </select>

                {/* User Email (Read Only) */}
                <label className="block mb-2 font-semibold">User Email</label>
                <input type="email" className="w-full p-2 border rounded-lg mb-4 bg-gray-100" value={user ? user.email : ''} readOnly />

                {/* User Name (Read Only) */}
                <label className="block mb-2 font-semibold">User Name</label>
                <input type="text" className="w-full p-2 border rounded-lg mb-4 bg-gray-100" value={user ? user.displayName : ''} readOnly />

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReviews;