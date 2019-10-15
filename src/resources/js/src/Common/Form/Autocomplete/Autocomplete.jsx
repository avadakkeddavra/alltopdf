import AsyncSelect from 'react-select/async'
import { createStyles, withStyles } from '@material-ui/core'
import * as React from 'react'
import classNames from "classnames";

const styles = (theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      lineHeight: '45px !important',
      marginBottom: 7,
      zIndex: 100
    },
    input: {
      display: 'flex',
      padding: 0,
      marginLeft: -8,
    },
    valueContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      flex: 1,
      alignItems: 'center',
      overflow: 'hidden',
    },
  })



const AutocompleteSingle = (props) => {
  const { value, onChange, label, load, disabled, classes, required, className, style } = props

  return (
      <div style={{marginTop: 10}}>
        <AsyncSelect
            loadOptions={load}
            className={classNames(classes.root, className)}
            value={value}
            classes={classes}
            cacheOptions
            style={style}
            required={required}
            disabled={disabled}
            defaultOptions
            textFieldProps={{
              label: label,
              InputLabelProps: {
                shrink: true,
              },
            }}
            onChange={onChange}
            placeholder={`${label}`}
        />
      </div>
  )
}

export default withStyles(styles)(AutocompleteSingle)
