import React from 'react'
import { Card, Col, Row  } from 'antd'
import { UserContext } from '../../context/UserContext' 

import { CalendarOutlined  } from '@ant-design/icons'

const Dashboard = () => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                Card content
                </Card>
            </Col>
        </Row>
    )
}

export default Dashboard
