import styled from "styled-components";
import device from "../../styles/breakpoints";
import { colors } from "../../styles/colors";

const StyledColorPickerContainer = styled.div`
  background-color: ${colors.white};
  padding: 20px 10px;
  border-radius: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media ${device.tablet} {
    border-radius: 0 0 20px 0;
  }
`;

export { StyledColorPickerContainer };
