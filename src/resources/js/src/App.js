import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom'
import PublicRoute from "./Components/Common/Auth/PublicRoute";
import Auth from "./pages/Auth";
import withTheme from "../theme";
import PrivateRoute from "./Components/Common/Auth/PrivateRoute";
import Main from "./pages/Main";
import SnackbarCustom from "./Components/Common/Snackbar";
import useSnackbar from "./hooks/useSnackbar";

const App = () => {
    const snackbar = useSnackbar();
    useEffect(
        () => {
            const notify = (e) => {
                snackbar.handleOpenFromEvent(e)
            };

            document.addEventListener(
                'notify',
                notify,
                false
            );

            return () => {
                document.removeEventListener(
                    'notify',
                    notify,
                    false
                );
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    return (
        <div className="App">
            <Switch>
                <PublicRoute path="/auth" component={Auth}/>
                <PrivateRoute path="/" component={Main}/>
            </Switch>
            <SnackbarCustom {...snackbar}/>

        </div>
    );
}

export default withTheme(App);
