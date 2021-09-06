import { HintPin, Pin } from "../Pin";
import {
  StyledSequenceContainer,
  StyledSequenceNumber,
  StyledGuessContainer,
  StyledHintContainer,
} from "./Sequence.style";

const InteractiveSequence = ({ number, colors, hints, ...otherProps }) => (
  <StyledSequenceContainer {...otherProps}>
    <StyledSequenceNumber>{number}</StyledSequenceNumber>
    <StyledGuessContainer>
      {colors.map((color, index) => (
        <Pin key={`Pin${number}_${index}`} color={color} />
      ))}
    </StyledGuessContainer>
    <StyledHintContainer>
      {hints.map((color, index) => (
        <HintPin key={`HintPin${number}_${index}`} color={color} />
      ))}
    </StyledHintContainer>
  </StyledSequenceContainer>
);

export default InteractiveSequence;
