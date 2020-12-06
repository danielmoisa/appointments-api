import React, { useState } from 'react'
import { Row, Col, Avatar, Tooltip, Dropdown, Menu, Drawer, Button } from 'antd'
import { UserOutlined, PlusOutlined } from '@ant-design/icons';

import AppointmentForm from '../components/AppointmentForm'


import '../scss/Header.scss'

const adminMenu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

const Header = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

   const showDrawer = () => {
     setToggleDrawer(true)
    };

    const closeDrawer = () => {
      setToggleDrawer(false)
     };

    return (
        <Row className="admin-header">
            <Col sm={16} md={16} className="menu"></Col>
            <Col sm={8} md={8} className="user-info">
            <Tooltip title="Add appointment">
              <Button type="primary" shape="circle" icon={<PlusOutlined />}  onClick={showDrawer} className="appointments-btn"/>
            </Tooltip>
            <Dropdown overlay={adminMenu} placement="bottomLeft" trigger={['click']} >
                <Tooltip placement="left" title="Admin menu">
                    <Avatar icon={<UserOutlined />} className="admin-avatar" />
                </Tooltip>
            </Dropdown>

            {/* Appointments drawer */}
            <Drawer
                  title="Add manual appointment"
                  placement="right"
                  closable={true}
                  onClose={closeDrawer}
                  visible={toggleDrawer}
                  className="appointments-drawer"
                >
                  <AppointmentForm closeDrawer={closeDrawer} />
                </Drawer>
            </Col>
        </Row>
    )
}

export default Header
