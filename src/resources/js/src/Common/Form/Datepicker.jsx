import React from 'react';
import MomentUtils from "@date-io/moment";
import "moment/locale/uk"
import classnames from 'classnames';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker, KeyboardDatePicker,
} from '@material-ui/pickers';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
})

const Datepicker = ({ label, name, onChange, /* setValue, */ value, datetime, className }) => {
  const classes = useStyles();
  return (
      <MuiPickersUtilsProvider utils={MomentUtils} locale={'ru'}>
        {datetime ?
          <KeyboardDateTimePicker
              margin="normal"
              className={classnames(classes.root, className || '')}
              inputVariant="outlined"
              variant="inline"
              label={label}
              name={name}
              onChange={onChange}
              value={value}
              datetime={datetime}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
          /> :
          <KeyboardDatePicker
            margin="normal"
            className={classnames(classes.root, className || '')}
            inputVariant="outlined"
            variant="inline"
            label={label}
            name={name}
            onChange={onChange}
            value={value}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        }
      </MuiPickersUtilsProvider>
  )
}
export default Datepicker;
