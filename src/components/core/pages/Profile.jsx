import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import NotFound from '../error/NotFound'

const Profile = () => {

  const {userDetails} = useSelector( (state)=>(state.profile) ); 
  console.log(userDetails)
  return (
    <div>
      {
        userDetails === null ? (<NotFound></NotFound>) : (
          <div>{userDetails.fname} {userDetails.lname} {userDetails.email} </div>
        )
      }
    </div>
  )
}

export default Profile
