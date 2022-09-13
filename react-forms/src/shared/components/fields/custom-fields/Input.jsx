
import React from 'react';

const Input = (props) => {
  let controlClass = 'form-control w-50';

  const isError = props.touched && props.error;

  if (isError) {
    controlClass = 'form-control w-50 control-error';
  }

  const { label, ...rest } = props;

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input 
        className={controlClass}
        {...rest} 
      />
      {isError && (
        <span className="error-message">{props.error}</span>
      )}
    </div>
  );
}

export default Input;