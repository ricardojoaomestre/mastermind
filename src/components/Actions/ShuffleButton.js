import {
  SecondaryButton,
  ButtonIcon,
} from "../../StyledComponents/Components.style";
import { IoShuffle } from "react-icons/io5";

const ShuffleButton = ({ onClick, ...rest }) => (
  <SecondaryButton onClick={onClick} {...rest}>
    <ButtonIcon>
      <IoShuffle />
    </ButtonIcon>
  </SecondaryButton>
);

export default ShuffleButton;
