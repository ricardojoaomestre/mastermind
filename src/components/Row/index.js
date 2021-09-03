import styled from "styled-components";
import { HintPin, SelectablePin } from "../Pin";

const StyledRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  padding: 1rem;
`;

const StyledRowNumber = styled.div`
  font-size: 1.5rem;
  padding: 9px auto 9px 10px;
  color: #c4c4c4;
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

const Row = (props) => (
  <StyledRowContainer>
    <StyledRowNumber>1</StyledRowNumber>
    <StyledGuessContainer>
      <SelectablePin />
      <SelectablePin />
      <SelectablePin />
      <SelectablePin />
    </StyledGuessContainer>
    <StyledHintContainer>
      <HintPin />
      <HintPin />
      <HintPin />
      <HintPin />
    </StyledHintContainer>
  </StyledRowContainer>
);

export default Row;
