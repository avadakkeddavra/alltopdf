import * as React from 'react';
import Paper from "@material-ui/core/Paper";
import Input from "../../../Components/Common/Form/Input";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import useRegister from "./useRegister";

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

const Register = ({history}) => {
    const classes = useStyles();
    const {
        name,
        email,
        password,
        repeat_password,
        register,
        isValid
    } = useRegister(history);
    return (
        <Paper className={classes.root}>
            <Input {...name}/>
            <Input {...email}/>
            <Input {...password}/>
            <Input {...repeat_password}/>
            <Button
                variant="contained"
                color="primary"
                disabled={!isValid()}
                className={classes.btn}
                onClick={register}
            >Register</Button>
        </Paper>
    )
};

export default Register;



