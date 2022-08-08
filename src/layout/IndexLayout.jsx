import React from 'react'
import { NavLink , Outlet} from 'react-router-dom';
import "../assets/less/IndexLayout.less"
import  IndexLogo from '../assets/images/IndexLogo.svg'
import { Col, Row } from 'antd';

const IndexLayout = () => {

    return (
        <div>
            <header>
                <Row>
                    <Col span={4}>
                        <div className='Logo'>
                            <h1>
                                <a href="/"><img src={IndexLogo} alt="logo" width="32px"/>IMovie</a>
                            </h1>
                        </div>
                    </Col>
                    <Col span={16}>
                        <nav className='nav'>
                            <NavLink to="/">首页</NavLink>
                            <NavLink to="/movies">电影</NavLink>
                        </nav>
                    </Col>
                    <Col span={4}>
                        <div>登录</div>
                    </Col>
                </Row>
            </header>
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    )
}

export default IndexLayout