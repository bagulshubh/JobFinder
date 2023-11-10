import React, { useEffect, useState } from 'react'
import { getCandidateInfo } from '../../services/candidate';
import { useDispatch, useSelector } from 'react-redux';
import { createSocket } from '../../services/message';
import { useNavigate } from 'react-router-dom';

const CandidateCard = (props) => {
    const id = props.id;
    const dispatch = useDispatch();

    const {token} = useSelector((state)=>(state.auth))
    const [data,setdata] = useState("");
    const navigate = useNavigate();
    const {userDetails} = useSelector((state)=>(state.profile)) 

    useEffect( ()=>{
      dispatch(getCandidateInfo(id,token,setdata));
    },[id])

    const acceptHandler = ()=>{
      dispatch(createSocket(userDetails._id,id,navigate));
    }
    

  return (
    <div className='candidatecard-con'>
      
      {
        data === ""  ? (<div></div>) : (<div className='candidate-card'>

          <div>
            <div>{data.fname} {data.lname}</div>
            <div>{data.email}</div>
          </div>

          <div>
            <div className='btn'>View Resume</div>
            <div className='btn' onClick={acceptHandler}>Accept</div>
          </div>

          
        </div>)
      }
    </div>
  )
}

export default CandidateCard
