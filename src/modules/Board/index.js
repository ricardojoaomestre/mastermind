import { useState, useEffect } from "react";
import ColorPicker from "../ColorPicker";
import { ShuffleButton, RefreshButton } from "../../components/Button";
import { BoardContainer, Panel } from "./Board.style";
import {
  InteractiveSequece,
  ReadonlySequence,
} from "../../components/Sequence";
import { colors, pinColors } from "../../styles/colors";

const Board = () => {
  const [selectedColor, setSelectedColor] = useState(colors.red);
  const [sequences, setSequences] = useState([]);
  const [answers, setAnswers] = useState([]);
  const emptySequence = [null, null, null, null];
  const [currentSequence, setCurrentSequence] = useState([...emptySequence]);
  const [secret, setSecret] = useState([]);

  const generateSecret = () => {
    const palette = [...Object.keys(pinColors)];
    const arr = [];
    for (var i = 0, max = palette.length; i < 4; i++, max--) {
      const index = Math.floor(Math.random() * max);
      arr.push(pinColors[palette.splice(index, 1)[0]]);
    }
    return arr;
  };

  const calculateHint = (secret, seq) => {
    let semiCorrect = 0;
    let correct = 0;
    for (var i = 0; i < seq.length; i++) {
      const index = secret.indexOf(seq[i]);
      if (index !== -1) {
        if (index !== i) {
          semiCorrect++;
        } else {
          correct++;
        }
      }
    }
    console.log(secret);
    console.log(seq);
    const arr = [...emptySequence].fill(colors.black, 0, correct);
    arr.fill(colors.white, correct, correct + semiCorrect);
    console.log(arr);
    return arr;
  };

  useEffect(() => setSecret(generateSecret()), []);

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
    setAnswers((a) => [...a, calculateHint(secret, currentSequence)]);
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
