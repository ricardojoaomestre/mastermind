import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import {
  Base,
  Content,
  Main,
  Sidebar,
  Header,
  ColorSelectorList,
  ActionGroup,
} from "./Layout.style";
import {
  Pin,
  SequenceColor,
  CodeHint,
  InPlace,
  OutOfPlace,
  Empty,
} from "./Pin.style";
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
} from "./Components.style";
import Logo from "./components/Logo";
import { IoShuffle } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";
import { BiCheck } from "react-icons/bi";
import "./index.css";

const App = () => {
  return (
    <Base>
      <ThemeProvider theme={theme}>
        <Header>
          <Logo />
        </Header>
        <Main>
          <Sidebar>
            <ColorSelectorList>
              <Pin color={theme.pinColors.red} />
              <Pin color={theme.pinColors.blue}>
                <ButtonIcon>
                  <BiCheck />
                </ButtonIcon>
              </Pin>
              <Pin color={theme.pinColors.green} />
              <Pin color={theme.pinColors.yellow} />
              <Pin color={theme.pinColors.orange} />
              <Pin color={theme.pinColors.purple} />
              <Pin color={theme.pinColors.black} />
            </ColorSelectorList>
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
            <Counter>8 guesses remaining</Counter>
            <SequenceList>
              <Sequence>
                <SequenceNumber>1</SequenceNumber>
                <SequenceColorList>
                  <SequenceColor color={theme.pinColors.blue} />
                  <SequenceColor color={theme.pinColors.red} />
                  <SequenceColor color={theme.pinColors.yellow} />
                  <SequenceColor color={theme.pinColors.empty} />
                </SequenceColorList>
                <SubmitButton>OK</SubmitButton>
              </Sequence>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
                <Sequence key={x}>
                  <SequenceNumber>1</SequenceNumber>
                  <SequenceColorList>
                    <SequenceColor color={theme.pinColors.blue} />
                    <SequenceColor color={theme.pinColors.red} />
                    <SequenceColor color={theme.pinColors.yellow} />
                    <SequenceColor color={theme.pinColors.empty} />
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
      </ThemeProvider>
    </Base>
  );
};
export default App;
