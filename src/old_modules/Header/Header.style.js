import styled from "styled-components";
import device from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 77px;
  background-color: ${colors.white};
  padding: 12px 0;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;

  @media ${device.tablet} {
    justify-content: flex-start;
    padding-left: 1rem;
  }
`;

export { StyledHeaderContainer };
