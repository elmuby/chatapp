import React, { useState } from 'react'
import MessageBubble from './MessageBubble'
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../authentication/Firebase';

const ChatArea = () => {
 
  const [message, setMessage]  = useState([]);

  const q = query(collection(db, "messages"));
  const unsubscribe = onSnapshot(q, (querySnapshot)=>{
    const message = [];
    querySnapshot.forEach((doc)=>{
      message.push({...doc.data(), id:doc.id});
    })
    setMessage(message)
  })
  return (
    <div className='pb-44 pt-20 container'>
      {message.map(message=>(
        <MessageBubble key={message.id} message={message}/>
      ))}
      
    </div>
  )
}

export default ChatArea
