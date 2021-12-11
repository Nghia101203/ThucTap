import React from 'react'

import Header from '../QTCHeader/QTCHeader'
import Content from '../QTCContent/QTCContent'

import TopBar from '../../Topbar/Topbar'
import SideBar from '../../Sidebar/Sidebar'

import './QTC.css'

export default function GSMHeader() {
    return (
        <div className="">
            <div className="">
                <Header/>
                <Content/>
            </div>
        </div>
    );
}