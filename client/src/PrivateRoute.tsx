import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from './context/UserContext';


const isAuth = localStorage.getItem('appointments_management_login_token')


const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
    const {loggedUser } = useContext(UserContext);

   return (
    <Route {...rest} render={(props) => (
        isAuth
            ? <Layout><Component {...props} /></Layout>
            : <Redirect to='/sign-in' />
    )} />
   )
}

export default PrivateRoute;