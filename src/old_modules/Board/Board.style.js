import styled from "styled-components";
import { colors } from "../../styles/colors";
import device from "../../styles/breakpoints";

const BoardContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 768px;
  padding: 20px;
  margin-top: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px 20px 0 0;
  gap: 5px;

  @media ${device.tablet} {
    background: #d2d4de;
    margin-top: 0;
    border: none;
    border-radius: 0;
    padding: 0;
    width: 100%;
    gap: 0;
  }
`;

const ColorPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const PlayPanel = styled(ColorPanel)`
  background-color: ${colors.white};
  border-radius: 0 20px 0 20px;
  padding-top: 40px;

  @media ${device.tablet} {
    border-radius: 0;
    padding: 0;
    padding-top: 20px;
    margin-left: 5px;
  }
`;

const RemainingTentatives = styled.div`
  background-color: ${colors.lightgrey};
  padding: 7px 15px;
  border-radius: 20px;
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 20px;
  width: 70%;
  max-width: 450px;

  @media ${device.tablet} {
    width: 90%;
    max-width: 300px;
  }
`;

export { BoardContainer, ColorPanel, PlayPanel, RemainingTentatives };
