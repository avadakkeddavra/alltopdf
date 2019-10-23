import { Redirect, Route } from 'react-router-dom'
import * as React from 'react'

const PublicRoute = (props) => {
  if (!localStorage.getItem('token')) {
    return <Route path={props.path} component={props.component} />
  } else {
    return <Redirect to="/" />
  }
}
export default PublicRoute
