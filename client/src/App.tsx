import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.scss'

//Front pages
import SignUp from './frontend/pages/SignUp'
import Home from './frontend/pages/Home'
import SignIn from './frontend/pages/SignIn'

//Dashboard pages
import Dashboard from './admin/pages/Dashboard'

//Components
import Header from './frontend/components/Header'

const loggedInToken = localStorage.getItem('appointments_management_login_token')


const App: FC = () => {
  return (
    <div id="app-wrapper">
     <Router>
       <Header />
          <Route path="/" component={Home} exact />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          { loggedInToken ? <Route to="/dashboard" component={Dashboard} /> : <Redirect to="/sign-in" /> }
     </Router>
    </div>
  );
}

export default App;
