import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Profile from './components/Profile';
import Contact from './components/Contact';
import GeneralGallery from './components/GeneralGallery';
import Albums from './components/Albums';
import AlbumsType from './components/AlbumsType';
import ProductDetails from './features/components/products/ProductDetails';
import Cart from './features/components/cart/Cart';
import Wishlist from './features/components/wishlist/Wishlist';
import Products from './features/components/products/Products';
import LandingPage from './features/components/auth/pages/LandingPage';
import LoginPage from './features/components/auth/pages/LoginPage';
import RegisterPage from './features/components/auth/pages/RegisterPage';
import About from './features/components/navbar/About';
import   HomePage  from './features/components/navbar/HomePage';
import Shipping from './features/components/checkout/Shipping';
// import CheckOutSteps from './features/components/checkout/CheckOutSteps';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="profile" element={<Profile />} />
            <Route path="category" element={<Products />}>
              <Route path=":name" element={<Products />} />
            </Route>
            <Route path="product" element={<ProductDetails />} >
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            {/* <Route path="/auth" element={<Authpage />} /> */}

            <Route path="upload" element={<GeneralGallery />} />

            {/* <Route path="register" element={<Register />} /> */}
            {/* <Route path="/home" element={<Authpage />} /> */}
            <Route path="contact" element={<Contact />} />
            <Route path="/auth" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/shipping" element={<Shipping />}/>
           
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<HomePage />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

