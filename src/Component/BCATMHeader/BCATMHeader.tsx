import React from 'react'
import NutMuiTen from '../../Images/muiten1.png';
import DropDown from '../../Images/Down.png';
import { DatePicker } from 'antd';
import moment from 'moment';
import './BCATMHeader.css'

export default function TbAtmHeader() {
    const dateFormat='DD/MM/YY'
    return (
        <div className="Top">
        <div className="TittleTop">
            <p className="BaoCao6">Báo Cáo</p>
            <img src={NutMuiTen} alt="" className="MuiTen1"/>
            <p className="BCTPGD1">Báo Cáo theo ATM</p>

        </div>
        <div className="Wordtop">
            <p className="DVQL1">Đơn vị quản lý</p>
            <div className="NDVQL1">
                <p className="WriteNDVQl1"> Nhập đơn vị quản lý </p>
            </div>
            <p className="LCB51">Loại cảnh báo</p>
                <div className="TC81">
                <img src={DropDown} alt="" className="dd1"/>
                <p className="TC111">Tất cả</p>

                </div>
            <p className="TT181">Trạng thái</p> 
            <div className="TC301">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="dd221"/>

            </div>   
            <p className="Thoigian221">Thời gian</p>
            <div className="Boxxtime1">
            <DatePicker defaultValue={moment()} format={dateFormat} />
            <p className="TT101">Từ ngày đến ngày</p>
            </div>
            <button type="button" className="btnlogin15">
            <p className="btntim">Tìm</p>
            </button>
            <button type="button" className="btnlogin16">
            <p className="btnxuatfile">Xuất file Excel</p>
            </button>
        </div>

       
    </div>
    )
}