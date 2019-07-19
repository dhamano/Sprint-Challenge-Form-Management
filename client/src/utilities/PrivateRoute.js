import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { hasLocalVar } from '../utilities/';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route {...rest} render={ props => {
      if(hasLocalVar("token")) {
        return <Component {...props} />
      } else {
        return <Redirect to="/" />
      }
    }} />
  )
}

export default PrivateRoute;