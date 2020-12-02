import React, { useState, createContext } from 'react'

export const UserContext = createContext('')

export const UserProvider = (props) => {
    const isAuth: any = localStorage.getItem('appointments_management_login_token')

    return (
        <UserContext.Provider value={isAuth}>
            { props.children }
        </UserContext.Provider>
    )
}