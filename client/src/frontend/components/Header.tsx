import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Row, Col, Drawer, Form, Button, Input, Space } from 'antd';
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
                        <LoginOutlined /> Login
                    </Button>
                    <Button type="primary" >
                    <Link to="/sign-up"><PlusOutlined /> Create account</Link>
                    </Button>
               </Space>

                {/* Login drawer */}
              <Drawer
                  title="Login into account"
                  width={400}
                  onClose={closeLoginDrawer}
                  visible={openLogin}
                  bodyStyle={{ paddingBottom: 80 }}
              >
                <Form layout="vertical">
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                      <Input placeholder="Please enter your email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password  placeholder="Please enter your password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
              </Drawer>
                {/* End login drawer */}
                </Col>
            </Row>
        </div>
    )
}

export default Header
