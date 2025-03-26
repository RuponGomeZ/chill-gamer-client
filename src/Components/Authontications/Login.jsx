import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from './AuthProvider';
import { Link } from 'react-router-dom';



const Login = () => {
    const { googleLogin, loginWithEmailNameAndPassword } = useContext(AuthContext);
    // console.log(googleLogin);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailNameAndPassword(email, password);
    }

    const loginWithGoogle = () => {
        googleLogin()
    }

    return (
        <div>
            <div className="flex justify-center items-center h-screen ">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password" />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                            Login
                        </button>
                    </form>
                    <button onClick={loginWithGoogle} className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200 mt-4 gap-1 font-bold flex justify-center items-center'>
                        Google <FaGoogle />
                    </button>
                    <p>New Here? <Link to={"/signup"}>SignUp</Link></p>
                </div>

            </div>

        </div>
    );
};

export default Login;