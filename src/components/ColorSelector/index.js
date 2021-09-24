import { ColorSelectorList } from "../../StyledComponents/Layout.style";
import { Pin } from "../../StyledComponents/Pin.style";
import { ButtonIcon } from "../../StyledComponents/Components.style";
import { BiCheck } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const ColorListItem = ({ color, isSelected, ...rest }) => (
  <Pin color={color} {...rest}>
    {isSelected && (
      <ButtonIcon>
        <BiCheck />
      </ButtonIcon>
    )}
  </Pin>
);

const ColorList = ({ colors, selected, onChange }) => (
  <ColorSelectorList>
    {Object.keys(colors).map((key, index) => (
      <ColorListItem
        key={`ColorSelector_Pin${index}`}
        color={colors[key]}
        isSelected={colors[key] === selected}
        onClick={() => onChange(colors[key])}
      />
    ))}
  </ColorSelectorList>
);

const ColorSelector = ({ value, onChange }) => {
  const theme = useContext(ThemeContext);
  return (
    <ColorList colors={theme.gameColors} selected={value} onChange={onChange} />
  );
};

export default ColorSelector;
