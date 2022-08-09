import React from 'react';
import { NavLink } from 'react-router-dom';
import  IndexLogo from '../assets/images/logo.png';
import  ArcoDesignUser from '../assets/iconfont/arcoDesign-user.svg';
import { Col, Row } from 'antd';

const Menu = () => {
    return (
        <div className='menu-wrapper'>
            <Row>
                <Col span={4}>
                    <div className='Logo'>
                            <a href="/"><img src={IndexLogo} alt="logo" width="72px" height="72px"/>&nbsp;IMovie</a>
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
                    <a href="/login" className='login'><img src={ArcoDesignUser} alt="logo" width="24px" height="24px"/>&nbsp;登陆</a>
                </Col>
            </Row>
        </div>
    );
};

export default Menu;