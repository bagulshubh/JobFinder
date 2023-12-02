import React from 'react'
import { useSelector } from 'react-redux'
import NotFound from './NotFound';
import { useNavigate } from 'react-router-dom';

const CommonError = () => {

  const {errorMessage}  = useSelector( (state)=> (state.error) );
  const navigate = useNavigate();
  return (
    <div className='common-error'>
    <div> 
      {
          errorMessage === null ? (<div><NotFound></NotFound></div>) : (
          
            <div className="error-con">
              <div className='oops'>Oops!</div>
              <div className='error-message'>{errorMessage}</div>
              <div className='submit-btn' onClick={()=>{
                navigate("/")
              }}>GO TO HOMEPAGE</div>
            </div>
            
          )
        }
    </div>
      
    </div>
  )
}

export default CommonError
