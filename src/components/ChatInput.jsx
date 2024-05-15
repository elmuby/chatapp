import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../authentication/Firebase";

const ChatInput = () => {
  const [text, setText] = useState("");
  const { currentUser } = UserAuth();
  const { displayName, photoURL, uid } = currentUser;

  const handleSend = async (e) => {
    e.preventDefault(); 
    console.log(currentUser);
    console.log(text);
    if (text.trim() === "") {
      alert("Please type a message");
      return false;
    } else {
      try {
        // send to firebase

        const docRef = await addDoc(collection(db, "messages"), {
          text: text,
          avatar: photoURL,
          name: displayName,
          time: serverTimestamp(),

        });
      
      } catch (e) {
        console.log(e);
      }
      setText("");
  
    }
  };

  return (
    <div className="bg-amber-300 fixed bottom-0 w-full py-10 shadow-lg">
      <form className="px-2 container flex " onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Send Message.."
          className="input  focus:outline-none w-full bg-amber-200 rounded-full"
          onChange={(e) => {setText(e.target.value)  
          }}
          value={text}
        />
        <button
          className="w-auto bg-amber-700 text-white rounded-r-lg text-lg px-5"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
