import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import {Select as MUISelect} from '@material-ui/core';
import OutlinedInput from "@material-ui/core/OutlinedInput/OutlinedInput";

const Select = (props) => {
  const {
    label,
    className,
    name,
    value,
    handleChange,
    data
  } = props;
  return (
      <FormControl variant="outlined" className={className}>
        <InputLabel>{label}</InputLabel>
        <MUISelect
            value={value || ''}
            onChange={handleChange}
            input={<OutlinedInput name={name} labelWidth={150}/>}
        >
          {
            data && data.length > 0 &&
                data.map((item) => {
                  return (
                      <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>
                  )
                })
          }
        </MUISelect>
      </FormControl>
  )
};
export default Select;
