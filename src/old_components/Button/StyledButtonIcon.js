import styled from "styled-components";

export default styled.button`
  height: 44px;
  width: 44px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #f0f1f6;
  color: #ffffff;
  border: none;
  border-radius: 22px;
  stroke: #000000;

  &:hover,
  &:active {
    cursor: pointer;
    background-color: #d9dadc;
  }

  &:disabled {
    background-color: #f0f1f6;
    stroke: #c4c4c4;
  }
`;
