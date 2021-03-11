import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.li`
  padding-bottom: 10px;
`;
const Button = styled.button`
  border-style: solid;
  border-width: 1px;
  padding: 1px 7px 2px;
  text-rendering: auto;
  color: initial;
  display: inline-block;
  text-align: start;
  margin: 5px;
  border-radius: 5px;
  &:hover {
    background: #4a6dbb;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
  }
`;
const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className="list">
    {contacts.map((contact) => (
      <Item className="item" key={contact.id}>
        {contact.name + ": " + contact.number}
        {
          <Button
            className="button"
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </Button>
        }
      </Item>
    ))}
  </ul>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
