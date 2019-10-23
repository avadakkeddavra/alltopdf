import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Icon from "@material-ui/core/Icon/Icon";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  title: {
    margin:0,
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = (props) => {
  const {open, handleClose, label, title, className, fullScreen, withoutNavbar} = props;
  const classes = useStyles();

  return (
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen} className={className} TransitionComponent={Transition}>
        {!withoutNavbar && <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <Icon>close</Icon>
            </IconButton>
            <h4  className={classes.title}>
              {label}
            </h4>
            <h4 className={classes.title}>
              {title}
            </h4>
          </Toolbar>
        </AppBar>}
        {props.component}
      </Dialog>
  )
}
export default Modal;
