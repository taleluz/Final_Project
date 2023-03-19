import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from './features/components/auth/Login';
import Profile from './components/Profile';
import { Register } from './features/components/auth/Register';
import Contact from './components/Contact';
import GeneralGallery from './components/GeneralGallery';
import Albums from './components/Albums';
import AlbumsType from './components/AlbumsType';
import ProductDetails from './features/components/products/ProductDetails';
import Cart from './features/components/cart/Cart';
import Wishlist from './features/components/wishlist/Wishlist';
import Products from './features/components/products/Products';
import Authpage from './features/components/auth/Authpage';



const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="category" element={<Products />}> 
              <Route path=":name" element={<Products />}/>
              </Route>
            <Route path="product" element={<ProductDetails />} >
            <Route path=":id" element={<ProductDetails />}/>
            </Route>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/auth" element={<Authpage/>} />

            <Route path="upload" element={<GeneralGallery />}/> 
      
            <Route path="register" element={<Register />} />
            <Route path="contact" element={<Contact />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

