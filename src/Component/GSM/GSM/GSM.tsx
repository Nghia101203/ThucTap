import React from 'react'
import Content from '../GSMContent/GSMContent'
import Header from '../GSMHeader/GSMHeader'
import Map from '../GSMMap/GSMMap'

import TopBar from '../../Topbar/Topbar'
import SideBar from '../../Sidebar/Sidebar'

import './GSM.css'

export default function GSMHeader() {
    return (
        <div className="">
            <div className="">
                <Header/>
                <Map/>
                <Content/>
            </div>
        </div>
    );
}