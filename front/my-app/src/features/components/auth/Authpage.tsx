import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
// import  '../../../styles/login.css';
import  '../../../styles/login.css';

export default function AuthPage() {
  return (
    <div className="container" >
      <div className="box">
        <h2>Register</h2>
        <Register />
      </div>
      <div className="box">
        <h2>Login</h2>
        <Login />
      </div>
    </div>
  );
}
