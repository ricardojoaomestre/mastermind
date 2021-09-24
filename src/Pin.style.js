import styled from "styled-components";

export const Pin = styled.div`
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 21px;
  background-color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

export const SequenceColor = styled(Pin)`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: stretch;
`;

export const CodeHint = styled(Pin)`
  width: 14px;
  height: 14px;
`;
export const InPlace = styled(CodeHint)`
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkgrey};
  background-color: ${({ theme }) => theme.colors.black};
`;
export const OutOfPlace = styled(CodeHint)`
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkgrey};
  background-color: ${({ theme }) => theme.colors.grey};
`;
export const Empty = styled(CodeHint)`
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.colors.darkgrey};
  background-color: none;
`;
