import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import NotFound from '../error/NotFound'
import EmployerProfile from '../profile/EmployerProfile'
import SideBar from '../../common/SideBar'

const Profile = () => {

  const {userDetails} = useSelector( (state)=>(state.profile) ); 
  console.log(userDetails)
  return (
    <div>

    <SideBar flag={true}></SideBar>

      {
        userDetails === null ? (<NotFound></NotFound>) : <div className='right-wrapper'>
          <EmployerProfile userDetails={userDetails}></EmployerProfile>
        </div>
      }
    </div>
  )
}

export default Profile
