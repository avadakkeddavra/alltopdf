import React from 'react'
import { Route } from 'react-router-dom'

import useUserRole from "../../../hooks/useUserRole";
import NotFound from "../404";

const AdminRoute = (props) => {
  const role = useUserRole();

  if (role.isAdmin()) {
    return <Route path={props.path} component={props.component} />
  } else {
    return <NotFound/>
  }
}
export default AdminRoute
