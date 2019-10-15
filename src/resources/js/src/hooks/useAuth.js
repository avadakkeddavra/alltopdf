import * as React from "react";
import {useDispatch, useMappedState} from "redux-react-hook";


const useAuth = (history) => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const auth = useMappedState((state) => (state.auth))
  const redirect = React.useCallback(() => {
    history.push('/auth');
  }, [history]);


  if(token && auth.token === '') {
    dispatch({
      type: 'GET_CURRENT_USER',
      payload: {
        token,
        redirect
      }
    });
  }
  return auth;
};

export default useAuth;
