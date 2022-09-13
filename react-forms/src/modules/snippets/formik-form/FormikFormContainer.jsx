import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Row, Col, Card } from 'reactstrap';
import FormikSelect from '../../../shared/components/fields/formik-fields/FormikSelect';
import FormikRadio from '../../../shared/components/fields/formik-fields/FormikRadio';
import FormikInput from '../../../shared/components/fields/formik-fields/FormikInput';
import Forms from '../../../constants/Forms';

const FormikFormContainer = () => {
  /**
   * 1. No state declaration.
   * 2. No onChange handlers.
   * 3. Submit handler calls preventDefault() for you.
   */

  const validate = (values) => {
    const requiredMessage = 'This is a required field.';

    const errors = {};
    
    if (values.name.length === 0) {
      errors.name = requiredMessage;
    } else if (values.name.length < 3) {
      errors.name = 'Your name has to include a minimum of 3 characters.';
    }
    if (values.email.length === 0) {
      errors.email = requiredMessage;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'This email address is invalid.';
    }
    if (values.hobby === '') {
      errors.hobby = requiredMessage;
    }
    if (values.studentStatus === '') {
      errors.studentStatus = requiredMessage;
    }
    return errors;
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Row>
      <Col>
        <Card className='p-5'>
          <h2 className="mb-5">Formik Form</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              hobby: '',
              studentStatus: '',
            }}
            validate={validate}
            onSubmit={handleSubmit}
          >
          {({ dirty }) => (
            <Form noValidate>
              <Field 
                name="name"
                type="text"
                label="Name"
                component={FormikInput}
              />
              <Field 
                name="email"
                type="email"
                label="Email"
                component={FormikInput}
              />
              <Field 
                name="hobby" 
                options={Forms.hobbyOptions} 
                label="Hobby"
                component={FormikSelect}
              />
              <Field 
                name="studentStatus"
                options={Forms.studentStatusOptions}
                label="Are you a student?"
                component={FormikRadio}
              />
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={!dirty}
              >
                Submit
              </button>
            </Form>
          )}
          </Formik>
        </Card>
      </Col>
    </Row>
  );
}

export default FormikFormContainer;