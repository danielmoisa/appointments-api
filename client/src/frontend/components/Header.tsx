import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

import { Row, Col, Button, Space } from 'antd';
import { PlusOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons';


import '../scss/Header.scss'

const Header = () => {
    let history = useHistory()
    const isAuth = useContext(UserContext)

    const handleLogout = () => {
        localStorage.removeItem('appointments_management_login_token')
        history.push('/')
    }


    return (
        <div className="header">
            <Row className="header-container">
                <Col span={6} className="logo">
                    <Link to="/">Appointments App</Link>
                </Col>
                <Col span={18} className="menu">
               <Space>
                  { isAuth ? 
                        <Button onClick={handleLogout}><LogoutOutlined />Logout</Button>
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
