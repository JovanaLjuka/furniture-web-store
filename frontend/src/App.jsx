import axios from 'axios';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  LandingPage,
  LoginPage,
  OrdersPage,
  ProductsPage,
  RegisterPage,
  SingleProductPage,
} from './pages';

import { Error } from './components';

// loaders

import { loader as ProductsLoader } from './pages/ProductsPage';
import { loader as SingleProductLoader } from './pages/SingleProductPage';

// const apiCall = () => {
//   axios.get('http://localhost:5002/products').then((response) => {
//     console.log(response.data)
//   })
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <Error />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
        errorElement: <Error />,
        loader: ProductsLoader,
      },
      {
        path: '/:_id',
        element: <SingleProductPage />,
        errorElement: <Error />,
        loader: SingleProductLoader,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
      },
      {
        path: 'orders',
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
