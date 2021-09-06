import { useState } from "react";
import ColorPicker from "../ColorPicker";
import { ShuffleButton, RefreshButton } from "../../components/Button";
import { BoardContainer, Panel } from "./Board.style";
import {
  InteractiveSequece,
  ReadonlySequence,
} from "../../components/Sequence";
import { colors } from "../../styles/colors";

const Board = () => {
  const [selectedColor, setSelectedColor] = useState(colors.red);
  const [sequences, setSequences] = useState([]);
  const [answers, setAnswers] = useState([]);
  const emptySequence = [null, null, null, null];
  const [currentSequence, setCurrentSequence] = useState([...emptySequence]);

  const onColorChange = (color) => {
    setSelectedColor(color);
  };

  const onSequenceChange = (index) => {
    const temp = [...currentSequence];
    temp[index] = selectedColor;
    setCurrentSequence(temp);
  };

  const onPlaySubmit = () => {
    setSequences((s) => [...s, currentSequence]);
    setAnswers((a) => [...a, []]);
    setCurrentSequence([...emptySequence]);
  };

  return (
    <BoardContainer>
      <Panel>
        <ColorPicker
          selectedColor={selectedColor}
          onColorChange={onColorChange}
        />
        <ShuffleButton />
        <RefreshButton />
      </Panel>
      <Panel style={{ flex: 1 }}>
        {sequences.map((sequence, index) => (
          <ReadonlySequence
            number={index + 1}
            colors={sequence}
            hints={answers[index]}
          />
        ))}
        <InteractiveSequece
          colors={currentSequence}
          onPlaySubmit={onPlaySubmit}
          onSequenceChange={onSequenceChange}
        />
      </Panel>
    </BoardContainer>
  );
};

export default Board;
