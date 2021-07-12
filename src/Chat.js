import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase'
import Message from './Message';
import ChatInput from './ChatInput'

export default function Chat() {


    const [roomDetails, setRoomDetails] = useState(null)
const [roomMessages, setroomMessages] = useState([])
const {roomId} = useParams();

console.log("Room ",roomDetails)

useEffect(()=>{
        if(roomId){
            db.collection('room').doc(roomId).onSnapshot((snapshot)=>{
                 setRoomDetails(snapshot.data())
            })
        }
        db.collection('room').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot((snapshot)=> 
        setroomMessages(snapshot.docs.map((doc)=>doc.data()))
               
        )

},[roomId])
  
    return (
        <div className="chat">
            
            <div className="chat_header">
                    <div className="chat_headerLeft">
            <h4 className="chat_channelName">
                
            <strong># {roomDetails?.name}</strong>
                   <StarBorderOutlinedIcon/>
            </h4>
                    </div>
                    <div className="chat_headerRight">
                       <p> <InfoOutlinedIcon/> Deatils </p>
                    </div>
            </div>
            <div className="chat_messages">
                {roomMessages.map((msg)=>{
                        const {message, timestamp, user, userimage}= msg;
                     return    <Message message={message}
                            timestamp={timestamp}
                            user = {user}
                            userImage={userimage}

                          />
})}
          
            </div>
            <ChatInput channelName ={roomDetails?.name} channelId={roomId} />
        </div>
    )
}
