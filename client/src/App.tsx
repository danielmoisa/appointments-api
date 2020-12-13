import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

//Routes
import PrivateRoute from './PrivateRoute'
import NormalRoute from './NormalRoute'
import LoggedPrivateRoute from './LoggedPrivateRoutes'

//Front pages
import SignUp from './frontend/pages/SignUp'
import Home from './frontend/pages/Home'
import SignIn from './frontend/pages/SignIn'

//Dashboard pages
import Dashboard from './admin/pages/Dashboard'
import Appointments from './admin/pages/Appointments'

//Layout
import FrontLayout from './frontend/FontLayout'
import AdminLayout from './admin/AdminLayout'


//Context
import { UserProvider } from './context/UserContext'


const App: FC = () => {
  return (
    <div id="app-wrapper">
      <UserProvider>
        <Router>
            <Switch>
                <NormalRoute exact path="/" component={Home} layout={FrontLayout} />
                <LoggedPrivateRoute path="/sign-up" component={SignUp} layout={FrontLayout} />
                <LoggedPrivateRoute path="/sign-in" component={SignIn} layout={FrontLayout} />
                <PrivateRoute path="/dashboard" component={Dashboard} layout={AdminLayout}/>
                <PrivateRoute path="/appointments" component={Appointments} layout={AdminLayout} />
            </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
