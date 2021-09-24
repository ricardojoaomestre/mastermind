import styled from "styled-components";
import Pin from "./Pin";
import { IoCheckmarkSharp } from "react-icons/io5";

const PinIcon = styled(IoCheckmarkSharp)`
  width: 20px;
  height: 20px;
  stroke: #ffffff;
`;

const SelectablePin = ({ selected, ...otherProps }) => (
  <Pin {...otherProps}>{selected && <PinIcon />}</Pin>
);

export default SelectablePin;
