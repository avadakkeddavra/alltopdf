// import { useDispatch } from "redux-react-hook";
import { Icon } from "@material-ui/core";
import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/styles";
// import { useTranslation } from "react-i18next";

import { carsIcon, elevatorIcon, fieldIcon, rideIcon, weightIcon } from "../svg";
// import notify from "../utils/notify";
// import WSProvider from "../provider/io";
// import settings from "../services/settings";

const useStyles = makeStyles({
  success: {
    color: '#46ac40'
  },
  warning: {
    color: '#da5949'
  },
  info: {
    color: '#d38842'
  }
})

const useWsNotifications = (history) => {
  // const { t } = useTranslation();
  const classes = useStyles();

  const getIcon = useCallback((type) => {
    if(type.indexOf('ride') !== -1) {
      return <Icon className={classes.success}>{rideIcon}</Icon>;
    }
    if(type.indexOf('tok') !== -1) {
      return <Icon className={classes.info}>{weightIcon}</Icon>;
    }
    if(type.indexOf('Elevator') !== -1) {
      return <Icon className={classes.info}>{elevatorIcon}</Icon>;
    }
    if(type.indexOf('driver') !== -1) {
      return <Icon className={classes.info}>{carsIcon}</Icon>;
    }
    return <Icon className={classes.warning}>{fieldIcon}</Icon>;
  }, [classes]);
  Notification.requestPermission(() => {});
  return {
    getIcon
  }
};
export default useWsNotifications;
