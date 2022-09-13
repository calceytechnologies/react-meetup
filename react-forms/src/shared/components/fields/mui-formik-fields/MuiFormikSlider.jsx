import React from 'react';
import { FormControl, FormLabel, Slider } from '@mui/material';

const MuiFormikSlider = ({ field, label, ...props }) => {
  return (
    <FormControl fullWidth>
      <FormLabel color="primary" className="mb-2">{label}</FormLabel>
      <Slider
        {...field}
        {...props}
      />
    </FormControl>
  );
};

export default MuiFormikSlider;