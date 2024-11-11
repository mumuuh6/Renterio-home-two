import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
                <p className="text-2xl text-gray-700 font-semibold">Oops! Page not found</p>
                <p className="text-gray-500 mt-2">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link to="/" className="mt-6 inline-block px-6 py-3 bg-purple-500 text-white rounded-full shadow hover:bg-purple-600 transition duration-300">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
