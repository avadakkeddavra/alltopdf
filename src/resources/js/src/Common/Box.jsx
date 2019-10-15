import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import {makeStyles} from "@material-ui/styles";
import classnames from "classnames";


const useStyles = makeStyles({
  root: {
    boxShadow: '0 0 28px 0 rgba(82,63,105,.08)',
    padding: '15px 20px'
  }
});

const Box = (props) => {
  const classes = useStyles();
  return (
      <Paper className={classnames(classes.root, props.className)}>
        {props.children}
      </Paper>
  )
};
export default Box;
