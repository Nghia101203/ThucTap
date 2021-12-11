import React from 'react'
import Topbar from '../../Topbar/Topbar'
import Sidebar from '../../Sidebar/Sidebar'

import Header from '../BCPGDHeader/BCPGDHeader'
import Content from '../BCPGDContent/BCPGDContent'

import './BCPGD.css'

export default function BCPGD() {
    return (
        <div className="">
            <div className="">
                <Header/>
                <Content/>
            </div>
        </div>
    )
}