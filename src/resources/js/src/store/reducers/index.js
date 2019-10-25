import { combineReducers } from 'redux'
import authReducer from "./auth";
import filesReducer from "./files";

export default combineReducers({
    auth: authReducer,
    files: filesReducer
});
