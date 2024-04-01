import React from 'react';
import { AdminDashboard, AdminHeader, Pagination } from '../components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  const user = useSelector(state => state.user.user);
  console.log(user);
  return (
    <>
      {/* only admin can have access */}
      {user.role === 'admin' ? (
        <div>
          <AdminHeader />
          <AdminDashboard />
          <Pagination />
        </div>
      ) : (
        <div>
          <p className="text-xl font-bold capitalize">Unathorized access</p>
          <Link to="/">Go Home</Link>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
