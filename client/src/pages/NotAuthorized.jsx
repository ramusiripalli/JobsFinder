// src/pages/NotAuthorized.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
      <h1 className="text-5xl font-bold text-red-500 mb-4">403</h1>
      <p className="text-xl">You are not authorized to view this page.</p>
      <Link to="/" className="text-cyan-400 mt-4 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotAuthorized;
