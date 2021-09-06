import styled from "styled-components";
import device from "../../styles/breakpoints";

const StyledSequenceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 1rem;
`;

const StyledSequenceNumber = styled.div`
  font-size: 1.5rem;
  padding: 9px auto 9px 10px;
  color: #c4c4c4;

  @media ${device.tablet} {
    display: none;
  }
`;
const StyledGuessContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  gap: 0.5rem;
`;

const StyledHintContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.5rem;
`;

export {
  StyledSequenceContainer,
  StyledSequenceNumber,
  StyledGuessContainer,
  StyledHintContainer,
};
