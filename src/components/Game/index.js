import { Content, Sidebar, Main } from "../../StyledComponents/Layout.style";
import {
  PrimaryButton,
  Alert,
  AlertMessage,
  Counter,
  SequenceList,
} from "../../StyledComponents/Components.style";
import ColorSelector from "../ColorSelector";
import Actions from "../Actions";
import { NewSequence, Sequences } from "../SequenceList";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
const Game = () => {
  const theme = useContext(ThemeContext);
  const { gameColors } = theme;

  const EMPTY_SEQUENCE = [null, null, null, null];

  const [selectedColor, setSelectedColor] = useState(gameColors.RED);
  const [sequence, setSequence] = useState([...EMPTY_SEQUENCE]);
  const [sequences, setSequences] = useState([]);
  const [secret, setSecret] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  const [isLoser, setIsLoser] = useState(false);

  /* Logic */
  const generateRandomSequence = () => {
    const palette = [...Object.keys(gameColors)];
    const arr = [];
    for (var i = 0, max = palette.length; i < 4; i++, max--) {
      const index = Math.floor(Math.random() * max);
      arr.push(gameColors[palette.splice(index, 1)[0]]);
    }
    return arr;
  };

  const getAnswer = () => {
    let semiCorrect = 0;
    let correct = 0;
    for (var i = 0; i < sequence.length; i++) {
      const index = secret.indexOf(sequence[i]);
      if (index !== -1) {
        if (index !== i) {
          semiCorrect++;
        } else {
          correct++;
        }
      }
    }
    const arr = [...EMPTY_SEQUENCE].fill("CORRECT", 0, correct);
    arr.fill("SEMICORRECT", correct, correct + semiCorrect);
    return arr;
  };

  // eslint-disable-next-line
  useEffect(() => setSecret(generateRandomSequence()), []);
  useEffect(() => {
    if (sequences && sequences.length > 0) {
      const numberOfSequences = sequences.length;
      const lastAnswer = sequences[numberOfSequences - 1].answer;
      const correctAnswers = lastAnswer.filter((a) => a === "CORRECT").length;
      if (correctAnswers === 4) {
        setIsWinner(true);
      } else if (numberOfSequences === 9) {
        setIsLoser(true);
      }
    }
  }, [sequences]);

  const shuffleNewSequence = () => setSequence(generateRandomSequence());

  const restartGame = () => true;

  const addSequenceColor = (index) => {
    const temp = [...sequence];
    temp[index] = selectedColor;
    setSequence(temp);
  };

  const addNewSequence = () => {
    const answer = getAnswer();
    const temp = { sequence, answer };
    console.log(temp);
    setSequences((sequences) => [...sequences, temp]);
    setSequence([...EMPTY_SEQUENCE]);
  };

  return (
    <Main>
      <Sidebar>
        <ColorSelector
          value={selectedColor}
          onChange={(color) => setSelectedColor(color)}
        />
        <Actions onRestart={restartGame} onShuffle={shuffleNewSequence} />
      </Sidebar>
      <Content>
        <Counter>{`${
          9 - sequences.length
        } plays left to break the code`}</Counter>

        <SequenceList>
          <Sequences value={sequences} />
          <NewSequence
            sequence={sequence}
            number={sequences.length + 1}
            onChange={addSequenceColor}
            onSubmit={addNewSequence}
          />
        </SequenceList>
      </Content>
      {(isWinner || isLoser) && (
        <Alert>
          <AlertMessage>
            {isWinner
              ? `Not so long message to say something important!`
              : `Loser!`}
          </AlertMessage>
          <PrimaryButton>Hit me!</PrimaryButton>
        </Alert>
      )}
    </Main>
  );
};

export default Game;
