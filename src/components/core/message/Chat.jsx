import React from 'react'
import {RxAvatar} from 'react-icons/rx'
import { useSelector } from 'react-redux';


const Chat = (props) => {
    const chat = props.chat;
    const setdata = props.setdata;
    const {userDetails} = useSelector((state)=>(state.profile));

    const clickHandler = ()=>{
      setdata(chat);
    }

  return (
    <div className='chat' onClick={clickHandler}>
        <RxAvatar></RxAvatar>
        {userDetails.fname === chat.sender ? <p>{chat.reciver}</p> : <p>{chat.sender}</p> }
    </div>
  )
}

export default Chat
