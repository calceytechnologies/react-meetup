import React from 'react';
import { useField } from 'formik';
import { TextField, FormControl } from '@mui/material';

 const MuiFormikInputWithHooks = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  const { touched, error } = meta;

  const isError = touched && Boolean(error);
  const helperText = touched && error;

  return (
    <FormControl fullWidth>
      <TextField
        {...field}
        {...props}
        variant="outlined"
        label={label}
        error={isError}
        helperText={helperText}
      />
    </FormControl>
  );
};

export default MuiFormikInputWithHooks;