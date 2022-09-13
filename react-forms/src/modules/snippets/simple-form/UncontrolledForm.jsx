import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
  }

  handleSubmit = (event) => {
    alert(`Hey there, ${this.nameRef.current.value}!`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="mb-5">Uncontrolled Components</h2>

        <div class="mb-3">
          <label className="form-label">Name</label>
          <input type="text" ref={this.nameRef} className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default UncontrolledForm;