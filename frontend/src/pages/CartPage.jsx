import { useSelector } from 'react-redux';
import { CartTotal, CartList } from '../components';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const user = null;
  const total = useSelector(state => state.cart.CartTotal);

  if (total === 0) {
    return <h2>Your cart is empty</h2>;
  }
  return (
    <main className="align-elements w-[85%] place-content-center">
      <h1 className="font-bold text-xl my-7">Shopping Cart</h1>
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-9 pr-10">
          <CartList />
        </div>
        <div className="lg:col-span-3">
          <CartTotal />
          {user ? (
            <Link className="btn btn-outline btn-block mt-8" to="/checkout">
              Checkout
            </Link>
          ) : (
            <Link
              className="btn btn-outline btn-block mt-8 hover:text-xl link-brown-800 capitalize"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default CartPage;
