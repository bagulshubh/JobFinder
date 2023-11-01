import React, { useEffect } from 'react'
import { getallApplications } from '../../../services/applications'
import { useDispatch } from 'react-redux'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import ApplicationCard from '../../common/ApplicationCard'


const Discover = () => {
    const {token} = useSelector( (state)=> (state.auth) );
    const dispatch = useDispatch();
    const {applications} = useSelector( (state)=>(state.application) );

    useEffect (()=>{
        //get data from serivices  about all available application
        dispatch(getallApplications(token));
    },[])

  return (
    <div className='discover-con'>
      
        <div className='discover-heading'>
            Job Listings
        </div>

        <div className='discover'>
            {
                applications === null || applications.length===0 ? (<div>Login or Signup</div>) : (

                    <div className='applicationcard-con'>
                        {         
                            applications.map( (app)=>{
                            return (
                                <ApplicationCard app={app} flag='true'></ApplicationCard>
                            )
                        } )}
                    </div>
                )
                
            }
        </div>

    </div>
  )
}

export default Discover
