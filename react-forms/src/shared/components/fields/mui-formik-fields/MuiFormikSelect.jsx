import React from 'react';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@mui/material';
import get from 'lodash/get';

 const MuiFormikSelect = ({ field, form: { touched, errors }, label, fullWidth, options, ...props }) => {
  const error = get(touched, field.name) && Boolean(get(errors, field.name));
  const helperText = get(touched, field.name) && get(errors, field.name);

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <Select
        {...field}
        {...props}
        label={label}
        error={error}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
      {error && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default MuiFormikSelect;