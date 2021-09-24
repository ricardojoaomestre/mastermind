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
    width: auto;
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
  padding: 1px 4px 10px 4px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkgrey};

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 5px 10px;
  }
`;

export const SequenceNumber = styled.span`
  display: none;

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.darkgrey};
  }
`;

export const SequenceColorList = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-right: 10px;

  @media ${({ theme }) => theme.devices.tablet} {
    margin-right: 20px;
  }

  @media ${({ theme }) => theme.devices.desktop} {
    justify-content: space-evenly;
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
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 40px;

  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 -2px 3px ${({ theme }) => theme.colors.darkgrey};
  border-radius: 20px 20px 0 0;
  z-index: 1;

  @media ${({ theme }) => theme.devices.desktop} {
    position: absolute;
    width: 80%;
    left: 50%;
    top: 50%;
    bottom: auto;
    box-shadow: none;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;
    background-color: ${({ theme }) =>
      theme.toRGBA(theme.colors.darkgrey, 0.6)};
  }
`;

export const AlertMessage = styled.p`
  margin-bottom: 30px;
  font-weight: bold;
  text-align: center;
`;
