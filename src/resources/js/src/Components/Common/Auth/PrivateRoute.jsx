import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = (props) => {
    console.log('Pizda')
  if (localStorage.getItem('token')) {
    return <Route path={props.path} component={props.component} />
  } else {
    return <Redirect to="/auth" />
  }
}
export default PrivateRoute
