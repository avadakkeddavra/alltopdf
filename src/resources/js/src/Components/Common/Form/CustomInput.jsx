import React from "react";
import {makeStyles} from "@material-ui/styles";
import classnames from 'classnames';

const useStyles = makeStyles(theme => ({
  inputRoot: {
    textAlign: 'left',
    width: '100%'
  },
  input: {
    display: 'block',
    minHeight: 38,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 15,
    border: '1px solid hsl(0,0%,80%)',
    padding: '5px 10px',
    width: '100%',
    outline: 'none',
    boxShadow: 'none',
    margin: 0,
    borderRadius: '4px',
    color: theme.palette.common.black,
    boxSizing: 'border-box',
    '&:focus': {
      borderColor: 'transparent'
    }
  },
  label: {
    display: 'block',
    fontSize: 13,
    marginBottom: 3,
    color: '#969696',
    fontWeight: '400',
    transition: '0.3s',
  },
  inputCover: {
    border: '2px solid transparent',
  },
  inputActive:{
    position: 'relative',
    '&:after': {
      content: "''",
      boxSizing: 'border-box',
      border: '2px solid ' + theme.palette.primary.main,
      borderRadius: '5px',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },
  },
  labelErrored: {
    color: theme.palette.accent.main
  },
  inputErrored: {
    borderColor: theme.palette.accent.main
  },
  labelActive: {
    color: theme.palette.primary.main
  }
}));

const CustomInput = (props) => {
  const classes = useStyles();
  const [focused, setFocused] = React.useState(false);
  return (
      <div className={classes.inputRoot}>
        <label className={classnames(classes.label, {
          [classes.labelErrored]: props.error
        })}>{props.label}</label>
        <div className={classnames(classes.inputCover, {
          [classes.inputErrored]: props.error,
          [classes.inputActive]: focused
        })}>
          <input
              className={classes.input}
              id={props.name}
              name={props.name}
              value={props.value}
              onChange={props.onChange}
              onFocus={() => {setFocused(true)}}
              onBlur={() => {setFocused(false)}}
          />
        </div>
      </div>
  )
}

export default CustomInput;
