import styled from "styled-components";
import { SelectablePin } from "../../components/Pin";
import { pinColors } from "../../enums";

const StyledColorPickerContainer = styled.div`
  background-color: #ffffff;
  padding: 20px 10px;
  border-radius: 20px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ColorPicker = () => (
  <StyledColorPickerContainer>
    {Object.keys(pinColors).map((key, index) => (
      <SelectablePin color={pinColors[key]} key={`ColorPicker${index}`} />
    ))}
  </StyledColorPickerContainer>
);

export default ColorPicker;
