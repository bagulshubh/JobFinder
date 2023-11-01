import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Profile = () => {

  const {userDetails} = useSelector( (state)=>(state.profile) ); 
  console.log(userDetails)
  return (
    <div>
      {
        userDetails === null ? (<div>404 Not Found</div>) : (
          <div>{userDetails.fname} {userDetails.lname} {userDetails.email} </div>
        )
      }
    </div>
  )
}

export default Profile
