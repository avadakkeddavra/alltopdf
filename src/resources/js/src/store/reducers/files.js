const SET_FILES = 'SET_FILES';
const SET_FILTERS = 'SET_FILTERS';
const ADD_FILES = 'ADD_FILES';

const initialState = {
    data: [],
    total: 0,
    loading: true,
    filters: {
        page: 1,
        rowsPerPage: 5
    }
}
const filesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILES:
            return {
                ...state,
                ...action.payload,
                loading: false
            };
        case ADD_FILES:
            return {
                ...state,
                data: [
                    ...action.payload,
                    ...state.data
                ],
                total: state.total + action.payload.length,
                loading: false
            };
        case SET_FILTERS:
            return {
                ...state,
                filters: {...state.filters, ...action.payload}
            }
        default:
            return state
    }
}
export default filesReducer;
