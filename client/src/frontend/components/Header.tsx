import React, { useState } from 'react'
import { Row, Col, Drawer, Form, Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import '../scss/Header.scss'

const Header = () => {
    const [openLogin, setOpenLogin] = useState(false)

    const openLoginDrawer = (): void => setOpenLogin(true)

    const closeLoginDrawer = (): void => setOpenLogin(false)

    return (
        <div className="header">
            <Row>
                <Col span={6}>Appointments App</Col>
                <Col span={18}>
                <Button type="primary" onClick={ () => setOpenLogin(!openLogin)}>
                    <PlusOutlined /> New account
                </Button>

                {/* Login drawer */}
                <Drawer
                    title="Create a new account"
                    width={720}
              
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                <div
                style={{
                    textAlign: 'right',
                }}
                >
              <Button style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button  type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                 
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
                {/* End login drawer */}
                </Col>
            </Row>
        </div>
    )
}

export default Header
