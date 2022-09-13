import React from 'react';
import { TextField, FormControl } from '@mui/material';
import get from 'lodash/get';

 const MuiFormikInput = ({ field, form: { touched, errors }, label, ...props }) => {
  const error = get(touched, field.name) && Boolean(get(errors, field.name));
  const helperText = get(touched, field.name) && get(errors, field.name);

  return (
    <FormControl fullWidth>
      <TextField
        {...field}
        {...props}
        variant="outlined"
        label={label}
        error={error}
        helperText={helperText}
      />
    </FormControl>
  );
};

export default MuiFormikInput;