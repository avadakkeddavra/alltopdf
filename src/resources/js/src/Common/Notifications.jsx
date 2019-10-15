import * as React from 'react';
import Icon from "@material-ui/core/Icon/Icon";
import {makeStyles} from "@material-ui/styles";
import Popover from "@material-ui/core/Popover/Popover";
import useDropdown from "../../hooks/useDropdown";
import NotificationContainer from "../Notifications/Container";
import {useDispatch, useMappedState} from "redux-react-hook";
import Badge from "@material-ui/core/Badge/Badge";

const useStyles = makeStyles(theme => ({
  root: {
    marginRight: 10
  },
  icon: {
    color: '#969696'
  },
}));

const Notifications = () => {
  const classes = useStyles();
  const {
    id,
    anchorEl,
    handleOpen,
    handleClose,
    open
  } = useDropdown();
  const dispatch = useDispatch();

  const notifications = useMappedState((state) => {
    return state.notifications;
  });
  const [hasNew, setHasNew] = React.useState(notifications ? !!notifications.find((item) => item.new) : false);

  React.useEffect(() => {
    setHasNew(notifications ? !!notifications.find((item) => item.new) : false)
  }, [notifications]);

  const handleReed = React.useCallback((e) => {
    setTimeout(() => {
      dispatch({
        type: "SET_ALL_REED"
      });
    }, 1000);
    handleOpen(e);
  }, [dispatch, handleOpen]);

  return (
      <div className={classes.root}>
        <div >
          {hasNew && <Badge variant="dot" color="secondary" style={{bottom: '20px', top: 'auto'}}><span /></Badge>}
          <Icon className={classes.icon} onClick={handleReed}>notifications</Icon>
        </div>

        <Popover
            id={ id}
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
        >
          <NotificationContainer notifications={notifications}/>
        </Popover>
      </div>
  )
}
export default Notifications;
