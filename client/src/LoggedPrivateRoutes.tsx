import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom"
import { UserContext } from './context/UserContext';


const LoggedPrivateRoutes = ({ component: Component, layout: Layout, ...rest }) => {
    const {loggedUser } = useContext(UserContext);

    return (
        <Route {...rest} render={(props) => (
            !loggedUser
                ? <Layout><Component {...props} /></Layout>
                : <Redirect to="/dashboard" />
        )} />
    )
}

export default LoggedPrivateRoutes
