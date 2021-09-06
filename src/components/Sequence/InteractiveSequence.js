import { SelectablePin } from "../Pin";
import { PlayButton } from "../Button";
import {
  StyledSequenceContainer,
  StyledSequenceNumber,
  StyledGuessContainer,
  StyledHintContainer,
} from "./Sequence.style";

const InteractiveSequence = ({
  number,
  colors,
  onSequenceChange,
  onPlaySubmit,
  ...otherProps
}) => (
  <StyledSequenceContainer {...otherProps}>
    <StyledSequenceNumber>{number}</StyledSequenceNumber>
    <StyledGuessContainer>
      {colors.map((color, index) => (
        <SelectablePin
          key={`SelectablePin${number}_${index}`}
          color={color}
          onClick={() => onSequenceChange(index)}
        />
      ))}
    </StyledGuessContainer>
    <StyledHintContainer>
      <PlayButton onClick={onPlaySubmit} />
    </StyledHintContainer>
  </StyledSequenceContainer>
);

export default InteractiveSequence;
