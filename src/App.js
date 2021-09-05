import Header from "./modules/Header";
import Board from "./modules/Board";
import { AppContainer } from "./App.style";
import GameContext from "./context";
import { useState } from "react";
import { colors } from "./styles/colors";

const App = () => {
  const [selectedColor, setSelectedColor] = useState(colors.red);

  const initialState = {
    selectedColor,
    setSelectedColor,
  };
  return (
    <GameContext.Provider value={initialState}>
      <AppContainer>
        <Header />
        <Board />
      </AppContainer>
    </GameContext.Provider>
  );
};
export default App;
