import React, { useEffect, useState } from 'react'
import { getCandidateInfo } from '../../services/candidate';
import { useDispatch, useSelector } from 'react-redux';

const CandidateCard = (props) => {
    const id = props.id;
    const dispatch = useDispatch();

    const {token} = useSelector((state)=>(state.auth))
    const [data,setdata] = useState("");

    useEffect( ()=>{
      dispatch(getCandidateInfo(id,token,setdata));
    },[id])
    

  return (
    <div className='candidatecard-con'>
      
      {
        data === ""  ? (<div></div>) : (<div className='candidate-card'>

          <div>{data.fname} {data.lname}</div>
          <div>{data.email}</div>

        </div>)
      }
    </div>
  )
}

export default CandidateCard
