import React from "react";
import { UserAuth } from "../context/AuthContext";

const MessageBubble = ({ message }) => {
  const{currentUser} = UserAuth();
  return (
    <div>
      <div className={`chat ${currentUser ? 'chat-end' : 'chat-start'} chat-start`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={message.avatar}
            />
          </div>
        </div>
        <div className="chat-header">
          {message.name}
          <time className="text-xs opacity-50"></time>
        </div>
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default MessageBubble;
