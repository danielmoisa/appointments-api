import React from 'react'
import { Route, Redirect } from "react-router-dom";

const NormalRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={(props) => (
        <Layout><Component {...props} /></Layout>
    )} />
)

export default NormalRoute
