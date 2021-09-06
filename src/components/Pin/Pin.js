import styled from "styled-components";
import BasePin from "./BasePin";

const StyledPin = styled(BasePin)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

const Pin = (props) => <StyledPin {...props} />;

export default Pin;
