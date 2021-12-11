import React from 'react'

import TopBar from '../../Topbar/Topbar'
import SideBar from '../../Sidebar/Sidebar'

import Header from '../QLCBHeader/QLCBHeader'
import Content from '../QLCBContent/QLCBContent'

import './QLCB.css'

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