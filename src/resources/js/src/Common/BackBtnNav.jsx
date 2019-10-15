import * as React from 'react';
import {Icon} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {withRouter} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '15px 0px 35px 0px',
    cursor: 'pointer',
    color: '#636363'
  },
  icon: {
    marginRight: 15
  }
});

const BackBtnNav = (props) => {
  const [linkTo] = React.useState(props.linkTo || '/');
  const classes = useStyles();

  const handleClick = React.useCallback(() => {
    props.history.push(linkTo);
  }, [linkTo, props.history]);
  return (
    <div className={props.className}>
      <span onClick={handleClick} className={classes.root}>
        <Icon className={classes.icon}>arrow_back</Icon>
        <span>{props.btnName || 'Повернутись'}</span>
      </span>
    </div>
  );
};

export default withRouter(BackBtnNav);
