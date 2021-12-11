import React from 'react'
import Right from './HinhBCPGD/Right.png'
import DropDown from './HinhBCPGD/Down (1).png'
import { DatePicker } from 'antd';
import moment from 'moment';
import './BCPGDHeader.css'

export default function BCATMHeader() {
    const dateFormat='DD/MM/YY'
    return (
        <div className="">

            <p className="TitleBaoCao">Báo Cáo</p>
            <img src={Right} alt="" className="IconSuyRa"/>
            <p className="TitleBCTPGD">Báo cáo theo phòng giao dịch</p>

        <div className="">

            <p className="TitleDVQL">Đơn vị quản lý:</p>

            <div className="bgNDVQL">
                <p className="WriteNDVQl1"> Nhập đơn vị quản lý </p>
            </div>

            <p className="TitleF1">Loại cảnh báo:</p>

            <div className="bgF1">
                <img src={DropDown} alt="" className="IconSuyRa"/>
                <p className="TC111">Tất cả</p>
            </div>

            <p className="TitleF2">Trạng thái:</p> 

            <div className="bgF2">
                <p className="TC291">Tất cả</p>
                <img src={DropDown} alt="" className="IconF"/>
            </div>   

            <p className="TitleF3">Thời gian:</p>

            <div className="bgF3">
                <DatePicker defaultValue={moment()} format={dateFormat} className="DatePickerBCTPGDFix"/>
                <p className="TT101">Từ ngày đến ngày</p>
            </div>

            <button type="button" className="btnTimBCTPGD">
                <p className="btntim">Tìm</p>
            </button>
            
            <button type="button" className="btnXFE">
                <p className="btnxuatfile">Xuất file Excel</p>
            </button>
        </div>

       
    </div>
    )
}