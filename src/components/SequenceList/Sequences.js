import {
  SequenceColorList,
  SequenceNumber,
  Sequence,
  CodeHints,
} from "../../StyledComponents/Components.style";
import {
  SequenceColor,
  CodeHint,
  InPlace,
  OutOfPlace,
  Empty,
} from "../../StyledComponents/Pin.style";

const SequenceListItems = ({ sequence }) => (
  <SequenceColorList>
    {sequence.map((color, index) => (
      <SequenceColor key={`sequenceColor_${index}`} color={color} />
    ))}
  </SequenceColorList>
);

const SequenceHints = ({ answer }) => (
  <CodeHints>
    {answer.map((a, index) => (
      <CodeHint key={`CodeHint_${index}`}>
        {a === "CORRECT" && <InPlace />}
        {a === "SEMICORRECT" && <OutOfPlace />}
        {a === null && <Empty />}
      </CodeHint>
    ))}
  </CodeHints>
);

const Sequences = ({ value, ...rest }) => {
  return (
    <>
      {value.map(({ sequence, answer }, index) => (
        <Sequence key={`Sequence_${index}`}>
          <SequenceNumber>{index + 1}</SequenceNumber>
          <SequenceListItems sequence={sequence} />
          <SequenceHints answer={answer} />
        </Sequence>
      ))}
    </>
  );
};

export default Sequences;
