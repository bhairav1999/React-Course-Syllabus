import React, { Component } from 'react';

class BasicFormInclassComponets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', this.state.name);
    console.log('Email:', this.state.email);
    console.log('Message:', this.state.message);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BasicFormInclassComponets;
