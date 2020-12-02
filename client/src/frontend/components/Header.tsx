import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Button, Space } from 'antd';
import { PlusOutlined, LoginOutlined } from '@ant-design/icons';


import '../scss/Header.scss'

const Header = () => {
    const [openLogin, setOpenLogin] = useState(false)

    const closeLoginDrawer = (): void => setOpenLogin(false)

    return (
        <div className="header">
            <Row className="header-container">
                <Col span={6} className="logo">
                    <Link to="/">Appointments App</Link>
                </Col>
                <Col span={18} className="menu">
               <Space>
                    <Button onClick={ () => setOpenLogin(!openLogin)}>
                      <Link to="sign-in"><LoginOutlined /> Login</Link>
                    </Button>
                    <Button type="primary" >
                    <Link to="/sign-up"><PlusOutlined /> Create account</Link>
                    </Button>
               </Space>
                </Col>
            </Row>
        </div>
    )
}

export default Header
