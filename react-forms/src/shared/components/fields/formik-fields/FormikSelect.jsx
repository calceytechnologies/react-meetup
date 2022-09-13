import React from 'react';
import { Input } from 'reactstrap';
import { ErrorMessage } from 'formik';

const FormikSelect = (props) => {
  const { label, options, field, ...rest } = props;

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <Input
        {...rest}
        {...field}
        className="form-control w-50"
        type="select"
      >
        <option value="" disabled selected>Select your option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Input>
      <span className="error-message">
        <ErrorMessage name={field.name} />
      </span>
    </div>
  );
}

export default FormikSelect;