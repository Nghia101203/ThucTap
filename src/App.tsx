import React from 'react';
import 'antd/dist/antd.css';
import './App.css';

import Login from './Component/Login/Login/Login';
import Board from './Component/Board/Board/Board';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import DashboardContent from './Component/Dashboard/DashboardContent/DashboardContent';
import DashboardFooter from './Component/Dashboard/DashboardFooter/DashBoardFooter';
import DashboardHeader from './Component/Dashboard/DashboardHeader/DashBoardHeader';
import BCATM from './Component/BCATM/BCATM';
import BCATMContent from './Component/BCATMContent/BCATMContent';
import BCATMHeader from './Component/BCATMHeader/BCATMHeader';
import BCATMMain from './Component/BCATMMain/BCATM';

import { Layout, Avatar } from 'antd';
import { DashboardFilled, UserOutlined } from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="background">
      
      
      <BCATM/>
      
    </div>
  );
}

export default App;
