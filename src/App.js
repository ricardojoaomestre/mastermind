import {useState} from 'react';
import {Pin, PinSmall, HintPin, SelectablePin} from './components/Pin';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const COLORS = {
    RED: "#DB2053",
    BLUE: "#3CBBEC",
    GREEN: "#23AF74",
    YELLOW: "#E4AE31",
    ORANGE: "#DF5341",
    PURPLE: "#862D8D",
    BLACK: "#000000",
    WHITE: "#FFFFFF"
}

const App = () => {
    const[selected, setSelected] = useState(false);
    const[color, setColor] = useState(COLORS.RED);
    const onClick = () => setSelected(!selected);
    const onColorChange = () => setColor(COLORS.BLUE);

    return (
    <Container>
        <h1>Pin</h1>
        <h2>Simple Pin</h2>
        <Pin />
        <h2>Clickable Pin</h2>
        <SelectablePin color={COLORS.RED} onClick={onClick} selected={selected}/>
        <h2>Readonly pin</h2>
        <Pin color={color} onClick={onColorChange} />
        <h2>PinSmall</h2>
        <PinSmall color={color} onClick={onColorChange}/>
        <h2>HintPin</h2>
        <HintPin  />
        <HintPin value="correct" />
        <HintPin value="semicorrect" />
    </Container>)
};
export default App;
