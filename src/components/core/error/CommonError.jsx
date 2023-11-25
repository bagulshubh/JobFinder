import React from 'react'
import { useSelector } from 'react-redux'
import NotFound from './NotFound';

const CommonError = () => {

  const {errorMessage}  = useSelector( (state)=> (state.error) );

  return (
    <div className='common-error'>
    <div> 
      {
          errorMessage === null ? (<div><NotFound></NotFound></div>) : (<div className="error-div">
          
          {errorMessage}</div>)
        }
    </div>
      
    </div>
  )
}

export default CommonError
