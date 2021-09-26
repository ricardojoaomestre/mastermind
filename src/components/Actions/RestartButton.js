import {
  SecondaryButton,
  ButtonIcon,
} from "../../StyledComponents/Components.style";
import { VscDebugRestart } from "react-icons/vsc";

const ShuffleButton = ({ onClick, ...rest }) => (
  <SecondaryButton onClick={onClick} {...rest}>
    <ButtonIcon>
      <VscDebugRestart />
    </ButtonIcon>
  </SecondaryButton>
);

export default ShuffleButton;
