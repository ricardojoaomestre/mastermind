import {
  Content,
  Sidebar,
  ActionGroup,
  Main,
} from "../../StyledComponents/Layout.style";
import {
  SequenceColor,
  CodeHint,
  InPlace,
  OutOfPlace,
  Empty,
} from "../../StyledComponents/Pin.style";
import {
  SubmitButton,
  PrimaryButton,
  SecondaryButton,
  ButtonIcon,
  SequenceList,
  Sequence,
  SequenceNumber,
  SequenceColorList,
  CodeHints,
  Alert,
  AlertMessage,
  Counter,
} from "../../StyledComponents/Components.style";
import { IoShuffle } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import ColorSelector from "../ColorSelector";
import { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
const Game = () => {
  const theme = useContext(ThemeContext);
  const { gameColors } = theme;
  const [selectedColor, setSelectedColor] = useState(gameColors.RED);

  return (
    <Main>
      <Sidebar>
        <ColorSelector
          value={selectedColor}
          onChange={(color) => setSelectedColor(color)}
        />

        <ActionGroup>
          <SecondaryButton>
            <ButtonIcon>
              <IoShuffle />
            </ButtonIcon>
          </SecondaryButton>
          <SecondaryButton>
            <ButtonIcon>
              <VscDebugRestart />
            </ButtonIcon>
          </SecondaryButton>
        </ActionGroup>
      </Sidebar>
      <Content>
        <Counter>{selectedColor}</Counter>
        <SequenceList>
          <Sequence>
            <SequenceNumber>1</SequenceNumber>
            <SequenceColorList>
              <SequenceColor color={gameColors.BLUE} />
              <SequenceColor color={gameColors.RED} />
              <SequenceColor color={gameColors.YELLOW} />
              <SequenceColor color={gameColors.EMPTY} />
            </SequenceColorList>
            <SubmitButton>OK</SubmitButton>
          </Sequence>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
            <Sequence key={x}>
              <SequenceNumber>1</SequenceNumber>
              <SequenceColorList>
                <SequenceColor color={gameColors.BLUE} />
                <SequenceColor color={gameColors.RED} />
                <SequenceColor color={gameColors.YELLOW} />
                <SequenceColor color={gameColors.EMPTY} />
              </SequenceColorList>
              <CodeHints>
                <CodeHint>
                  <InPlace />
                </CodeHint>
                <CodeHint>
                  <InPlace />
                </CodeHint>
                <CodeHint>
                  <OutOfPlace />
                </CodeHint>
                <CodeHint>
                  <Empty />
                </CodeHint>
              </CodeHints>
            </Sequence>
          ))}
        </SequenceList>
      </Content>
      <Alert>
        <AlertMessage>
          Not so long message to say something important!
        </AlertMessage>
        <PrimaryButton>Hit me!</PrimaryButton>
      </Alert>
    </Main>
  );
};

export default Game;
