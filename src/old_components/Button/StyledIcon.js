import styled from "styled-components";
import { IoShuffle, IoReload } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

const styledIcon = (icon) => styled(icon)`
  width: 20px;
  height: 20px;
  stroke: #000000;
  fill: #000000;
`;
const ShuffleIcon = styledIcon(IoShuffle);
const ReloadIcon = styledIcon(IoReload);
const PlayIcon = styledIcon(FaCheck);

export { ShuffleIcon, ReloadIcon, PlayIcon };
