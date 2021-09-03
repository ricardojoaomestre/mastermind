import { HintPin, Pin } from "../../components/Pin";
import { useState } from "react";
import { colors, hintTypes } from "../../enums";

import {
  StyledRowContainer,
  StyledRowNumber,
  StyledGuessContainer,
  StyledHintContainer,
} from "./StyledRow";

const Row = (props) => {
  const [colors, setColors] = useState([null, null, null, null]);
  const [hints, setHints] = useState([
    hintTypes.correct,
    hintTypes.semicorrect,
    hintTypes.none,
    hintTypes.none,
  ]);
  const onColorChange = (index) => {
    console.log(index);
  };
  const hintsMap = {
    [hintTypes.correct]: colors.black,
    [hintTypes.semicorrect]: colors.white,
    [hintTypes.none]: "#C4C4C4",
  };

  return (
    <StyledRowContainer {...props}>
      <StyledRowNumber>1</StyledRowNumber>
      <StyledGuessContainer>
        {colors.map((color, index) => (
          <Pin
            key={`Pin_Row1_Index${index}`}
            color={color}
            onClick={() => onColorChange(index)}
          />
        ))}
      </StyledGuessContainer>
      <StyledHintContainer>
        {hints.map((value, index) => (
          <HintPin key={`HintPin_Row1_Index${index}`} color={hintsMap[value]} />
        ))}
      </StyledHintContainer>
    </StyledRowContainer>
  );
};
export default Row;
