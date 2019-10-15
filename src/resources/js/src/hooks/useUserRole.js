import { useState, useCallback } from "react";
import { useMappedState } from "redux-react-hook";

const useUserRole = () => {
  const mapState = useCallback(
    state => ({
      roleKey: state.auth.user.role.key
    }),
    [],
  );

  const { roleKey } = useMappedState(mapState);

  const [role] = useState(roleKey);

  const isAdmin = useCallback(() => {
    return role === 'admin'
  }, [role]);

  const isDispatcher = useCallback(() => {
    return role === 'dispatcher'
  }, [role]);

  const isWatcher = useCallback(() => {
    return role === 'watcher'
  }, [role]);

  const isSecurityEmployee = useCallback(() => {
    return role === 'securityEmployee'
  }, [role]);

  return {
    isAdmin,
    isDispatcher,
    isWatcher,
    isSecurityEmployee
  }
};

export default useUserRole;
