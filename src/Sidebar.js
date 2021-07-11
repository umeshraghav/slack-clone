import React,{useState, useEffect} from 'react'
 import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import db from './firebase'
import SidebarOptions from './SidebarOptions';

export default function Sidebar() {
    const [channels, setChannels] = useState([]);


useEffect(()=>{
        db.collection('room').onSnapshot(snapshot=>(
            setChannels(snapshot.docs.map((doc)=>(
                {
                    id: doc.id,
                    name : doc.data().name
                }
            )))
        ))

},[])


console.log("Channels",channels)
    return (
        <div className="sidebar">
               
               <div className="sidebar_header">
               <div className="sidebar_info">
                   <h2>Umesh Raghav <ArrowDropDownIcon/></h2>
                   
                  
               </div>
               <CreateIcon/>
               </div>
               <SidebarOptions Icon={MoreVertIcon} title="Browse Slack"/>

               <SidebarOptions Icon={MoreVertIcon} title="Browse Slack"/>
               <SidebarOptions Icon={ArrowRightIcon} title="Channels"/>
               <SidebarOptions Icon={ArrowRightIcon} title="Direct Messages"/>
              
            {channels.map((channel)=>(
                <SidebarOptions title={channel.name} key={channel.id}/> 
            ))}
        </div>
    )
}
