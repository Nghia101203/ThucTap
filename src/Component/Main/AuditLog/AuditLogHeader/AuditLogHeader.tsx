import React from 'react'

import './AuditLogHeader.css'

import Muiten from './HinhAuditLogHeader/Right (1).png'

export default function AuditLogHeader() {
    return(
        <div>
            <p className="TitleQLHTinAL">Quản lý hệ thống</p>
            <img src={Muiten} alt="" className="IconQLNDinHeader1"/>
            <p className="TitleQLNDinQLND23">Audit log</p>

            <p className="TitleTTNDinQLND">Đơn vị quản lý:</p>
            <div className="TextBoxinQLND23">
                <p className="txbNTTNDinQLND23">Đơn vị quản lý, điểm giám sát</p>
            </div>

            <button type="button" className="bgbtnTiminQLND23">
                <p className="btnTiminQLND">Tìm</p>
            </button>
        </div>
    );
}