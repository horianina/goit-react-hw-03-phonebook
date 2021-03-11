import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 200px;
`;

const Button = styled.button`
  width: 100px;
`;

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
