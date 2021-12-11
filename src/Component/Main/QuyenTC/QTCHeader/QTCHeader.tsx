import React from 'react'
import Muiten from './HinhQTCHeader/Right.png'
import ADD from './HinhQTCHeader/ADD.png'
import './QTCHeader.css'

export default function BCATMHeader() {
    return (
    <div className="">

        <p className="TitleQLHT">Quản lý hệ thống</p>
        <img src={Muiten} alt="" className="Muiten01"/>
        <p className="TitleQTC">Quyền truy cập</p>

        <div className="">


            <p className="TitleQTC2">Quyền truy cập:</p>

            <div className="bgNQTC">
                <p className="WriteNQTC"> Nhập quyền truy cập </p>
            </div>


            <button type="button" className="bgbtnTimKiem">
                <p className="btnTimKiem">Tìm</p>
            </button>


            <button type="button" className="bgbtnADD">
                <p className="btnADD">
                    <img src={ADD} alt="" className=""/>
                    Thêm mới
                </p>
            </button>

        </div>

       
    </div>
    )
}