import React, { useState } from 'react'
import MessageCard from './MessageCard';
import {AiOutlineSend} from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { sendMessage } from '../../../services/message';
import { useNavigate } from 'react-router-dom';


const ViewMessage = (props) => {
    const data = props.data;
    const user = props.user;
    const id = props.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const sendmessageHandler = ()=>{
        console.log("sendMessage")
        console.log(id)
        console.log(data)
        console.log(body)
        dispatch(sendMessage(id,data._id,body,navigate));
    }

    const [body,setmessage] = useState("");

    const changeHandler = (event)=>{
        setmessage(event.target.value);
    }

    const keyHandler =(event)=>{
        if(event.key === "Enter"){
            sendmessageHandler();
            console.log("ENter pressed")
        }
    }

  return (
    <div className='viewmessage-con'>
        <div className='message-input'>
            <input type='text' placeholder='Type message' onChange={changeHandler} onKeyDown={keyHandler}></input>
            <AiOutlineSend className='icon' onClick={sendmessageHandler} ></AiOutlineSend>
        </div>
        {
            Object.keys(data).length === 0 ? <div>No Messages</div> : <div className='message-con'>
                {
                    data.subChat.map((message)=>{
                        return (
                            <MessageCard message={message} user={id}></MessageCard>
                        )
                    })
                }
            </div>
        }
        
    </div>
  )
}

export default ViewMessage
