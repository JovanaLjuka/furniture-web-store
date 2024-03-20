import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { myFetch } from '../utils';

const url = '/';
const initialState = {
  cartItems: [],
  amount: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
  try {
    const response = await myFetch(url);
    return response.data.products;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, { payload }) => {
      console.log(state);
      console.log(payload);
      const cartItem = state.cartItems.find(item => item._id === payload.id);
      console.log(cartItem);
      cartItem.amount = cartItem.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(item => item._id === payload.id);
      cartItem.amount = cartItem.amount -= 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(item => item._id !== itemId);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCartItems.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const { increase, decrease, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
