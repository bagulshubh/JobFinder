import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from './SideBar';
import {BsCheckLg} from 'react-icons/bs'
import { apply, save } from '../../services/applications';
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
      navigate("/update")
    }

    const withdrawHandler = ()=>{
      console.log("withdram")
    }

    const func = ()=>{
      console.log("in fuctin");
      return userDetails.applications.some((appa) => appa._id === currApp._id);
    }

    const check = ()=>{
      console.log("in fuctin");
      return userDetails.saved.some((appa) => appa._id === currApp._id);
    }

    const saveHandler = ()=>{

      dispatch(save(applicationId,userId,token));

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

              <div className='submit-btn' onClick={ userDetails.role === 'Employer' ? updateHandler : func ? withdrawHandler : applyHandler}>{
                userDetails.role==='Employer' ? ("Update") : func() ? ("Withdraw") : ("Apply")
              }
              
                </div>
                {
                  userDetails.role !== "Employer" ? check() ? <div className='submit-btn'>Unsave</div> : <div  className='submit-btn' onClick={saveHandler}>Save</div> :  (<span></span>)
                }
                
            
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
