import styled from "styled-components";
const Alert = styled.div`
  background: rgba(181, 189, 199, 0.8);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  flex-direction: column;
  gap: 20px;
  padding: 40px 60px;
  z-index: 1;
`;

export default Alert;
