import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  totalItems: 0,
  cartTotal: 0,
  amount: 0,
  isLoading: true,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      // console.log(action.payload);
      const { product } = action.payload;
      const item = state.cartItems.find(item => item.cartId === product.cartId);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.totalItems += product.amount;
      state.cartTotal += product.price * product.amount;
      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Added to cart');
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const product = state.cartItems.find(item => item.cartId === cartId);
      state.cartItems = state.cartItems.filter(item => item.cartId !== cartId);
      state.totalItems -= product.amount;
      state.cartTotal -= product.price * product.amount;
      localStorage.setItem('cart', JSON.stringify(state));
      toast.error('Item removed from cart');
    },
    increase: (state, action) => {
      const { cartId } = action.payload;
      const product = state.cartItems.find(item => item.cartId === cartId);
      if (product) {
        product.amount += 1;
        state.totalItems += 1;
        state.cartTotal += product.price;
        localStorage.setItem('cart', JSON.stringify(state));
        toast.success('Increased amount');
      }
    },
    decrease: (state, action) => {
      const { cartId } = action.payload;
      const product = state.cartItems.find(item => item.cartId === cartId);
      if (product && product.amount > 1) {
        product.amount -= 1;
        state.totalItems -= 1;
        state.cartTotal -= product.price;
        localStorage.setItem('cart', JSON.stringify(state));
        toast.success('Decreased amount');
      }
    },

    clearCart: state => {
      state.cartItems = [];
      state.totalItems = 0;
      state.cartTotal = 0;
      localStorage.setItem('cart', JSON.stringify(initialState));
    },
  },
});

export const { addItem, increase, decrease, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
