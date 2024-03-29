import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { sendotp, signup } from '../../../services/auth';
import { useDispatch } from 'react-redux';
import signuplogo from '../../../assets/signuplogo.png'

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
    const [loading,setloading] = useState(false);

    const {fname,lname,email,password,confirmpassword,otp} = user;

    const changeHandler = (event) =>{

        setuser( (prev)=> ({
            ...prev,
            [event.target.name]:event.target.value,
        }) )
        
    }

    
    const  subminHandler = async()=>{
       
        dispatch(sendotp(user.email,setloading,navigate));
        setsubmitFlag(true);
       
    }

    const singupHandler = async()=>{
        dispatch(signup(user,navigate,setloading));
    }

    const keyHandler = (event)=>{
        if(event.key === "Enter"){
            subminHandler();
        }
    }

    const keyHandler2 = (event)=>{
        if(event.key === "Enter"){
            singupHandler();
        }
    }

    return (
    <div className='signup-wrapper'>
      
        {
            loading ? <div className='lds-dual-ring'></div> :

            submitFlag ? (
                <div className='otp-con'>

                    <label>Enter OTP</label>
                    <input type='text' placeholder='otp' name='otp' value={otp} onChange={changeHandler} onKeyDown={keyHandler2} ></input>

                    <button onClick={singupHandler} className='submit-btn'>Submit</button>


            </div>) : (
 
            <div className='signup-con'>
                    <img src={signuplogo} className='signup-logo'></img>
 
                    <p className='login-heading'>Sign Up</p>

                    <div className='signup-name'>
                        <label>FirstName:</label>
                        <input type='text' placeholder='First Name' onChange={changeHandler} name='fname' value={fname}></input>
                        <label>Last Name:</label>
                        <input type='text' placeholder='Last Name' onChange={changeHandler} name='lname' value={lname}></input>
                    </div>

                    <div className='sign-email'>
                        <label>Email</label>
                        <input type='email'  placeholder='Enter Your Email' onChange={changeHandler} name='email' value={email}></input>
                    </div>

                    <div className='signup-name'>
                        <label>Password: </label>
                        <input type='password' placeholder='Password' onChange={changeHandler} name='password' value={password}></input>

                        <label>Confirm Password</label>
                        <input type='password' placeholder='Confirm Password' onChange={changeHandler} name='confirmpassword' value={confirmpassword} onKeyDown={keyHandler}></input>
                    </div>

                    <div className='radio-con'>
                        <div>
                            <input type='radio' id='Seeker' name
                            ='role' onClick={changeHandler}  value="Seeker" defaultChecked></input>
                            <label for='Seeker'>Seeker</label>
                        </div>
                        
                        <div>
                            <input type='radio' id='Employer' name='role' value="Employer" onClick={changeHandler} ></input>
                            <label for='Employer'>Employer</label>
                        </div>
                    </div>

                    <button onClick={subminHandler} className='submit-btn'>Submit</button>

            </div>
     
            )
        }

    </div>
  )
}

export default Signup
