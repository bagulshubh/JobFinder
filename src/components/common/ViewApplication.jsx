import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from './SideBar';
import {BsCheckLg} from 'react-icons/bs'
import { apply } from '../../services/applications';
import { useNavigate } from 'react-router-dom';


const ViewApplication = () => {
  
    const {currApp} = useSelector( (state)=>  (state.application) );
    const {token} = useSelector( (state)=>(state.auth) )
    const {userDetails} = useSelector( (state)=>(state.profile) );

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const applicationId = currApp._id;
    let userId  ;
    if(userId!==null){
      userId = userDetails._id;
    }
    else{
      userId = null;
    } 
    

    const applyHandler=async()=>{
      if(Object.keys(userDetails).length === 0){
        navigate("/login");
      }
      else
        dispatch(apply(applicationId,userId,token,navigate));
    }

    const updateHandler = ()=>{
      console.log("Update")
    }
  
    return (
    <div>

        <SideBar></SideBar>

        <div className='right-wrapper'>
      
            <div className='app-main-con'>

              <div className='app-main-tit'>
                <div>{currApp.title}</div>
                <p>{currApp.status}</p>
              </div>

              <div className='app-company'>
                {currApp.company}
              </div>

              <div className='app-conditions'>
                
                {
                  currApp.conditions.map( (condition)=>(
                    <div><BsCheckLg></BsCheckLg>{condition}</div>
                  ) )
                }
              </div>

              <div className='jd'>Job Description : {currApp.jobDescription}</div>

              <div className='submit-btn' onClick={ userDetails.role === 'Employer' ? updateHandler : applyHandler}>{
                userDetails.role==='Employer' ? ("Update") : ("Apply")
              }
                </div>
            
            </div>

            <div className='app-extrainfo-con'>
              
                <div>Posted On: {currApp.date.substring(0,10)}</div>
                <div>Exprience: {currApp.exp}</div>
                <div>Location: {currApp.location}</div>
                <div>Salary: {currApp.salary}</div>
              
            </div>

            
            
        </div>

        

    </div>
  )
}

export default ViewApplication
