import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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

// actions

import { action as RegisterAction } from './pages/RegisterPage';
import { action as LoginAction } from './pages/LoginPage';
import { store } from './store';

const queryClient = new QueryClient();

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
        path: '/single/:title',
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
    action: LoginAction(store),
  },
  {
    path: '/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
    action: RegisterAction,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
