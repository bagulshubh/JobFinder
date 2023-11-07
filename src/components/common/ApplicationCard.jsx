import React from 'react'
import { useNavigate } from 'react-router-dom';
import { setApplication ,  apply } from '../../services/applications';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrApp } from '../../slices/applicationSlice';

const ApplicationCard = (props) => {

    const app = props.app;
    const flag = props.flag;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {userDetails} = useSelector( (state)=>(state.profile) ); 
    const {token} = useSelector( (state)=> (state.auth) );

    const clickHandler = ()=>{
      console.log("Clicked");
      console.log(app)
      dispatch(setApplication(app,navigate));

    }

    const applyHandler = ()=>{
      //-> application id
      //-> user id 
      dispatch(apply(app._id,userDetails.id,token,navigate));
      console.log("Apply Clieked");
    }

    const updateHandler = ()=>{
      dispatch(setCurrApp(app));
      navigate("/update");
    }

    const fuct = () => {
      console.log("in fuctin");
      return userDetails.applications.some((appa) => appa._id === app._id);
    };
    

  return (
    <div className='applicationcard' >
      
        <div className='app-main'>
          <div className='app-main-title' onClick={clickHandler}>
            <p className='app-main-heading'>{app.title}</p>
            <p className='app-main-status'>{app.status}</p>
          </div>
          {
            userDetails.role === "Employer" ? <div className='submit-btn' onClick={updateHandler}>Update</div> : fuct() ? <div  className='submit-btn'>Withdraw</div> : <div className='submit-btn' onClick={applyHandler}>Apply</div>
          }
          
        </div>

        <div className='app-second' onClick={clickHandler}>
          <div>{app.company}, </div>
          <div>{app.location}</div>
        </div>

        <div className='app-salary' onClick={clickHandler}>Salary:  {app.salary} </div>

    </div>
  )
}

export default ApplicationCard
