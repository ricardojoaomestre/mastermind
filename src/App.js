import Header from "./modules/Header";
import Board from "./modules/Board";

import styled from "styled-components";

const AppContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Board />
    </AppContainer>
  );
};
export default App;
