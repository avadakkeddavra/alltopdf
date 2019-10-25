import * as React from "react";
import {Route, Switch} from "react-router-dom";
import Files from "../Main";


const Router = () => {
  return (
      <div style={{marginTop: 80}}>
          <Switch>
              <Route path="/" exact component={Files}/>
          </Switch>
      </div>
  )
}
export default Router;
