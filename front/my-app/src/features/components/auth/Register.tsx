import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import {
loginAsync, registerAsync , selectRegistered

} from '../../login/loginSlice';
import styles from './Counter.module.css';
import { CompletionTriggerKind } from 'typescript';
import { useNavigate } from 'react-router-dom';


export function Register() {
  const navigate = useNavigate();

  const notify = () => toast("new  "+ username + "  added!");
  const notregister = () => toast("please fill all the fields");
  const registered = useAppSelector(selectRegistered);
  const dispatch = useAppDispatch();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [email, setemail] = useState("")

  const handleClick = () => {
    if (username != "" || password != "" || email != ""){
      dispatch(registerAsync({username, password, email}))
      navigate('/login');
    }
    else{
      notregister()
    }
  };
  

  useEffect(() => {
    if (registered === true){
      notify()
    }
    else{
      console.log("not registered")
    }
    }, [registered])
    
   
    return (
      <div>
        
        <br></br>
      username: <input onChange={(e)=> setusername(e.target.value)}></input><br></br>
      password: <input onChange={(e)=> setpassword(e.target.value)}></input><br></br>
      email: <input onChange={(e)=> setemail(e.target.value)}></input><br></br>
      {/* <button onClick={()=>dispatch(registerAsync({username, password, email}))}>Register</button> */}
      <button onClick={handleClick}>Register</button>

      <ToastContainer/>
  
      </div>
    );
  }
  