import React from 'react'
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
// import './App.css';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  loginAsync, selectLooged, logout, selectAccess, selectUsername, refreshAsync
} from '../features/login/loginSlice';
import '../../src/style.css'
import { Outlet, Link } from "react-router-dom";
import Profile from './Profile';
import { Navbar } from "@nextui-org/react";

const MyNavbar = () => {

  const dispatch = useAppDispatch()
  const logged = useAppSelector(selectLooged)
  const username = useAppSelector(selectUsername)
  const remember = localStorage.getItem("remember")


  useEffect(() => {

    const token = localStorage.getItem("refresh")
    let remember = localStorage.getItem("remember")
    if (remember !== null)
      if (JSON.parse(remember) === true) {
        if (token)
          dispatch(refreshAsync(token))
      }
  }, [])


  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };


  
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <nav className='topNav'>
        <ul className='topNav'>
          <li className='topNav'>
            <div className="header__burger">
              <div className="dropdown">
                <button className="dropbtn" onClick={handleDropdownClick}> <img className="header__burger-icon entered lazyloaded" src="https://www.kaza.co.il/wp-content/themes/kaza/assets/img/icon-burger.png" alt="" width="26" height="19" data-lazy-src="https://www.kaza.co.il/wp-content/themes/kaza/assets/img/icon-burger.png" data-ll-status="loaded" /></button>
                {showDropdown &&
                  <div className="dropdown-content">
                    <Link to={'/category/Sofas'} >Sofas</Link>
                    <Link to={'/category/Shelves'}>Shelves</Link>
                    <Link to={'/category/Closets'} >Closets</Link>
                    <Link to={'/category/Chairs'} >Chairs</Link>
                    <Link to={'/category/Tables'}>Tables</Link>
                    <Link to={'/about'}>About</Link>

                  </div>
                }
              </div>
            </div>

          </li >
          {/* w3 example */}
          <li>  <div className="search-container">
            <form action="/action_page.php">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">Search</button>
            </form>
          </div>
          </li>
          {/* changeeeeeeeeeeeeeeeeeeeeee move to center */}
          <li className='topNav' style={{ textAlign: "center"  }}><Link to={'/'}><i className="fa fa-home"></i></Link></li>

          <>
            <li className="topnav" style={{ float: "right" }}><Link to={'/profile'}>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              {username}</Link></li>

            <li className='topNav' style={{ float: "right" }}><Link to={'/cart'}>
              <i className="fa fa-shopping-cart"></i></Link></li>
          </>

          <>
            <li className='topNav' style={{ float: "right" }}><Link to={'/register'}>
              <i className="fa fa-heart" aria-hidden="true"></i>
            </Link></li>
            {/* <li className='topNav' style={{ float: "right" }}><Link to={'/login'}>Log in</Link></li> */}
          </>

        </ul >
        <Outlet />
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} My React App</p>
            <Link to={'/contact'} style={{ color: 'white', textDecoration: 'none' }}>Contact us</Link>
          </div>
        </footer>
      </nav >
    </div >
  )
}

export default MyNavbar