import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartList = () => {
  const listOfProducts = useSelector(state => state.cart.cartItems);
  return (
    <div>
      {listOfProducts.map(product => {
        return <CartItem key={product.cartId} cartItem={product} />;
      })}
    </div>
  );
};

export default CartList;
