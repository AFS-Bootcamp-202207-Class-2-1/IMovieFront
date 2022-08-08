import React from 'react'
import { Outlet } from 'react-router-dom';
import "../assets/less/IndexLayout.less"
import Menu from '../components/Menu'

const IndexLayout = () => {

    return (
        <div className='layout-wrapper'>
            <Menu />
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    )
}

export default IndexLayout