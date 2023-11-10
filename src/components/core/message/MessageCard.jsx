import React from 'react'

const MessageCard = (props) => {
    const message = props.message;
    const user = props.user;
    console.log(user , message.sender)
  return (
    <div className={user === message.sender ? 'message' : 'message sended'}>
      {
        message.chat
      }
    </div>
  )
}

export default MessageCard
