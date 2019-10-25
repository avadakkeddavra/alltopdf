import {useCallback, useEffect, useState} from "react";
import {useDispatch, useMappedState} from "redux-react-hook";


const useFileList = () => {
    const {
        filters,
        ...files
    } = useMappedState((state) => state.files);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({
            type: "GET_FILES",
            payload: filters
        })
    }, [filters]);
    
    const handleChangePage = useCallback((e, page) => {
        dispatch({
            type: 'SET_FILTERS',
            payload: {
                page: page + 1
            }
        })
    }, [filters, dispatch]);
    
    
    const handleChangeRowsPerPage = useCallback((event) => {
        dispatch({
            type: 'SET_FILTERS',
            payload: {
                rowsPerPage: parseInt(event.target.value)
            }
        })
    }, [filters, dispatch]);
    
    return {
       ...files,
        filters,
        handleChangePage,
        handleChangeRowsPerPage
    }
};
export default useFileList;
