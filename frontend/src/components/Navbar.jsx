import { GiShoppingCart } from 'react-icons/gi';
import { HiBars3 } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import { GiSofa } from 'react-icons/gi';
import { NavLinks } from '../components';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const totalItems = useSelector(state => state.cart.totalItems);
  return (
    <nav className="bg-khaki-50 w-screen navbar align-elements m-0 font-color font-style">
      <div className="navbar-start font-style">
        <NavLink
          to="/"
          className="hidden lg:flex ml-4 text-4xl p-1 font-ojuju border-none text-[#7b97cec7] items-center tracking-[1.4rem] font-extralight"
        >
          <GiSofa className="text-4xl" /> <span className="ml-2">UFCS</span>
        </NavLink>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-outline lg:hidden">
            <HiBars3 className="m-2 text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-style"
          >
            <NavLinks />
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-style">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="cart" className="btn btn-ghost btn-circle btn-md mx-5 cursor-pointer">
          <div className="cart-icon indicator">
            <GiShoppingCart className="h-10 w-10 text-lavander-400" />
            <span className="badge badge-sm indicator-item">{totalItems}</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
