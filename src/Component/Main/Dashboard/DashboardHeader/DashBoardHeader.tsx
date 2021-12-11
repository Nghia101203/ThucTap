import React from 'react'
import { DatePicker } from 'antd'

import './DashBoardHeader.css'

export default function BCATMHeader() {
    return(
        <div>
            <div className="TittleDashBoardFromDashBoard">
                Dashboard
            </div>

            <div className="TitleDMWY ">
                Thứ 2 , ngày 05/06/2021
            </div>

            <div className="">
                <div className="TitleDashboard ">
                    Thời Gian :
                </div>
                
                <div className="DashboardCallendar ">
                    <DatePicker/>
                </div>
            </div>
        </div>
    );
}