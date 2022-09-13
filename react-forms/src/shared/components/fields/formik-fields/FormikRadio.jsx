import React from 'react';
import { ErrorMessage } from 'formik';

const FormikRadio = props => {
  const { field, ...rest} = props;

  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      {props.options.map(option => (
        <div className="form-check" key={option.value}>
          <label className="form-check-label">{option.label}</label>
          <input
            {...rest}
            {...field}
            type="radio"
            name={field.name}
            value={option.value}
            className="form-check-input"
          />
        </div>
      ))}
      <span className="error-message">
        <ErrorMessage name={field.name} />
      </span>
    </div>
  );
}

export default FormikRadio;