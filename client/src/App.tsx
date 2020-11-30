import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.scss'

//Pages
import SignUp from './frontend/pages/SignUp'
import Home from './frontend/pages/Home'

//Components
import Header from './frontend/components/Header'


const App: FC = () => {
  return (
    <div id="app-wrapper">
     <Router>
       <Header />
       <Route path="/" component={Home} exact />
       <Route path="/sign-up" component={SignUp} />
     </Router>
    </div>
  );
}

export default App;
