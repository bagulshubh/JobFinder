import React, { useEffect, useState , useRef } from 'react';

const Notification = (props) => {
  const socket = props.socket;
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    if (socket.current) {
      socket.current.on("notification-receive", (msg) => {
        console.log("Notification received:", msg);
        setArrivalMessage({ fromSelf: false, message: msg });
      });
      console.log(socket)
    }
    else{
      console.log("ther is no socket")
    }
  }, []);

  useEffect(() => {
    if (arrivalMessage !== null) {
      setMessages((prev) => [...prev, arrivalMessage]);
      console.log(arrivalMessage);
    }
  }, [arrivalMessage,socket]);

  return (
    <div>
      This is the notification page
    </div>
  );
};

export default Notification;
