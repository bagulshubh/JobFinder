import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {CgProfile} from 'react-icons/cg'
import { logout } from '../../services/auth'
import {BiMessage} from 'react-icons/bi'


const Navbar = () => {

  const {token} = useSelector( (state)=> (state.auth) )
  const {userDetails} = useSelector( (state)=> (state.profile) );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(userDetails);

  
  return (
    <div className='nav-con'>
      
      <Link className='logo-con' to='/'>
        <img src={logo} className='logo-img'></img>
        <div>JobFinder</div>
      </Link>

      <div className='tags-con'>
        <Link to='/' className={location.pathname==='/' ? 'tag active' : 'tag' }>Home</Link>
        
          {
            userDetails === null || userDetails === undefined || Object.keys(userDetails).length === 0 ?  (<Link to='/discover' className={location.pathname==='/discover' ? 'tag active' : 'tag' }>Discover</Link>)  : userDetails.role === 'seeker' || userDetails.role=== 'Seeker' ? (<Link to='/discover' className={location.pathname==='/discover' ? 'tag active' : 'tag' }>Discover</Link>) : (<Link to='/listing' className={location.pathname==='/listing' ? 'tag active' : 'tag' }>Listing</Link>) 
          }
       
        
        <Link to='contact' className={location.pathname==='/contact' ? 'tag active' : 'tag' }>Contact</Link>
        <Link to='aboutus' className={location.pathname==='/aboutus' ? 'tag active' : 'tag' }>About us</Link>
      </div>


      {
        token !== null ? (
          <div className='auth-con'>
            {
              userDetails===null || userDetails.image === "" ||  Object.keys(userDetails).length===0 ?  <Link to='/profile' className={location.pathname==='/profile'  ? 'profile-nav profile-nav-active' : 'profile-nav'}><CgProfile></CgProfile></Link>
              :
              <Link to='/profile' className='profile-image-con'><img src={userDetails.image} className='profile-image'></img></Link>
            }
            
            <Link to="/messages" className={location.pathname==='/messages' ? 'profile-nav profile-nav-active' : 'profile-nav'}><BiMessage></BiMessage></Link>
            <div className='auth-btn' onClick={ ()=>{dispatch(logout(navigate))} }>Log Out</div>

          </div>
        ):(
          <div className='auth-con'>
            <Link className='auth-btn' to='/login'>Log In</Link>
            <Link className='auth-btn' to='signup'>Sign Up</Link>
          </div>
        )
      }
     

    </div>
  )
}

export default Navbar
