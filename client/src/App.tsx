import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import './App.scss'

//Private route
import PrivateRoute from './PrivateRoute'

//Front pages
import SignUp from './frontend/pages/SignUp'
import Home from './frontend/pages/Home'
import SignIn from './frontend/pages/SignIn'

//Dashboard pages
import Dashboard from './admin/pages/Dashboard'

//Components
import Header from './frontend/components/Header'


const App: FC = () => {
  return (
    <div id="app-wrapper">
     <Router>
       <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <PrivateRoute path="/dashboard" component={Dashboard}/>
          </Switch>
     </Router>
    </div>
  );
}

export default App;
