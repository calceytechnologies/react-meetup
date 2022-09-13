import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import Input from '../../../shared/components/fields/custom-fields/Input';
import Select from '../../../shared/components/fields/custom-fields/Select';
import validate from '../../../helpers/FormValidator';
import Radio from '../../../shared/components/fields/custom-fields/Radio';
import Forms from '../../../constants/Forms';

class ComplexFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      formControls: {          
        name: {
          value: '',
          // Denotes if the input field has been touched
          touched: false,
          // Denotes if the input field is valid and the error message if invalid
          error: '',
          // List of rules to be checked before the input is regarded valid
          validationRules: {
            minLength: 3,
            isRequired: true,
          }
        },
        email: {
          value: '',
          valid: false,
          touched: false,
          error: '',
          validationRules: {
            isEmail: true,
            isRequired: true,
          }
        },
        hobby: {
          value: '',
          valid: false,
          touched: false,
          error: '',
          validationRules: {
            isRequired: true,
          },
        },
        studentStatus: {
          value: '',
          valid: false,
          touched: false,
          error: '',
          validationRules: {
            isRequired: true,
          },
        }
      },
      // Keeps track of validity of entire form
      formIsValid: false,
    }
  }
  
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
  
    // Copy of current state
    const updatedControls = {
      ...this.state.formControls
    };

    // Copy of slice of state for input field being updated
    const updatedFormElement = {
      ...this.state.formControls[name]
    };

    // Set input value
    updatedFormElement.value = value;
    // Set field touched as true
    updatedFormElement.touched = true;
    // Validate the input
    updatedFormElement.error = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    // Iterate through input state slices and update form validity
    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = 
        !updatedControls[inputIdentifier].error && 
        updatedControls[inputIdentifier].touched && 
        formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid
    });
  }

  handleSubmit = (event) => {
    const { name, email, hobby, studentStatus } = this.state.formControls;
    alert(JSON.stringify(
      { 
        name: name.value,
        email: email.value,
        hobby: hobby.value, 
        studentStatus: studentStatus.value 
      }, 
      null, 
      2));
    event.preventDefault();
  }
  
  render() {
    const { name, email, hobby, studentStatus } = this.state.formControls;
    return (
      <Row>
        <Col>
          <Card className='p-5'>
            <form onSubmit={this.handleSubmit} noValidate>
              <h2 className="mb-5">Complex Form</h2>
              <Input 
                name="name"
                type="text"
                value={name.value}
                touched={name.touched}
                error={name.error}
                label="Name"
                onChange={this.handleChange}
              />
              <Input 
                name="email"
                type="email"
                value={email.value}
                touched={email.touched}
                error={email.error}
                label="Email"
                onChange={this.handleChange}
              />
              <Select 
                name="hobby"
                value={hobby.value}
                options={Forms.hobbyOptions}
                touched={hobby.touched}
                error={hobby.error}
                label="Hobby"
                onChange={this.handleChange}
              />
              <Radio 
                name="studentStatus"
                value={studentStatus.value}
                options={Forms.studentStatusOptions}
                touched={studentStatus.touched}
                error={studentStatus.error}
                label="Are you a student?"
                onChange={this.handleChange}
              />
              <button 
                type="submit" 
                disabled={!this.state.formIsValid} 
                className="btn btn-primary">Submit
              </button>
            </form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ComplexFormContainer;