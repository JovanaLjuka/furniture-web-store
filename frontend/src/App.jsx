import axios from 'axios'
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
} from './pages'

const apiCall = () => {
  axios.get('http://localhost:5002/products').then((response) => {
    console.log(response.data)
  })
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'products',
        element: <ProductsPage />,
        errorElement: <ErrorPage />,
      },
      {
        index: 'products/:id',
        element: <SingleProductPage />,
        errorElement: <ErrorPage />,
      },
      {
        index: 'cart',
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
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
