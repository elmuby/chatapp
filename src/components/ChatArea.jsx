import React from 'react'
import MessageBubble from './MessageBubble'

const ChatArea = () => {
  const messages = [
    {
      id:1,
      name: "Peace miriya",
      text: "hello world",
      time: "1200 hrs"
    },

    {
      id:2,
      name: "Olamide Badoo",
      text: "Hello React",
      time: "12000"
    },
    {
      id:3,
      name: "Shola Bite",
      text: "Hello everybody",
      time: "12000 hrs"
    }
  ]
  return (
    <div className='pb-44 pt-20 container'>
      {messages.map((message)=>(
        <MessageBubble key={message.id} message={message}/>
      ))}
      
    </div>
  )
}

export default ChatArea
