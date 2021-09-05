import ColorPicker from "../ColorPicker";
import { ShuffleButton, RefreshButton } from "../../components/Button";
import { BoardContainer, ControlPanel } from "./Board.style";

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
