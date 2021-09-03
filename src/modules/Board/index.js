import styled from "styled-components";
import ColorPicker from "../ColorPicker";
import { ShuffleButton, RefreshButton } from "../../components/Button";
import device from "../../styles/breakpoints";

const BoardContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 768px;
  padding: 20px;
  margin-top: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px 20px 0 0;

  @media ${device.tablet} {
    background: #d2d4de;
    margin-top: 0;
    border: none;
    border-radius: 0;
    padding: 0;
    width: 100%;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const Board = () => {
  return (
    <BoardContainer>
      <ControlPanel>
        <ColorPicker />
        <ShuffleButton />
        <RefreshButton />
      </ControlPanel>
    </BoardContainer>
  );
};

export default Board;
