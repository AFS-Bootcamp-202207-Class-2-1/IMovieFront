import React from 'react';
import { NavLink } from 'react-router-dom';
import  IndexLogo from '../assets/images/logo.png';
import { Col, Row } from 'antd';

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <Row>
                <Col span={4}>
                    <div className='Logo'>
                        <h1>
                            <a href="/"><img src={IndexLogo} alt="logo" width="32px"/>IMovie</a>
                        </h1>
                    </div>
                </Col>
                <Col span={12}>
                    <ul className='nav'>
                        <li>
                            <NavLink to="/">首页</NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">电影</NavLink>

                        </li>
                        <li>
                            <NavLink to="/user">我的</NavLink>
                        </li>
                    </ul>
                </Col>
                <Col span={2} offset={6}>
                    <div>登录</div>
                </Col>
            </Row>
        </div>
    );
};

export default Menu;