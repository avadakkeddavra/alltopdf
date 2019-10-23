import * as React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Route, Switch} from "react-router-dom";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";

const useStyles = makeStyles({
    root: {
        padding: 20,
        width: 500,
        margin: '0 auto'
    },
    btn: {
        marginTop: 10
    }
})

const Auth = () => {
    return (
        <>
            <Switch>
                <Route path="/auth/login" component={Login}/>
                <Route path="/auth/register" component={Register}/>
            </Switch>
        </>
    )
};

export default Auth;



