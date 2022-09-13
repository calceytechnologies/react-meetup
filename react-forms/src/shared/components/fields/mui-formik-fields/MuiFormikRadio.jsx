import React from 'react';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';

 const MuiFormikRadio = ({ field, label, options, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup {...field} {...props}>
        {options.map(option => (
          <FormControlLabel
            key={option.value} 
            value={option.value} 
            control={<Radio />} 
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
    
  );
};

export default MuiFormikRadio;