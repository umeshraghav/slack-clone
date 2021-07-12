import React from 'react'
import db from './firebase';
import { useHistory } from 'react-router';
export default function SidebarOptions({Icon, title,id, addChannelOption}) {
    
    const history = useHistory();
    const selecChannel=()=>{
        if(id){
            history.push(`/room/${id}`)
        }
        else{
           history.push(title)
        }
    }
   
    const addChannel=()=>{
           const channelName = prompt("Enter the Channel Name");
         if(channelName){
            db.collection('room').add({
                name: channelName
            })
         }
   }
    
    
    return (
        <div className="sideBarOption" onClick={addChannelOption ? addChannel : selecChannel}>
            {Icon && <Icon className="sideBarOption_icon"/> }
            {Icon? (
                <h3>{title}</h3>
            ):<h3 className="sideBarOption_channel">
                <span className="sideBarOption_hash"># {title}</span></h3>}
       
        </div>
    )
}
