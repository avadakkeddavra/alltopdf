import {useCallback} from "react";
import useInput from "../../../hooks/useInput";
import {useDispatch} from "redux-react-hook";


const useRegister = (history) => {
    const dispatch = useDispatch();

    const name = useInput({
        label: 'Name',
        type: 'text',
        rule: 'required'
    });
    const email = useInput({
        label: 'Email',
        type: 'email',
        rule: 'email'
    });
    const password = useInput({
        type: 'password',
        label: 'Password'
    });

    const repeat_password = useInput({
        type: 'password',
        label: 'Repeat password'
    });

    const register = useCallback(() => {
        if(isValid()) {
            dispatch({
                type: 'REGISTER',
                payload: {
                    body: {
                        name: name.value,
                        email: email.value,
                        password: password.value
                    },
                    redirect: () => {
                        history.push('/')
                    }
                }
            })
        }
    }, [password, email, name.value]);

    const isValid = useCallback(() => {
        const values = !!name.value && !!email.value && !!password.value && !!repeat_password.value;
        const errors = !name.error && !email.error && !password.error && !repeat_password.error;
        const passwords_match = repeat_password.value === password.value;

        return values && errors && passwords_match;
    }, [name, email, password, repeat_password]);

    return {
        name, email, password,repeat_password, register, isValid
    }
};

export default useRegister;
