import React from 'react'

const ApplicationCard = (props) => {

    const app = props.app;
    const flag = props.flag;

  return (
    <div className='applicationcard'>
      
        <div className='app-main'>
          <div className='app-main-title'>
            <p className='app-main-heading'>{app.title}</p>
            <p className='app-main-status'>{app.status}</p>
          </div>
          {
            flag==='true' ? (<div className='submit-btn'>Apply</div>) : (<div className='submit-btn'>Update</div>)
          }
          
        </div>

        <div className='app-second'>
          <div>{app.company}, </div>
          <div>{app.location}</div>
        </div>

        <div className='app-salary'>Salary:  {app.salary}</div>

    </div>
  )
}

export default ApplicationCard
