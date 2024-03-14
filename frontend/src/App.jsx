import axios from 'axios'
import React from 'react'
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

const App = () => {
  return (
    <div>
      <h1>Furniture Web Store</h1>
      <button onClick={() => apiCall()}>Make API call</button>
    </div>
  )
}

export default App
