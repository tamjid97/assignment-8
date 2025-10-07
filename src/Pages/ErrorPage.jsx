import React from 'react';
import errorImg from '../assets/assets/error-404.png'
import { Link, NavLink } from 'react-router';

const ErrorPage = () => {




  return (
<div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
  <img className="w-72 h-72 mb-8" src={errorImg} alt="Error Image" />
  <h1 className="text-6xl font-bold mb-4 text-gray-800">
    Oops, page not found!
  </h1>
  <p className="text-2xl text-gray-600 mb-8">
    The page you are looking for is not available.
  </p>
  <div>
  <Link to="/"  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-3 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:opacity-90 cursor-pointer">
  Go Back!
  </Link>
  </div>
</div>

  );
};

export default ErrorPage;