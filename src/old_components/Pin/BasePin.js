import styled from 'styled-components';

const BasePin = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color || "#F0F1F6"};

    &:hover {
        cursor: pointer;
    }
`;

export default BasePin;
