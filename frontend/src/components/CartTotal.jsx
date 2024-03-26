import { useSelector } from 'react-redux';

const CartTotal = () => {
  const { cartTotal } = useSelector(state => state.cart);
  return (
    <div className="card">
      <div className="mt-4 flex gap-4 justify-between pb-2">
        <p className="font-semibold">Total:</p>
        <p className="font-semibold">${cartTotal}</p>
      </div>
    </div>
  );
};

export default CartTotal;
