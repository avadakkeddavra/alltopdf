import React from "react";
import {treeIcon, truckFilledIcon} from "../../svg";
import Icon from "@material-ui/core/Icon/Icon";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button/Button";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 500px)'
  },
  tree: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  car: {
    width: 50,
    height: 38,
    position: 'absolute',
    right: 0,
    bottom: 0,
    animation: 'move 5s linear infinite'
  },
  image: {
    width: 120,
    height:50,
    overflow: 'hidden',
    position: 'relative',
    margin: '0 auto',
    borderBottom: '2px solid #000'
  }
}))

const NotFound = (props) => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <div>
          <div className={classes.image}>
            <Icon className={classes.tree}>{treeIcon}</Icon>
            <Icon className={classes.car}>{truckFilledIcon}</Icon>
          </div>
          <br/>
          <h1>404</h1>
          <p>{t('not_found_page')}</p>
          <Button color="primary" variant="contained" onClick={() => {props.history.push('/rides')}}>{t('back_to_main')}</Button>
        </div>
      </div>
  )
};
export default NotFound;
