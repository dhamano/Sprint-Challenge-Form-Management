import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute';

import { hasLocalVar } from './utilities';

import Navigation from './components/Navigation';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" render={ props => {
        if(hasLocalVar('token')) {
          return <Redirect to="/home" />
        } else {
          return <Login {...props} />
        }
      }} />
      <PrivateRoute path="/home" component={Home} />
    </div>
  );
}

export default App;
