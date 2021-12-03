import React from 'react';
import './DashboardFooter.css';

import Nhiet from '../HinhDashBoardFooter/Frame 886.png';
import Khoi from '../HinhDashBoardFooter/Frame 886 (1).png';
import Rung from '../HinhDashBoardFooter/Frame 886 (2).png';
import Dichchuyen from '../HinhDashBoardFooter/Frame 886 (3).png';
import Rodien from '../HinhDashBoardFooter/Frame 887.png';
import Cuatren from '../HinhDashBoardFooter/Frame 887 (1).png';
import CBCN from '../HinhDashBoardFooter/Frame 887 (2).png';
import CBCK from '../HinhDashBoardFooter/Frame 887 (3).png';
import BDKC from '../HinhDashBoardFooter/Frame 886 (4).png';
import BDXN from '../HinhDashBoardFooter/Frame 887 (4).png';
import BDTC from '../HinhDashBoardFooter/Frame 887 (6).png';
import BDQGSM from '../HinhDashBoardFooter/Frame 887 (5).png';
import CBK from '../HinhDashBoardFooter/Frame 886 (1).png';
import CBR from '../HinhDashBoardFooter/Frame 886 (2).png';

export default function DashboardFooter() {
    return (
        <div className="Footer">
            <div className="footercontentleft">
                <div className="CBATM">
                    Cảnh báo ATM
                </div>
                <div className="Nhiet">
                    <div className="Icon">
                        <img src={Nhiet} alt="" className="icon1"/>
                    </div>
                    <div className="wordnhiet">
                        Nhiệt
                    </div>
                    <div className="TB">
                        235 thiết bị
                    </div>
                </div>

                <div className="khoi">
                    <div className="Icon">
                        <img src={Khoi} alt="" className="icon2"/>
                    </div>
                    <div className="wordkhoi">
                        Khói
                    </div>

                    <div className="TB1">
                        136 thiết bị
                    </div>
                </div>

                <div className="rung">
                    <div className="Icon">
                        <img src={Rung} alt="" className="icon3"/>
                    </div>
                    <div className="wordrung">
                        Rung
                    </div>

                    <div className="TB2">
                        123 thiết bị
                    </div>
                </div>

                <div className="dichchuyen">
                    <div className="Icon">
                        <img src={Dichchuyen} alt="" className="icon4"/>
                    </div>
                    <div className="worddichchuyen">
                        Dịch chuyển
                    </div>
                    <div className="TB3">
                        534 thiết bị
                    </div>
                </div>

                <div className="rodien">
                    <div className="Icon">
                        <img src={Rodien} alt="" className="icon5"/>
                    </div>
                    <div className="wordrodien">
                        Rò điện
                    </div>
                    <div className="TB4">
                        345 thiết bị
                    </div>
                </div>

                <div className="cuatren">
                    <div className="Icon">
                        <img src={Cuatren} alt="" className="icon6"/>
                    </div>
                    <div className="wordcuatren">
                        Cửa trên
                    </div>
                    <div className="TB5">
                        234 thiết bị
                    </div>
                </div>

                <div className="CBCN">
                    <div className="Icon">
                        <img src={CBCN} alt="" className="icon7"/>
                    </div>
                    <div className="wordCBCT">
                       Cảnh báo cửa ngoài
                    </div>
                    <div className="TB6">
                        486 thiết bị
                    </div>
                </div>

                <div className="CBCK">
                    <div className="Icon">
                        <img src={CBCK} alt="" className="icon8"/>
                    </div>
                    <div className="wordCBCK">
                       Cảnh báo cửa két
                    </div>
                    <div className="TB7">
                        345 thiết bị
                    </div>
                </div>
            </div>

            <div className="footercontentright">
                <div className="CBPGD">
                    Cảnh báo phòng giao dịch
                </div>
                <div className="BDKC">
                    <div className="Icon">
                        <img src={BDKC} alt="" className="icon9"/>
                    </div>
                    <div className="wordBDKC">
                       Báo động khẩn cấp
                    </div>
                    <div className="TB8">
                        235 thiết bị
                    </div>
                </div>

                <div className="BDXN">
                    <div className="Icon">
                        <img src={BDXN} alt="" className="icon10"/>
                    </div>
                    <div className="wordBDXN">
                       Báo động xâm nhập
                    </div>
                    <div className="TB9">
                        136 thiết bị
                    </div>
                </div>

                <div className="BDTC">
                    <div className="Icon">
                        <img src={BDTC} alt="" className="icon11"/>
                    </div>
                    <div className="wordBDTC">
                       Báo động tại chỗ
                    </div>

                    <div className="TB10">
                        200 thiết bị
                    </div>
                </div>

                <div className="BDQGSM">
                    <div className="Icon">
                        <img src={BDQGSM} alt="" className="icon12"/>
                    </div>
                    <div className="wordBDQGSM">
                       Báo động qua GSM
                    </div>

                    <div className="TB11">
                        223 thiết bị
                    </div>

                </div>
                <div className="CBK">
                    <div className="Icon">
                        <img src={CBK} alt="" className="icon13"/>
                    </div>
                    <div className="wordCBK">
                      Cảnh báo khói
                    </div>
                    <div className="TB12">
                        542 thiết bị
                    </div>

                </div>
                <div className="CBR">
                    <div className="Icon">
                        <img src={CBR} alt="" className="icon14"/>
                    </div>
                    <div className="wordCBR">
                      Cảnh báo rung
                    </div>
                    <div className="TB13">
                        278 thiết bị
                    </div>
                </div>
            </div>
        </div>
    )
}