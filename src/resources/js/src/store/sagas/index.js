import { all } from 'redux-saga/effects'
import {authSaga} from "./auth";
import {filesSaga} from "./files";

export default function* rootSaga() {
  yield all([authSaga(), filesSaga()])
}
