import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import useInput from "../hooks/useInput";
import Input from "../Components/Common/Form/Input";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import {useCallback} from "react";
import {useDispatch} from "redux-react-hook";
import notify from "../utils/notify";

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

const Auth = ({history}) => {
    const dispatch = useDispatch();
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

    const login = useCallback(() => {
        dispatch({
            type: 'LOGIN',
            payload: {
                body:{
                    email: email.value,
                    password: password.value
                },
                redirect: () => {
                    console.log('Pizda')
                    history.push('/')
                }
            }
        })
    }, [password, email]);

    return (
        <Paper className={classes.root}>
            <Input {...email}/>
            <Input {...password}/>
            <Button
                variant="contained"
                color="primary"
                disabled={email.value.length === 0 || password.value.length === 0}
                className={classes.btn}
                onClick={login}
            >Login</Button>
        </Paper>
    )
};

export default Auth;



