import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    alert(`Hey there, ${this.state.name}!`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className="mb-5">Controlled Components</h2>

        <div class="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            className="form-control"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default ControlledForm;