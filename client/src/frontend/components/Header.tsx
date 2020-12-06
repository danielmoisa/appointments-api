import React, { useContext, useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

import { Row, Col, Button, Space, message } from 'antd';
import { PlusOutlined, LoginOutlined, RightOutlined } from '@ant-design/icons';


import '../scss/Header.scss'

const Header = () => {
    const isAuth = useContext(UserContext)


    return (
        <div className="header">
            <Row className="header-container">
                <Col span={6} className="logo">
                    <Link to="/">Appointments App</Link>
                </Col>
                <Col span={18} className="menu">
               <Space>
                  { isAuth ? 
                        <Button className="custom-button-primary"><Link to="/dashboard">Dashboard <RightOutlined /></Link></Button>
                      :
                      <>
                        <Button>
                            <Link to="sign-in"><LoginOutlined /> Login</Link>
                        </Button>
                        <Button type="primary" >
                            <Link to="/sign-up"><PlusOutlined /> Create account</Link>
                        </Button>
                        </>
                    }
               </Space>
                </Col>
            </Row>
        </div>
    )
}

export default Header
