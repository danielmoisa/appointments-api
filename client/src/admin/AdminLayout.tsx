import React, { useState } from 'react'

import { Row, Col } from 'antd'

//Components
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import './scss/AdminLayout.scss'

const AdminLayout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)

    const toggleCollapsed = () => {
        setToggleSidebar(!toggleSidebar)
    }
    return (
        <Row className="admin">
          <Col flex={1/12} className={`${toggleSidebar ? 'close-menu' : 'open-menu'}`}>
            <Sidebar toggleCollapsed={toggleCollapsed} toggleSidebar={toggleSidebar}/>
          </Col>
          <Col flex={11/12}>
            <Header />
            <div className="admin-content">
              { children }
            </div>
          </Col>
        </Row>
    )
}

export default AdminLayout
