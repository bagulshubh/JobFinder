import React from 'react'
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {CgProfile} from 'react-icons/cg'
import { logout } from '../../services/auth'



const Navbar = () => {

  const {token} = useSelector( (state)=> (state.auth) )
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className='nav-con'>
      
      <Link className='logo-con' to='/'>
        <img src={logo} className='logo-img'></img>
        <div>JobFinder</div>
      </Link>

      <div className='tags-con'>
        <div>Home</div>
        <div>Discover</div>
        <div>Contact</div>
        <div>About us</div>
      </div>


      {
        token ? (
          <div className='auth-con'>
            <Link to='/profile' className='profile-nav'><CgProfile></CgProfile></Link>
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
