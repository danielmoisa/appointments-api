import React, { useState, useContext } from 'react'
import axios from 'axios'
import{Row, Col, Button, Form, Input, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
 
import '../scss/SignIn.scss'
import { UserContext } from '../../context/UserContext'


const SignIn = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory()
    const { setLoggedUser } = useContext(UserContext);

    const handleLogin = async () => {
        try {
            const result = await axios({
                method: 'POST',
                url: 'http://localhost:4000/auth/signin',
                headers: { 'Content-Type': 'application/json' },
                data: { email, password },
            })
            console.log(result)
            console.log(result.config.data.email)
            const loginToken = result.data.accessToken
            localStorage.setItem('appointments_management_login_token', loginToken)
            setLoggedUser(true)
            history.push('/dashboard')
            message.success({
                content: 'Login with success',
                duration: 3,
                style: {
                  bottom: '30px',
                  right: '30px'
                },
              });
        } catch (error) {
            message.error({
                content: 'Wrong email or password',
                duration: 2,
                style: {
                  bottom: '30px',
                  right: '30px'
                },
              });
        }
    }

    return (
        <Row className="sign-in-wrapper">
            <Col offset={8} xs={{ offset: 1 }} sm={{ offset: 4 }} md={{ offset: 8 }}></Col>
            <Col span={8} xs={{ span: 22 }} sm={{ span: 16 }} md={{ span: 8 }} className="signin-form">
                <h2 className="title">Login in your account</h2>
                <p className="description">Add email and password used when created the account.</p>
                <Form name="sign-in" onFinish={handleLogin}>
                    <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                    <Input placeholder="Please enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password  placeholder="Please enter your password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <Row>
                    <b>Don't have an account? <Button type="link"><Link to="/sign-up">Create account</Link></Button></b>
                </Row>
            </Col>
            <Col  offset={8} xs={{ offset: 1 }} sm={{ offset: 4 }} md={{ offset: 8 }}></Col>
        </Row>
    )
}

export default SignIn
