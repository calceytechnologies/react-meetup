
import React from 'react';
import { ErrorMessage } from 'formik';

const FormikInput = (props) => {
  const { label, field, ...rest } = props;

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        {...rest}
        {...field}
        className="form-control w-50"
      />
      <span className="error-message">
        <ErrorMessage name={field.name} />
      </span>
    </div>
  );
}

export default FormikInput;