import {
  Sequence,
  SequenceNumber,
  SequenceColorList,
  SubmitButton,
} from "../../StyledComponents/Components.style";
import { SequenceColor } from "../../StyledComponents/Pin.style";

const NewSequence = ({ sequence, number, onSubmit, onChange }) => {
  return (
    <Sequence>
      <SequenceNumber>{number}</SequenceNumber>
      <SequenceColorList>
        {sequence.map((color, index) => (
          <SequenceColor
            key={`newSequenceColor_${index}`}
            color={color === null ? "empty" : color}
            onClick={() => onChange(index)}
          />
        ))}
      </SequenceColorList>
      <SubmitButton onClick={onSubmit}>OK</SubmitButton>
    </Sequence>
  );
};

export default NewSequence;
