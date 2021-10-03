import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import { Base, Header } from "./StyledComponents/Layout.style";

import Info from "./components/Info";
import Game from "./components/Game";
import Logo from "./components/Logo";

import "./index.css";

const App = () => {
  return (
    <Base>
      <ThemeProvider theme={theme}>
        <Header>
          <Logo />
        </Header>
        <Game />
        <Info />
      </ThemeProvider>
    </Base>
  );
};
export default App;
