import styled from "styled-components";
import {
  IoShuffle,
  IoReload,
  IoCaretForwardCircleOutline,
} from "react-icons/io5";

const styledIcon = (icon) => styled(icon)`
  width: 20px;
  height: 20px;
  stroke: #000000;
  fill: #000000;
`;
const ShuffleIcon = styledIcon(IoShuffle);
const ReloadIcon = styledIcon(IoReload);
const PlayIcon = styledIcon(IoCaretForwardCircleOutline);

export { ShuffleIcon, ReloadIcon, PlayIcon };
