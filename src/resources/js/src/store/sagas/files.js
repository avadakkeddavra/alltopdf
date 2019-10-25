import service from '../../services/files'
import { all, takeEvery, put, delay } from 'redux-saga/effects'
import notify from "../../utils/notify";

function* getFiles({payload}) {
    try {
        const data = yield service.getAll(payload);
    
        yield put({
            type: 'SET_FILES',
            payload: {
                data: data.files.data,
                total: data.files.total
            }
        });
    } catch(E) {
        notify.warning('Error while getting the user files')
    }
}

function* uploadFiles({payload: {files, sideEffect}}) {
    try {
        const {data} = yield service.upload(files);
        console.log(data);
        yield put({
            type: 'ADD_FILES',
            payload: data
        });
        yield sideEffect();
    } catch(E) {
        console.log(E);
        notify.warning('Error while uploading files')
    }
}


function* fetchDataWatcher() {
    yield takeEvery('GET_FILES', getFiles);
    yield takeEvery('UPLOAD_FILES', uploadFiles);
}

export function* filesSaga() {
    yield all([fetchDataWatcher()])
}
