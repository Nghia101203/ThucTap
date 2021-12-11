import React from 'react'

import './Main.css'

import TopBar from '../Topbar/Topbar'
import SideBar from '../Sidebar/Sidebar'

export default function TrangChinh() {
    return(
        <div className="bgTrangChinh">
            <TopBar/>
            <SideBar/>
        </div>
            
    );
}