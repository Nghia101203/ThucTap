import React from 'react'
import './DashboardContent.css';

import Thietbi from '../HinhDashBoardContent/Frame 887.png';
import ATM from '../HinhDashboardContent/Frame 886.png';
import PGD from '../HinhDashBoardContent/Frame 887 (1).png';
import A531 from '../HinhDashBoardContent/Group 59.png';
import A756 from '../HinhDashBoardContent/Group 59 (1).png';
import A546 from '../HinhDashBoardContent/Group 59 (2).png';

export default function DashboardContent() {
    return (
        <div className="DashboardContent">
            <div className="ContentLeft">
                <div className="ContentLeft1">
                    <div className="Iconlogo1">
                        <img src={Thietbi} alt="" className="logo1"/>
                    </div>

                    <div className="word">
                        Tổng số thiết bị
                    </div>

                    <div className="Number">
                        4.052 Thiết bị
                    </div>
                </div>

                <div className="ContentLeft2">
                    <div className="Iconlogo1">
                        <img src={ATM} alt="" className="logo2"/>
                    </div>
                    <div className="word1">
                        ATM
                    </div>
                    <div className="Number1">
                        1.021 Thiết bị
                    </div>
                </div>

                <div className="ContentLeft3">
                    <div className="Iconlogo1">
                        <img src={PGD} alt="" className="logo3"/>
                    </div>

                    <div className="word2">
                        Phòng giao dịch
                    </div>

                    <div className="Number2">
                        1.432 Thiết bị
                    </div>
                </div>
                
                <div className="ContentRight">
                    <div className="ContentRight1">
                        <div className="TitleRight">
                            Trạng thái thiết bị
                        </div>

                        <div className="word3">
                            kết nối nguồn AC
                        </div>

                        <div className="logo4">
                            <img src={A756} alt="" className="logo4"/>
                        </div>

                        <div className="word4">
                            Đang kết nối
                        </div>

                        <div className="logo4">
                            <img src={A531} alt="" className="logo5"/>
                        </div>

                        <div className="word5">
                            Bật cảnh báo
                        </div>

                        <div className="logo4">
                            <img src={A546} alt="" className="logo6"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}