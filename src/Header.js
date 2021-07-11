import React from 'react'
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutline from '@material-ui/icons/HelpOutline'
export default function Header() {
    return (
        <div className="header">
                <div className="header_left">
                     
                    <Avatar/>
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
