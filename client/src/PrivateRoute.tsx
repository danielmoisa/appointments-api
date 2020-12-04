import React from 'react';
import { Route, Redirect } from "react-router-dom";

const isAuth = localStorage.getItem('appointments_management_login_token')


const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuth
            ? <Layout><Component {...props} /></Layout>
            : <Redirect to='/sign-in' />
    )} />
)

export default PrivateRoute;