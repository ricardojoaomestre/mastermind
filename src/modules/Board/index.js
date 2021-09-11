import { useState, useEffect } from "react";
import ColorPicker from "../ColorPicker";
import { ShuffleButton, RefreshButton, Button } from "../../components/Button";
import Alert from "../../components/Alert";

import {
  BoardContainer,
  ColorPanel,
  PlayPanel,
  RemainingTentatives,
} from "./Board.style";
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
  const [guessRemaining, setGuessRemaining] = useState(9);
  const [secret, setSecret] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);

  const generateSequence = () => {
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
    const arr = [...emptySequence].fill(colors.black, 0, correct);
    arr.fill(colors.grey, correct, correct + semiCorrect);
    console.log(arr);
    return arr;
  };

  const reset = () => {
    setSelectedColor(colors.red);
    setSecret(generateSequence());
    setSequences([]);
    setAnswers([]);
    setCurrentSequence([...emptySequence]);
    setGuessRemaining(9);
    setGameOver(false);
    setGameWin(false);
  };

  useEffect(() => {
    setSecret(generateSequence());
  }, []);

  const onColorChange = (color) => {
    setSelectedColor(color);
  };

  const onSequenceChange = (index) => {
    const temp = [...currentSequence];
    temp[index] = selectedColor;
    setCurrentSequence(temp);
  };

  const onPlaySubmit = () => {
    const hint = calculateHint(secret, currentSequence);
    if (hint.filter((x) => x === colors.black) === 4) {
      setGameWin(true);
    } else if (guessRemaining - 1 === 0) {
      setGameOver(true);
    } else {
      setSequences((s) => [...s, currentSequence]);
      setAnswers((a) => [...a, hint]);
      setCurrentSequence([...emptySequence]);
      setGuessRemaining((x) => x - 1);
    }
  };

  return (
    <BoardContainer>
      <ColorPanel>
        <ColorPicker
          selectedColor={selectedColor}
          onColorChange={onColorChange}
        />
        <ShuffleButton onClick={() => setCurrentSequence(generateSequence())} />
        <RefreshButton onClick={reset} />
      </ColorPanel>
      <PlayPanel style={{ flex: 1 }}>
        <RemainingTentatives>
          {guessRemaining} guesses remaining
        </RemainingTentatives>
        {sequences.map((sequence, index) => (
          <ReadonlySequence
            number={index + 1}
            colors={sequence}
            hints={answers[index]}
          />
        ))}
        <InteractiveSequece
          number={sequences.length + 1}
          colors={currentSequence}
          onPlaySubmit={onPlaySubmit}
          onSequenceChange={onSequenceChange}
        />
      </PlayPanel>
      {gameOver && (
        <Alert>
          <p>😔 You've failed to break the code</p>
          <Button onClick={reset}>Try Again</Button>
        </Alert>
      )}
      {gameWin && (
        <Alert>
          <p>😄 You've broken the code!</p>
          <Button onClick={reset}>Play Again</Button>
        </Alert>
      )}
    </BoardContainer>
  );
};

export default Board;
