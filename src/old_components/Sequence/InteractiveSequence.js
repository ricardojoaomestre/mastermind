import { SelectablePin } from "../Pin";
import { Button } from "../Button";
import {
  StyledSequenceContainer,
  StyledSequenceNumber,
  StyledGuessContainer,
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

    <Button
      disabled={colors.filter((x) => x !== null).length !== 4}
      onClick={onPlaySubmit}
    >
      Ok
    </Button>
  </StyledSequenceContainer>
);

export default InteractiveSequence;
