import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/authApi';
import { toast, ToastContainer } from 'react-toastify';
const LoginComp = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Redirect if already logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { token, data } = await loginUser(userId, password);
            // console.log("data",data)
            localStorage.setItem('token', token);
            localStorage.setItem('UID', data.UID);
            localStorage.setItem('mosque Name', data.mosqueName);
            localStorage.setItem('mosque Area', data.MosqueArea);
            // localStorage.setItem('token', token);
            toast.success('Login successful!');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (err) {
            console.log(err)
            toast.error(err);
        }finally{
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4A2D1B] to-black text-white overflow-hidden">

            <ToastContainer position="top-center" autoClose={3000} />
            <div className="absolute inset-0 opacity-10 bg-[url('https://png.pngtree.com/background/20230527/original/pngtree-the-big-door-of-a-mosque-as-light-shine-through-it-picture-image_2757141.jpg')] bg-cover bg-center bg-no-repeat animate-pulse"></div>
            <div className="absolute w-96 h-96 bg-[#4A2D1B] opacity-20 rounded-full blur-3xl animate-ping"></div>

            <div className="z-10 bg-white bg-opacity-70 p-8 rounded-2xl shadow-lg w-[90%] max-w-md border border-[#4A2D1B]">
                <h1 className="text-3xl font-bold text-center text-[#f3a02b] mb-2 animate-fadeIn">
                    بِسْمِ ٱللَّٰهِ
                </h1>
                <p className="text-center mb-6 text-[#4A2D1B] animate-fadeIn delay-150">
                    Welcome back! Please login to continue
                </p>

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-[#4A2D1B] mb-1">User ID</label>
                        <input
                            type="text"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-200 text-[#4A2D1B] focus:outline-none focus:ring-2 focus:ring-[#4A2D1B]"
                            placeholder="Enter your user ID"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-[#4A2D1B] mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-200 text-[#4A2D1B] focus:outline-none focus:ring-2 focus:ring-[#4A2D1B]"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

                    <button
                        type="submit"
                        className={`w-full py-2 bg-[#4A2D1B] hover:bg-[#4A2D1B] transition-all rounded font-semibold cursor-pointer shadow-lg flex items-center justify-center  ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center space-x-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
                                </svg>
                                <span>Logging in...</span>
                            </div>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComp;
