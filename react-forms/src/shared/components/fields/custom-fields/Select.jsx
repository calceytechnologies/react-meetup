import React from 'react';
import { Input } from 'reactstrap';

const Select = (props) => {
  let controlClass = 'form-control w-50';

  const isError = props.touched && props.error;

  if (isError) {
    controlClass = 'form-control w-50 control-error';
  }

  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <Input
        {...props}
        className={controlClass} 
        value={props.value} 
        onChange={props.onChange}
        name={props.name}
        type="select"
        
      >
        <option value="" disabled selected>Select your option</option>
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Input>
      {isError && (
        <span className="error-message">{props.error}</span>
      )}
    </div>
  );
}

export default Select;