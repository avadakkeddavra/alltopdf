import * as React from "react";
import {Route, Switch} from "react-router-dom";
import FileList from "../Main/FileList";


const Router = () => {
  return (
     <Switch>
        <Route path="/" exact component={FileList}/>
     </Switch>
  )
}
export default Router;
