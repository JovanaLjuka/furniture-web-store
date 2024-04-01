import React from 'react';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <nav className="bg-[#b1b2b6bb] w-full py-2 text-neutral-content flex justify-between">
      <h1 className="text-3xl ml-5 p-3">Admin Panel</h1>
      <Link to="/">
        <button className="btn btn-outline mr-5 mt-2 p-2">Go Home</button>
      </Link>
    </nav>
  );
};

export default AdminHeader;
