import { useState } from "react";
import { Pin, PinSmall, HintPin, SelectablePin } from "./components/Pin";
import { Button, RefreshButton, ShuffleButton } from "./components/Button";
import Logo from "./components/Logo";
import Row from "./modules/Row";
import styled from "styled-components";
import { colors } from "./enums";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [selected, setSelected] = useState(false);
  const [color, setColor] = useState(colors.red);

  const onClick = () => setSelected(!selected);
  const onColorChange = () => setColor(colors.blue);

  return (
    <Container>
      <Section>
        <Logo />
      </Section>
      <Section>
        <h1>Pin</h1>
        <h2>Simple Pin</h2>
        <Pin />
        <h2>Clickable Pin</h2>
        <SelectablePin
          color={colors.red}
          onClick={onClick}
          selected={selected}
        />
        <h2>Readonly pin</h2>
        <Pin color={color} onClick={onColorChange} />
        <h2>PinSmall</h2>
        <PinSmall color={color} onClick={onColorChange} />
        <h2>HintPin</h2>
        <HintPin />
        <HintPin value="correct" />
        <HintPin value="semicorrect" />
      </Section>
      <Section>
        Used for testing purposes
        <Button onClick={() => console.log("Button click")}>Try Again</Button>
        <RefreshButton onClick={() => console.log("Refresh click")} />
        <ShuffleButton onClick={() => console.log("Shuffle click")} />
      </Section>
      <Section>
        <Row />
      </Section>
    </Container>
  );
};
export default App;
