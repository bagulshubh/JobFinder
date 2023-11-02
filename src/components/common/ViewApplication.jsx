import React from 'react'
import { useSelector } from 'react-redux'

const ViewApplication = () => {
  
    const {currApp} = useSelector( (state)=>  (state.application) );
  
    return (
    <div>

        {
            currApp!==null? (<div>{currApp.title}</div>) : (<div></div>)
        }
    </div>
  )
}

export default ViewApplication
