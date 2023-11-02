import React from 'react'
import { useSelector } from 'react-redux'
import NotFound from './NotFound';

const CommonError = () => {

  const error  = useSelector( (state)=> (state.error) );

  return (
    <div className='common-error'>
    <div> 
      {
          error === null ? (<div><NotFound></NotFound></div>) : (<div>{error}</div>)
        }
    </div>
      
    </div>
  )
}

export default CommonError
