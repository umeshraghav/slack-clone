import { Button } from '@material-ui/core';
import React,{useState} from 'react';
import db from './firebase';
import {useGlobalContext} from './context' 
import firebase from 'firebase';
export default function ChatInput({channelName, channelId}) {

    console.log("DID",channelId)
   const [{user}] = useGlobalContext()
   const [input, setInput] = useState('')
   
    const sendMessage =(event)=>{
        event.preventDefault();

        if(channelId){
                db.collection('room').doc(channelId).collection('messages').add({
                    message: input,
                    timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userimage: user.photoURL    
                })
        }
        setInput('')
    }

    const handleInput =(e)=>{
        setInput(e.target.value)
    }
    return (
        <div className="chat_Input">
                    <form>
                        <input type="text" value={input} onChange={handleInput} placeholder={`message #${channelName?.toLowerCase()}`}/>
                           <button type="submit" onClick={sendMessage}>Send</button> 
                    </form>
        </div>
    )
}
