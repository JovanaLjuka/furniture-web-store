import { useSelector } from 'react-redux';
import { CheckoutForm, CartTotal } from '../components';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import { store } from '../store';

export const loader = store => async () => {
  const user = store.getState().user.user;

  if (!user) {
    toast.warn('You must be logged in');
    return redirect('/login');
  }
  return null;
};

const CheckoutPage = () => {
  const cartItems = useSelector(state => state.cart.totalItems);
  // console.log(cartItems);

  if (cartItems.length === 0) {
    return <h2 className="text-xl font-semibold">Your cart is empty</h2>;
  }
  return (
    <main className="align-elements">
      <CheckoutForm />
    </main>
  );
};

export default CheckoutPage;
