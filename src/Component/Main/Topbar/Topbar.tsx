import React from 'react'

import './Topbar.css';

import VNM from './HinhTopbar/VNM.png';
import DropDown from './HinhTopbar/Down.png';


export default function sidebar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topRight">
                    <div className="topbg">

                        <img src={VNM} alt="" className=""/>
                        <p className="writeVNM">VNM </p>
                        <img src={DropDown} alt="" className="DropDown"/>

                    </div>

                    <div>
                        <img src="" alt="" className="Avatar" />  
                        <p className="DTMM">Nghia</p>
                        <img src={DropDown} alt="" className="DropDown1"/>
                    </div>
                </div>
            </div>  
        </div>
    )
}