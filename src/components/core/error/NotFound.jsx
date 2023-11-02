import React from 'react'
import notFound from '../../../assets/404-error.png'

const NotFound = () => {
  return (
    <div className='notfound-con'>
        <img src={notFound} className='notfound'></img>
    </div>
  )
}

export default NotFound
