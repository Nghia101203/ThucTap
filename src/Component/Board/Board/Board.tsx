import { Layout, Menu } from 'antd';
import './Board.css';

import Logo from '../HinhBoard/Logo.png';

const { Sider } = Layout;

export default function Board() {
    return(
        <div className="Board">
        <Layout>
            <Sider width={283}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['Dashboard']}
                defaultOpenKeys={['Dashboard']}
                style={{ height: '1032px' }}
                >
                <Menu style={{ padding: '25px'}}>
                    <img src={Logo} alt="" className="Logo"/>
                </Menu>

                <Menu style={{ padding: '25px'}}/>
                            
                <h1><Menu style={{ padding: '32px'}}>Tổng quan</Menu></h1>
                <Menu.Item key="Dashboard">
                    Dashboard
                </Menu.Item>   
                <Menu.Item key="GSM Modern on Map">
                    GSM Modern on Map
                </Menu.Item>
                <Menu.Item key="Quản lý cảnh báo">
                    Quản lý cảnh báo
                </Menu.Item>

                <Menu style={{ padding: '25px'}}/>
                                    
                <h1><Menu style={{ padding: '32px'}}>Báo cáo</Menu></h1>    
                <Menu.Item key="Báo cáo theo PGD">
                    Báo cáo theo PGD
                </Menu.Item>
                <Menu.Item key="Báo cáo theo ATM">
                    Báo cáo theo ATM
                </Menu.Item>

                <Menu style={{ padding: '25px'}}/>

                <h1><Menu style={{ padding: '32px'}}>Quản lý hệ thống</Menu></h1>
                <Menu.Item key="Quyền truy cập">
                    Quyền truy cập
                </Menu.Item>
                <Menu.Item key="Quản lý thiết bị - GSM">
                    Quản lý thiết bị - GSM
                </Menu.Item>
                <Menu.Item key="Quản lý người dùng">
                    Quản lý người dùng
                </Menu.Item>
                <Menu.Item key="Audit log">
                    Audit log
                </Menu.Item>

                </Menu>
            </Sider>                    
        </Layout>
        </div>
    );
}