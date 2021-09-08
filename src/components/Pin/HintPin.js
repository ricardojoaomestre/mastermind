import styled from "styled-components";
import BasePin from "./BasePin";

const StyledHintPin = styled(BasePin)`
  width: 14px;
  height: 14px;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  background-color: ${(props) => props.color || "transparent"};

  &:hover {
    cursor: default;
  }
`;

const HintPin = (props) => <StyledHintPin {...props} />;

export default HintPin;
