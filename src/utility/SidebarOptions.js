import React from 'react'

function SidebarOptions({Icon, text}) {
    return (
        <div className="sidebarIcon">
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
