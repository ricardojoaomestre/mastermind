import { SelectablePin } from "../../components/Pin";
import { pinColors } from "../../styles/colors";
import { StyledColorPickerContainer } from "./ColorPicker.style";

const ColorPicker = ({ selectedColor, onColorChange, ...otherProps }) => {
  return (
    <StyledColorPickerContainer {...otherProps}>
      {Object.keys(pinColors).map((key, index) => (
        <SelectablePin
          selected={pinColors[key] === selectedColor}
          color={pinColors[key]}
          key={`ColorPicker${index}`}
          onClick={() => onColorChange(pinColors[key])}
        />
      ))}
    </StyledColorPickerContainer>
  );
};

export default ColorPicker;
