import service from '../../services/auth'
import { all, takeEvery, put } from 'redux-saga/effects'
import notify from "../../utils/notify";
import decode from 'jwt-decode';

function* auth(action) {
    try {
        const method = action.type === 'LOGIN' ? service.login : service.register;
        const result = yield method(action.payload.body);
        const user = decode(result);
        localStorage.setItem('token', result);

        yield put({
            type: 'SET_CURRENT_USER',
            payload:  {token: result, user}
        });

        yield action.payload.redirect();

    } catch(E) {
        console.log(E);
        const error = E.response ? E.response.data : "LOCAL_ERROR";
        notify.warning(error.email || error.password);
    }
}

function* getCurrent({payload}) {
    try {
        const {user} = yield service.getCurrent();
        yield put({
            type: 'SET_CURRENT_USER',
            payload: {
                user,
                token: payload.token
            }
        });
    } catch(E) {
        notify.warning('Час сессії закінчився')
    }
}

function* fetchDataWatcher() {
    yield takeEvery('LOGIN', auth);
    yield takeEvery('REGISTER', auth);
    yield takeEvery('GET_CURRENT_USER', getCurrent);
}

export function* authSaga() {
    yield all([fetchDataWatcher()])
}
