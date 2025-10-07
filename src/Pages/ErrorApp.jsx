import React from 'react';
import ErrorAppImg from '../assets/assets/App-Error.png'
const EroreApp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 text-center">
  <img className="w-72 h-72 mb-8" src={ErrorAppImg} alt="Error Image" />
  <h1 className="text-6xl font-bold mb-4 text-gray-800">
    OPPS!! APP NOT FOUND
  </h1>
  <p className="text-2xl text-gray-600 mb-8">
    The App you are requesting is not found on our system.  please try another apps
  </p>
  <div>
  <Link to="/"  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 py-3 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:opacity-90 cursor-pointer">
  Go Back!
  </Link>
  </div>
</div>
  );
};

export default EroreApp;