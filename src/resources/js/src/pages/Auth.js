import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import useInput from "../hooks/useInput";
import Input from "../Common/Form/Input";
import Button from "@material-ui/core/Button";
import ReactDOM from "react-dom";
import {makeStyles} from "@material-ui/styles";
import withTheme from "../../theme";

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
    const classes = useStyles();
    const email = useInput({
        label: 'Email',
        type: 'email',
        rule: 'email'
    });
    const password = useInput({
        type: 'password',
        label: 'Password'
    });
    return (
        <Paper className={classes.root}>
            <Input {...email}/>
            <Input {...password}/>
            <Button variant="contained" color="primary" className={classes.btn}>Login</Button>
        </Paper>
    )
};

export default Auth;



