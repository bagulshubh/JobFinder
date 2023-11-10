import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Chat from './Chat';
import ViewMessage from './ViewMessage';

const Message = () => {
    const {userDetails} = useSelector((state)=>(state.profile));
    const [chats,setchats] = useState(userDetails.messages);
    console.log(chats)

    const [data,setdata] = useState({});

  return (
    <div className='message-wrapper'>
      
      <div className='message-left'>
        {
            Object.keys(chats).length === 0 ? <div>No Messages</div> : <div className='chats-con'>

                {
                    
                    chats.map((chat)=>(
                        <Chat chat={chat} setdata={setdata}></Chat>
                    ))
                }

                
            </div>
        }
      </div>


      <div className='message-right'>
        {
          Object.keys(data).length === 0 ? <div className='select'>Select Chat to View it in Details</div> : <ViewMessage data={data} user={userDetails.fname} id={userDetails._id}></ViewMessage>
        }
      </div>
    
    </div>
  )
}

export default Message
