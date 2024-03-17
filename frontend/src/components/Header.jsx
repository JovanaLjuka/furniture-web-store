import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-khaki-100 w-screen py-2 text-neutral-content">
      <div className="align-elements flex justify-center sm:justify-end">
        {/* USER */}
        {/* LINKS */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm md:text-base ">
            Sign in
          </Link>
          <p>/</p>
          <Link to="/register" className="link link-hover text-xs sm:text-sm md:text-base ">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
