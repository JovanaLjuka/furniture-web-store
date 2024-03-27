import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/CartSlice';
import { logoutUser } from '../features/UserSlice';
import axios from 'axios';
import { store } from '../store';
import { current } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const url = 'http://localhost:5002/auth/logout';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LinUser = useSelector(state => state.user.user);
  console.log(LinUser);

  const currentState = store.getState();
  console.log(currentState);
  console.log(current);

  const handleLogout = () => {
    navigate('/');
    // await axios.get(url);
    dispatch(clearCart());
    dispatch(logoutUser());
    toast.success('Logged out successfully');
  };
  return (
    <header className="bg-khaki-100 w-full py-2 text-neutral-content">
      <div className="align-elements flex justify-center sm:justify-end">
        {LinUser ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {LinUser.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={() => {
                handleLogout();
              }}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm md:text-base ">
              Log in
            </Link>
            <p>/</p>
            <Link to="/register" className="link link-hover text-xs sm:text-sm md:text-base ">
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
