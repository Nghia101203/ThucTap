import React from 'react'
import Muiten from '../HinhBCATM/muiten1.png';
import DropDown from '../HinhBCATM/Down.png';
import { DatePicker } from 'antd';
import './BCATMHeader.css'

export default function BCATMHeader() {
    const dateFormat='DD/MM/YY'
    return (
        <div className="">

            <p className="BaoCaoHD">Báo Cáo</p>
            <img src={Muiten} alt="" className="Muiten"/>
            <p className="BCTPGD1">Báo Cáo theo ATM</p>

        <div className="">

            <p className="TitleDVQL">Đơn vị quản lý:</p>

            <div className="asd">
                <p className="WriteNDVQl1"> Nhập đơn vị quản lý </p>
            </div>

            <p className="TitleLCB">Loại cảnh báo:</p>

            <div className="asdF1">
                <img src={DropDown} alt="" className="Icon"/>
                <p className="TC111">Tất cả</p>
            </div>

            <p className="TitleTT">Trạng thái:</p> 

            <div className="asdF2">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="dd221"/>
            </div>   

            <p className="Thoigian221">Thời gian:</p>

            <div className="Boxxtime1">
                <DatePicker format={dateFormat} className="DatePicker"/>
                <p className="TT101">Từ ngày đến ngày</p>
            </div>

            <button type="button" className="btnTim">
                <p className="btntim">Tìm</p>
            </button>
            
            <button type="button" className="btnXFE">
                <p className="btnxuatfile">Xuất file Excel</p>
            </button>
        </div>

       
    </div>
    )
}