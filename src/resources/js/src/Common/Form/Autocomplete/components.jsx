import { Chip, Icon, MenuItem, Paper, TextField, Typography } from '@material-ui/core'
import classNames from 'classnames'
import * as React from 'react'

export function inputComponent({ ...props }) {
  const newProps = Object.assign(props, {})
  delete newProps.inputRef
  return <div {...newProps} style={{ padding: 0, marginLeft: -10 }} />
}

export function Control(props) {
  return (
      <TextField
          fullWidth
          style={{ padding: 0, margin: 0 }}
          InputProps={{
            inputComponent,
            inputProps: {
              className: props.selectProps.classes ? props.selectProps.classes.input : '',
              inputRef: props.innerRef,
              children: props.children,
              ...props.innerProps,
            },
          }}
          {...props.selectProps.textFieldProps}
      />
  )
}

export function Placeholder(props) {
  return (
      <Typography
          color="textSecondary"
          style={{ marginLeft: 10 }}
          className={props.selectProps.classes.placeholder}
          {...props.innerProps}
      >
        {props.children}
      </Typography>
  )
}

export function Menu(props) {
  return (
      <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
        {props.children}
      </Paper>
  )
}
export function Option(props) {
  return (
      <MenuItem
          buttonRef={props.innerRef}
          selected={props.isFocused}
          component="div"
          style={{
            fontWeight: props.isSelected ? 500 : 400,
            margin: '0 !important',
          }}
          {...props.innerProps}
      >
        {props.children}
      </MenuItem>
  )
}
export function MultiValue(props) {
  return (
      <Chip
          tabIndex={-1}
          label={props.children}
          className={classNames(props.selectProps.classes.chip, {
            [props.selectProps.classes.chipFocused]: props.isFocused,
          })}
          onDelete={props.removeProps.onClick}
          deleteIcon={<Icon>close</Icon>}
      />
  )
}
