import styled from "styled-components";

const StyledButton = styled.button`
  height: 44px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 22px;
  text-transform: uppercase;

  &:hover,
  &:active {
    cursor: pointer;
    background-color: #555555;
  }

  &:disabled {
    background-color: #c4c4c4;
  }
`;

const Button = ({ children, ...otherProps }) => (
  <StyledButton {...otherProps}>{children}</StyledButton>
);

export default Button;
