import React, { useContext, useEffect } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {

    const { user, createUser, error, setError } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const handleSignUp = (e) => {
        e.preventDefault();
        setError(null)

        setTimeout(() => {
            setError(null);
        }, 2);

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        if (!regex.test(password)) {
            Swal.fire({
                title: "Password didn't match requirement",
                text: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                icon: "error",
                draggable: true
            });
            // setError("Password must contain at least one uppercase letter, one lowercase letter, and one number");
            return;
        }

        createUser(email, password, name, photoURL)
            .then(() => {
                setError(null)
                navigate(location?.state?.from || "/")
            })

        fetch("https://game-review-server-site.vercel.app/signUp", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, photoURL })
        })
    }

    return (
        <div >
            <div className="flex justify-center items-center lg:h-screen ">
                <div className="bg-gray-500 p-8 rounded-lg shadow-md lg:w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                name='name'
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
                            <input
                                name='photoURL'
                                type="text"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter photo URL"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />

                        </div>
                        {error && <p className="text-red-800 mb-4">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                            Sign Up
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Signup;