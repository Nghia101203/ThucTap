import React from 'react'

import './QLNDHeader.css'

import ADD from './HinhQLND/ADD.png'
import Muiten from './HinhQLND/Right.png'

export default function QLNDHeader() {
    return (
        <div>
            <p className="TitleQLHTinQLND">Quản lý hệ thống</p>
            <img src={Muiten} alt="" className="IconQLNDinHeader1"/>
            <p className="TitleQLNDinQLND23">Quản lý người dùng</p>

            <p className="TitleTTNDinQLND">Thông tin người dùng:</p>
            <div className="TextBoxinQLND23">
                <p className="txbNTTNDinQLND23">Nhập thông tin người dùng</p>
            </div>

            <button type="button" className="bgbtnTiminQLND23">
                <p className="btnTiminQLND">Tìm</p>
            </button>


            <button type="button" className="bgbtnADDinQLND23">
                <p className="btnADDinQLND">
                    <img src={ADD} alt="" className=""/>
                    Thêm mới
                </p>
            </button>
        </div>
    );
}