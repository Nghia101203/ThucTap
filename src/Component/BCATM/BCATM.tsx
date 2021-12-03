import React from 'react'
import Topbar from '../BCATMHeader/BCATMHeader'
import Sidebar from '../BCATMContent/BCATMContent'
import TbAtmMain from '../BCATMMain/BCATM'
import './BCATM.css'

export default function BCATM() {
    return (
        <div className="TbAtm1">
            <Topbar />
            <div className="TbAtm2">
                <Sidebar />
                <TbAtmMain/>
            </div>

            
        </div>
    )
}