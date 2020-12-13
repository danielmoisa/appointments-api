import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  DatePicker,
  Space
} from 'antd';

const AppointmentForm = ({ closeDrawer }) => {
    return (
        <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="DatePicker">
            <DatePicker showTime format="DD-MM-YYYY HH:mm" minuteStep={30} />
        </Form.Item>
        <Form.Item>
           <Space>
                <Button className="login-form-button" onClick={closeDrawer}>
                    Cancel
                </Button>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Send appointment
                </Button>
           </Space>
      </Form.Item>
      </Form>
    </>
    )
}

export default AppointmentForm
