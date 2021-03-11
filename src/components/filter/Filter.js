import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Find = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export default function Filter({ value, onChangeFilter }) {
  return (
    <Find>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </Find>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
