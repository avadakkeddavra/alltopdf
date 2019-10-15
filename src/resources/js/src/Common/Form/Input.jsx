import TextField from "@material-ui/core/TextField/TextField";
import React, {useCallback, useState} from "react";
import InputBase from "@material-ui/core/InputBase/InputBase";
import Icon from "@material-ui/core/Icon/Icon";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  input: {
    position: 'relative',
    width: '100%'
  },
  hideBtn: {
    position: 'absolute',
    top: 32,
    right: 10,
    color: '#9c9c9c',
    cursor: 'pointer'
  }
})

const Input = (props) => {
  const _props = Object.assign({}, props);
  const classes = useStyles();
  const variant = props.variant || 'outlined';
  const [type, setType] = useState(props.type || 'text');
  const [showHideBtn] = useState(props.type === 'password');

  const handleShowPassword = useCallback(() => {
    if(!props.value) {
      return;
    }
    if(type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  }, [type, props.value]);
  delete _props.converter;
  delete _props.setValue;
  return (
      props.naked ?
      <InputBase
          {..._props}
      />
      : (
          <div className={classes.input}>
              <TextField
                  {..._props}
                  type={type}
                  fullWidth
                  margin="normal"
                  variant={variant}
              />
            {
              showHideBtn && <Icon className={classes.hideBtn} onClick={handleShowPassword}>{type === 'password' ? 'visibility' : 'visibility_off'}</Icon>
            }
          </div>
      )
  )

}
export default Input;
