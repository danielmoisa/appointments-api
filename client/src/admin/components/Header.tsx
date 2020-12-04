import React from 'react'
import { Row, Col, Avatar, Tooltip, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons';


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
    return (
        <Row className="admin-header">
            <Col sm={16} md={16} className="menu"></Col>
            <Col sm={8} md={8} className="user-info">
                <Dropdown overlay={adminMenu} placement="bottomLeft" trigger={['click']} >
                    <Tooltip placement="left" title={'Admin menu'}>
                        <Avatar icon={<UserOutlined />} className="admin-avatar" />
                    </Tooltip>
                </Dropdown>
            </Col>
        </Row>
    )
}

export default Header
