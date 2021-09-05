import { SelectablePin } from "../../components/Pin";
import { pinColors } from "../../styles/colors";
import { StyledColorPickerContainer } from "./ColorPicker.style";
import GameContext from "../../context";
import { useContext } from "react";

const ColorPicker = () => {
  const { selectedColor, setSelectedColor } = useContext(GameContext);
  return (
    <StyledColorPickerContainer>
      {Object.keys(pinColors).map((key, index) => (
        <SelectablePin
          selected={pinColors[key] === selectedColor}
          color={pinColors[key]}
          key={`ColorPicker${index}`}
          onClick={() => setSelectedColor(pinColors[key])}
        />
      ))}
    </StyledColorPickerContainer>
  );
};

export default ColorPicker;
