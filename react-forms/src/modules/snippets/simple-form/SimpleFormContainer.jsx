import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import ControlledForm from './ControlledForm';
import UncontrolledForm from './UncontrolledForm';

class SimpleFormContainer extends React.Component {
  render() {
    return (
      <Row>
        <Col xs="6">
          <Card className='p-5'>
            <ControlledForm />
          </Card>
        </Col>
        <Col xs="6">
          <Card className='p-5'>
            <UncontrolledForm />
          </Card>
        </Col>
      </Row>
    )
  }
}

export default SimpleFormContainer;