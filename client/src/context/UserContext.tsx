import React, { createContext, useState, useEffect } from 'react'
import { message } from 'antd'
import {  useHistory } from 'react-router-dom'

export const UserContext = createContext('')

export const UserProvider = (props) => {
    const isAuth: string | null = JSON.stringify(localStorage.getItem('appointments_management_login_token'))

    let history = useHistory()
    const [loggedUser, setLoggedUser] = useState(false)

    useEffect(() => {
        if(isAuth) {
            setLoggedUser(true)
        }
         
    }, [])

    const isLogged = {
        isAuth: isAuth,
        loggedUser: loggedUser
    }

    const handleLogout = () => {
        localStorage.removeItem('appointments_management_login_token')
        setLoggedUser(false)
        message.info({
            content: 'Logged out with success',
            duration: 3,
            style: {
              bottom: '30px',
              right: '30px'
            },
          });
        history.push('/')
    }

    return (
        <UserContext.Provider value={{ isLogged }}>
            { props.children }
        </UserContext.Provider>
    )
}