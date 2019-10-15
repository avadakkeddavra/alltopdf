const SET_CURRENT_USER = 'SET_CURRENT_USER';
const DELETE_CURRENT_USER = 'DELETE_CURRENT_USER';

const initialState = {
    user: {},
    token: ''
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return action.payload;
        case DELETE_CURRENT_USER:
            return initialState;
        default:
            return state
    }
}
export default authReducer;
