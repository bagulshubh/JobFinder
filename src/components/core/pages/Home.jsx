import React, { useEffect, useState } from 'react'
import homepageImage from '../../../assets/homepage_image.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setError } from '../../../slices/error';
import { getCount } from '../../../services/count';
import Goals from '../../Goals';

const Home = () => {

  const {userDetails} = useSelector((state)=>(state.profile));
  const {data} = useSelector((state)=>(state.count));
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

  useEffect(()=>{

    dispatch(getCount(navigate));
    console.log("this is data;",data)

  },[]);

  //add a state which will named refresh for each refresah

  return (

    <div className='homepage-wrapper'>

        

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

        <div className='hero-con'>

            <div className='top-div'>
              <div className='box' id='box1'><p>Jobs</p>{data.jobs}</div>
              <div className='box' id='box2'><p>Candidates</p>{data.candidates}</div>
              <div className='box' id='box3'><p>Accepted</p>{data.accepted}</div>
            </div>

            <div className='bottom-div'>
              <div className='box' id='box21'><p>Hired</p>{data.hires}</div>
              <div className='box' id='box22'><p>Companies</p>{data.companies.length}</div>
            </div>

        </div>

        <Goals></Goals>

   

    </div>

   
  )
}

export default Home
