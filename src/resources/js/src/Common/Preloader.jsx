import * as React from "react";
import {makeStyles} from "@material-ui/styles";
import logo from "../../logo2.png";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    opacity: 1,
    transition: '0.3s opacity'
  },
  progress: {
    marginTop: 50
  },
  opacity: {
    opacity: 0
  }
}));

const Preloader = () => {
  const classes = useStyles();
  const [mounted, setMounted] = React.useState(true);
  React.useEffect(() => {
    return () => {
      setMounted(false);
    }
  }, [setMounted]);
  return (
      <div className={classes.root}>
        <img src={logo} alt=""/>
        <CircularProgress className={classNames(classes.progress, {
          [classes.opacity]: !mounted
        })} />
      </div>
  )
};

export default Preloader;
