import device from "../../styles/breakpoints";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.grey};
  padding: 1rem;
`;

export const StyledRowNumber = styled.div`
  font-size: 1.5rem;
  padding: 9px auto 9px 10px;
  color: ${colors.grey};

  @media ${device.tablet} {
    display: none;
  }
`;
export const StyledGuessContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 0.5rem;
  margin-right: 1rem;
`;

export const StyledHintContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.3rem;
`;
