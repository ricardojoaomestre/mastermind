import styled from "styled-components";
import device from "../../styles/breakpoints";
import Logo from "../../components/Logo";
const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 77px;
  background-color: #ffffff;
  padding: 12px 0;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;

  @media ${device.tablet} {
    justify-content: flex-start;
    padding-left: 1rem;
  }
`;

const Header = (props) => (
  <StyledHeaderContainer {...props}>
    <Logo />
  </StyledHeaderContainer>
);

export default Header;
