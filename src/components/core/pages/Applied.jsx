import React from 'react'
import SideBar from '../../common/SideBar'
import { useSelector } from 'react-redux'
import NotFound from '../error/NotFound';
import ApplicationCard from '../../common/ApplicationCard';

const Applied = () => {

    const {userDetails} = useSelector((state)=>(state.profile));
    

  return (
    <div>

        <SideBar flag={true}></SideBar>

        <div className='right-wrapper'>

            {
                userDetails === null || Object.keys(userDetails).length === 0 ? (<NotFound></NotFound>) : (
                    <div className='applicationcard-con'>
                        {
                            userDetails.applications.map((app)=>{
                                return (
                                    <ApplicationCard app={app} flag="1"></ApplicationCard>
                                )
                            })
                        }
                    </div>
                )
            }

        </div>

      
    </div>
  )
}

export default Applied
