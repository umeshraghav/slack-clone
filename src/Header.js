import React from 'react'
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutline from '@material-ui/icons/HelpOutline'
import { useGlobalContext } from './context';

export default function Header() {
    const [{user}] = useGlobalContext();
    return (
        <div className="header">
                <div className="header_left">
                     
                    <Avatar
                    
                        className="header_avatar"
                        alt = {user?.displayName}
                        src={user?.photoURL}
                    />
                    <AccessTimeIcon/>
                </div>
                <div className="header_center">
                    <input type="text" placeholder="Search here"/>
                   <SearchIcon/>
                   

                   
                </div>
                <div className="header_right">
                    <HelpOutline/>
                   
                </div>
        </div>
    )
}
