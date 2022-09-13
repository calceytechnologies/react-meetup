import React from 'react';

const Radio = props => {
  let controlClass = 'form-check-input';

  const isError = props.touched && props.error;

  if (isError) {
    controlClass = 'form-check-input control-error';
  }

  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      {props.options.map(option => (
        <div className="form-check" key={option.value}>
          <label className="form-check-label">{option.label}</label>
          <input 
            type="radio"
            name={props.name}
            value={option.value}
            onChange={props.onChange}
            className={controlClass}
          />
        </div>
      ))}
      {isError && (
        <span className="error-message">{props.error}</span>
      )}
    </div>
  );
}

export default Radio;