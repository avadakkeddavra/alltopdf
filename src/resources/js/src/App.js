import React, { useContext } from 'react';
import { Switch } from 'react-router-dom'
import PublicRoute from "./Common/Auth/PublicRoute";
import Auth from "./pages/Auth";
import withTheme from "../theme";

const App = () => {
    return (
        <div className="App">
            <Switch>
                <PublicRoute path="/auth" component={Auth}/>
                <PublicRoute path="/" component={() => {return(<h1>TEst</h1>)}}/>
            </Switch>
        </div>
    );
}

export default withTheme(App);
