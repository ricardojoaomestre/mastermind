import ShuffleButton from "./ShuffleButton";
import RestartButton from "./RestartButton";
import { ActionGroup } from "../../StyledComponents/Layout.style";
const Actions = ({ onRestart, onShuffle, ...rest }) => (
  <ActionGroup {...rest}>
    <ShuffleButton onClick={onShuffle} />
    <RestartButton onClick={onRestart} />
  </ActionGroup>
);

export default Actions;
