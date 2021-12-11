import React from 'react'
import './DashboardContent.css'

import Hinh1 from '../HinhDashboard/Thongso1.png'
import Hinh2 from '../HinhDashboard/Thongso2.png'
import Hinh3 from '../HinhDashboard/Thongso3.png'
import Hinh4 from '../HinhDashboard/Thongso4.png'

export default function DashBoardContent() {
    return (
        <div>
            <img src={ Hinh1 } alt="" className="Hinh1Dashboard"/>
            <img src={ Hinh2 } alt="" className="Hinh2Dashboard"/>
            <img src={ Hinh3 } alt="" className="Hinh3Dashboard"/>
            <img src={ Hinh4 } alt="" className="Hinh4Dashboard"/>
        </div>
    );
}