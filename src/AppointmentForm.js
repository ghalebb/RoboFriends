import React, { Component } from 'react';

class AppointmentForm extends Component {
  state = {
    name: '',
    email: '',
    date: '',
    time: ''
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleInputChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" onChange={this.handleInputChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AppointmentForm;
