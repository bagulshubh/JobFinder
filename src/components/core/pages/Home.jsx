import React, { useDebugValue } from 'react'
import homepageImage from '../../../assets/homepage_image.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setError } from '../../../slices/error';

const Home = () => {

  const {userDetails} = useSelector((state)=>(state.profile));
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const btnHandler = (path,role)=>{

    if(userDetails===null || Object.keys(userDetails).length === 0){
      navigate("/login");
    }  
    else if(userDetails.role===role){
      navigate(`/${path}`);
    }
    else{
      dispatch(setError(`SignUp as ${role} to access ${path}`));
      navigate("/error");
    }

  }

  return (
    <div className='homepage-con'>

      <div className='right-con'>
        <div className='homepage-main-heading'>Welcome to JobSeeker</div>
        <p className='homepage-para'>Where startups and job seekers  connect <br></br> Find Your Fit Here </p>
        <div className='homepage-btn-con'>

          <div className='black-btn home-btn' onClick={()=>{
            btnHandler("createListing","Employer")
          }}>Find your next hire</div>
        
          <div className='white-btn home-btn' onClick={()=>{btnHandler("discover","seeker")}}>Find your next job</div>
        </div>
      </div>

      <div className='left-con'>
        <img src={homepageImage}>{/*Imgae will insert here*/}</img>
      </div>
    
    </div>
  )
}

export default Home
