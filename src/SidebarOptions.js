import React from 'react'

export default function SidebarOptions({Icon, title}) {
    return (
        <div className="sideBarOption">
            {Icon && <Icon className="sideBarOption_icon"/> }
            {Icon? (
                <h3>{title}</h3>
            ):<h3 className="sideBarOption_channel">
                <span className="sideBarOption_hash"># {title}</span></h3>}
       
        </div>
    )
}
