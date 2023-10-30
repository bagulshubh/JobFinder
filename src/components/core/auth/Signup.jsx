import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { sendotp, signup } from '../../../services/auth';
import { useDispatch } from 'react-redux';

const Signup = () => {

    const [user,setuser] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        confirmpassword:"",
        role:"Seeker",    
        otp:"",   
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [submitFlag,setsubmitFlag] = useState(false);

    const {fname,lname,email,password,confirmpassword,otp} = user;

    const changeHandler = (event) =>{

        setuser( (prev)=> ({
            ...prev,
            [event.target.name]:event.target.value,
        }) )
        
    }

    
    const  subminHandler = async()=>{
        
        sendotp(user.email);
        setsubmitFlag(true);

    }

    const singupHandler = async()=>{
        dispatch(signup(user,navigate));
    }

    return (
    <div>
      
        {
            submitFlag ? (<div>

                <label>Enter OTP</label>
                <input type='text' placeholder='otp' name='otp' value={otp} onChange={changeHandler}></input>

                <button onClick={singupHandler}>Submit</button>


            </div>) : (
 
            <div>

    <div>
        <div>
            <label>
                <p>First Name</p>
                <input type='text' placeholder='First Name' onChange={changeHandler} name='fname' value={fname}></input>
            </label>
            <label>
                <p>Last Name</p>
                <input type='text' placeholder='Last Name' onChange={changeHandler} name='lname' value={lname}></input>
            </label>
        </div>
        <label>
            <p>Email</p>
            <input type='email'  placeholder='Enter Your Email' onChange={changeHandler} name='email' value={email}></input>
        </label>
        <div>
            <label>
                <p>Password</p>
                <input type='password' placeholder='Password' onChange={changeHandler} name='password' value={password}></input>
            </label>
            <label>
                <p>Confirm Password</p>
                <input type='password' placeholder='Confirm Password' onChange={changeHandler} name='confirmpassword' value={confirmpassword}></input>
            </label>
        </div>
        <div>
            <input type='radio' id='Seeker' name
            ='role' onClick={changeHandler}  value="Seeker"></input>
            <label for='Seeker'>Seeker</label>
            
            <input type='radio' id='Employer' name='role' value="Employer" onClick={changeHandler} ></input>
            <label for='Employer'>Employer</label>
        </div>

        <button onClick={subminHandler}>Submit</button>

    </div>

            </div>
     
            )
        }

    </div>
  )
}

export default Signup
