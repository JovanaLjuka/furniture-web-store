import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null;
};

const initialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload };
      // console.log(action.payload);
      state.user = user;
      // console.log(user);
      // console.log(state.user);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logoutUser: state => {
      localStorage.removeItem('user');
      state.user = null;
      toast.success('Logged out');
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
