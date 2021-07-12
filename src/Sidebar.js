import React,{useState, useEffect} from 'react'
 import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import db from './firebase'
import SidebarOptions from './SidebarOptions';
import AddIcon from '@material-ui/icons/Add';
import { useGlobalContext } from './context';


export default function Sidebar() {
    const [{user}] = useGlobalContext();
  
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


 
    return (
        <div className="sidebar">
               
               <div className="sidebar_header">
               <div className="sidebar_info">
                   <h2>{user?.displayName} <ArrowDropDownIcon/></h2>
                   
                  
               </div>
               <CreateIcon/>
               </div>
               <SidebarOptions Icon={MoreVertIcon} title="Browse Slack"/>

               <SidebarOptions Icon={ArrowRightIcon} title="Direct Messages"/>
               <SidebarOptions Icon={ArrowRightIcon} title="Channels"/>
               <hr/>
               <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel"/>
              
            {channels.map((channel)=>(
                <SidebarOptions title={channel.name} id={channel.id} key={channel.id}/> 
            ))}


        </div>
    )
}
