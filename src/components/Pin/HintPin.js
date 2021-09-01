import styled from 'styled-components';
import BasePin from './BasePin';

const StyledHintPin = styled(BasePin)`
    width: 14px;
    height: 14px;
    border-radius: 8px;
    border: 1px solid #C4C4C4;
    background-color: ${props => props.value === "correct" ? "#000000" : props.value === "semicorrect" ? "#D9DADC" : "transparent"};

    &:hover {
        cursor: default;
    }
`;

const HintPin =  (props) => <StyledHintPin {...props}/>;

export default HintPin;