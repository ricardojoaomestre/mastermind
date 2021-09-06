import Logo from "../../components/Logo";
import { StyledHeaderContainer } from "./Header.style";
const Header = (props) => (
  <StyledHeaderContainer {...props}>
    <Logo />
  </StyledHeaderContainer>
);

export default Header;
