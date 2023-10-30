import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../../../slices/authSlice'
import {useSelector   } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { login } from '../../../services/auth'

const LogIn = () => {

  const dispatch = useDispatch();

  const [user,setUser] = useState({
    email:"",
    password:"",
  })

  const {token} = useSelector( (state)=> state.auth )
  
  const navigate = useNavigate();
  const {email,password} = user;

  const changeHandler = (event)=>{
    setUser( (prev)=>({
      ...prev , [event.target.name]:event.target.value,
    }) )
  }

  const submitHandler = async()=>{
    dispatch(login(user,navigate));
  }

  return (
    <div className='login-con'>

      <div className='login-left-div'>
        
          <label>Email</label>
          <input type='email' placeholder='Enter Your Email' onChange={changeHandler} name='email' value={email}></input>

          <label>Password</label>
          <input type='password' placeholder='Password' onChange={changeHandler} name='password' value={password}></input>
        
          <button onClick={submitHandler}>Submit</button>
      </div>

    </div>
  )
}

export default LogIn
