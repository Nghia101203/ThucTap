import React from 'react'
import './DashBoardHeader.css'
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars'

import { Avatar, Row, Col } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd';

export default function DashBroadHeader() {
    return (
        <div className="DashBroadHeader">
            <div style={{float:'right'}}>
                <Avatar size="large" icon={<UserOutlined />} />
            </div>

            <br />
            <br />

            <div>
                <Row gutter={[24, 16]}>
                    <Col span={12}>
                        <div className="Tittle">
                            Dashboard
                        </div>

                        <div className="DateMonth">
                            Thứ 2 , ngày 05/06/2021
                        </div>

                        <ul >
                            <li><a href="" >Ngày</a></li>
                            <li><a href="">Tuần</a></li>
                            <li><a href="">Tháng</a></li>
                            <li><a href="">Năm</a></li>
                        </ul>
                    </Col>

                    <Col span={12}>
                        <div className="DBTittle">
                            Thời Gian :
                        </div>
                        <DatePicker />
                    </Col>
                </Row>
            </div>
        </div>
    )
}