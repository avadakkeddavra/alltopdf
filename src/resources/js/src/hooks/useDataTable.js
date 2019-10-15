import React from "react";
import {useDispatch, useMappedState} from "redux-react-hook";


const useDataTable = (type, mapState) => {
  const [filtersOpen, openFilters] = React.useState(false);
  const dispatch = useDispatch();
  const {data, filters, total} = useMappedState(mapState);

  const toggleFilters = React.useCallback(() => {
    openFilters(!filtersOpen);
  }, [filtersOpen])

  const handleChangePage = React.useCallback((e, page) => {
    dispatch({
      type,
      payload: {
        ...filters,
        page: page + 1
      }
    })
  }, [filters, dispatch, type]);


  const handleChangeRowsPerPage = React.useCallback((event) => {
    dispatch({
      type,
      payload: {
        ...filters,
        rowsPerPage: parseInt(event.target.value)
      }
    })
  }, [filters, dispatch, type]);

  const sort = React.useCallback(() => {
    dispatch({
      type,
      payload: {
        ...filters,
        sort: filters.sort === 'DESC' ? 'ASC' : 'DESC'
      },
    });
  }, [dispatch, filters, type]);

  const deleteFilter = React.useCallback((name) => {
    const newFilters = {...filters};
    newFilters[name] = '';
    dispatch({
      type,
      payload: newFilters,
    });

  }, [filters, dispatch, type]);

  return {
    sort,
    filters,
    data,
    total,
    handleChangePage,
    handleChangeRowsPerPage,
    filtersOpen,
    toggleFilters,
    deleteFilter
  }
};
export default useDataTable;
