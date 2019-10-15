import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import useUserRole from "../../../hooks/useUserRole";
// import NotFound from "../404";

const DispatcherRoute = (props) => {
  const role = useUserRole();

  if (role.isDispatcher()) {
    return <Route path={props.path} component={props.component} />
  } else {
    return <Redirect to="/rides"/>
  }
}
export default DispatcherRoute
