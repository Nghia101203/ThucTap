import React from 'react'
import DashBoardContent from '../DashboardContent/DashboardContent';
import DashBroadHeader from '../DashboardHeader/DashBoardHeader';
import DashBoardFooter from '../DashboardFooter/DashBoardFooter';

import './Dashboard.css';

export default function Dashboard() {
    return (
        <div className="DashBoard">
            <DashBroadHeader/>
            <DashBoardContent/>
            <DashBoardFooter/>
        </div> 
    )
}