import React from 'react'
import homepageImage from '../../../assets/homepage_image.png'

const Home = () => {

  return (
    <div className='homepage-con'>

      <div className='right-con'>
        <div className='homepage-main-heading'>Welcome to JobSeeker</div>
        <p className='homepage-para'>Where startups and job seekers  connect <br></br> Find Your Fit Here </p>
        <div className='homepage-btn-con'>
          <div className='black-btn home-btn'>Find your next hire</div>
          <div className='white-btn home-btn'>Find your next job</div>
        </div>
      </div>

      <div className='left-con'>
        <img src={homepageImage}>{/*Imgae will insert here*/}</img>
      </div>
    
    </div>
  )
}

export default Home
