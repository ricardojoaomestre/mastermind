import styled from "styled-components";

const Button = styled.button`
  min-width: 42px;
  min-height: 42px;
  border-radius: 21px;
  border: none;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
`;

export const SubmitButton = styled(Button)`
  min-width: 38px;
  min-height: 38px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

export const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.lightgrey};
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonIcon = styled.span`
  font-size: 1.3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color || "inherit"};
`;

export const Counter = styled.p`
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 7px 15px;
  margin-bottom: 25px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.lightgrey};

  @media ${({ theme }) => theme.devices.desktop} {
    display: none;
  }
`;

export const SequenceList = styled.ol`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Sequence = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkgrey};

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 1px 4px 10px 4px;
  }
`;

export const SequenceNumber = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.darkgrey};

  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`;

export const SequenceColorList = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;

  @media ${({ theme }) => theme.devices.tablet} {
    justify-content: space-between;
    margin-right: 20px;
  }

  @media ${({ theme }) => theme.devices.phone} {
    margin-right: 10px;
    justify-content: space-between;
  }
`;

export const CodeHints = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 38px;
  height: 38px;
  padding: 4px;
  gap: 5px;
`;

export const Alert = styled.div`
  position: absolute;
  width: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.toRGBA(theme.colors.darkgrey, 0.6)};
  backdrop-filter: blur(4px);
  z-index: 1;

  @media ${({ theme }) => theme.devices.tablet} {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    transform: none;
    padding: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const AlertMessage = styled.p`
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
`;
