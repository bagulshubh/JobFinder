import React from 'react'
import NotFound from '../error/NotFound';

const EmployerProfile = (props) => {

    const userDetails = props.userDetails;

  return (
    <div className='profile-wrapper'>
      {
        userDetails === null || Object.keys(userDetails).length === 0 ? (<NotFound></NotFound>) : (

            <div className='profile-con'>

                <div className='profile-name'>
                    <div>{userDetails.fname} {userDetails.lname} </div>
                    <div>{userDetails.additionalInfo.companyName}</div>
                </div>

                <div className='profile-div'>
                    <div>Email: {userDetails.email}</div>
                    <div>Mobile No: {userDetails.additionalInfo.mobileNo}</div>
                </div>

                <div className='profile-div'>
                    <div>Collage: {userDetails.additionalInfo.collageName}</div>
                    <div>Percentage: {userDetails.additionalInfo.percentage}</div>
                    <div>Passing Year: {userDetails.additionalInfo.gYear}</div>
                </div>

                <div className='profile-div'>
                    About: {userDetails.additionalInfo.about}
                </div>

            </div>



        )
      }
    </div>
  )
}

export default EmployerProfile
