import React from 'react';
import './Login.css';
import { Button } from 'antd';
//import { Link } from 'react-router-dom';

import Logo from '../HinhLogin/Logo.png';
import Bong from '../HinhLogin/Bong.png';
import CayATM from '../HinhLogin/Group.png';
import Hinh1 from '../HinhLogin/Hinh1.png';
import Hinh2 from '../HinhLogin/Hinh2.png';
import Hinh3 from '../HinhLogin/Hinh3.png';

export default function Login() {
    return(
            <div className="Login">
                <div className="IconYT">
                    <img src={Logo} alt="" className="Logo"/>
                </div>

                <div className="Background">
                    <div className="Left">
                        <img src={Bong} alt="" className="Bong"/>
                        <img src={CayATM} alt="" className="ATM"/>
                        <img src={Hinh1} alt="" className="Hinh1"/>
                        <img src={Hinh2} alt="" className="Hinh2"/>
                        <img src={Hinh3} alt="" className="Hinh3"/>
                        <p className="BackgroundATM"/>
                    </div>

                    <div className="" style={{ padding:' 90px' }}> 
                        <h3 className="TitleLogin">
                            Đăng nhập
                        </h3>
                        <form className="ContentLogin">
                            <br />
                            <label className="TenDangNhap">
                                Tên đăng nhập
                            </label>
                            <br />
                            <input type="text" className="unamelogin" name="Uname" placeholder="Nhập tài khoản"/>
                            <br />
                            <label htmlFor="tdn" className="MatKhau">
                                Mật khẩu
                            </label>
                            <br />
                            <input type="password" className="upassword" name="pword" placeholder="Nhập tài khẩu"/>
                            <br />
                            <br />
                            <input type="checkbox" className="checkpass" name="savepass"/>
                            <label htmlFor="savepass" className="savepass">
                                Ghi nhớ đăng nhập
                            </label>
                            <br />
                            <Button type="primary" htmlType="submit">
                                <h4>Đăng nhập</h4>
                            </Button>
                        </form>
                        <div className="quenmatkhau">
                            Quên mật khẩu?
                        </div>
                    </div>
                </div>
            </div>
    );
}