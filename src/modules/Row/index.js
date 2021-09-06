import { useState, useContext } from "react";
import Sequence from "../../components/Sequence";
import GameContext from "../../context";

const Row = ({ number, colorSequence, userHints, onSubmit, ...otherProps }) => {
  const [colors, setColors] = useState(
    colorSequence || [null, null, null, null]
  );
  const readOnly = !!colorSequence || colorSequence === false;
  const { selectedColor } = useContext(GameContext);

  const onColorChange = (index) => {
    const temp = [...colors];
    temp[index] = selectedColor;
    setColors(temp);
  };

  return (
    <Sequence
      number={number}
      readonly={readOnly}
      colors={colors}
      hints={userHints}
      onColorChange={onColorChange}
      onPlaySubmit={() => onSubmit(colors)}
    />
  );
};

export default Row;
