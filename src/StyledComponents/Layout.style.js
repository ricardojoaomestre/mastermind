import styled from "styled-components";

export const Base = styled.div`
  font-family: Rubik, sans-serif;
  font-size: 16px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 66px;
  padding: 6px 13px;
  justify-content: flex-start;
  width: 100%;
  font-size: 3rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 1rem 2rem;
    height: 77px;
    justify-content: center;
  }
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  margin-top: 66px;
  width: 100%;
  padding: 0;
  background-color: ${({ theme }) => theme.toRGBA(theme.colors.white, 0.1)};
  border-radius: 20px 20px 0 0;

  @media ${({ theme }) => theme.devices.tablet} {
    margin-top: 97px;
    width: 608px;
    padding: 20px 20px 0 20px;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColorSelectorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 1.2rem 0;
  padding: 20px 10px;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.devices.desktop} {
    border-radius: 1.2rem 0 1.2rem 0;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px;

  @media ${({ theme }) => theme.devices.desktop} {
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 12px;
  margin-left: 67px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  overflow-y: overlay;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 12px 30px;
  }

  @media ${({ theme }) => theme.devices.desktop} {
    padding: 37px 52px;
    margin-left: 82px;
    border-radius: 0 20px 0 20px;
  }
`;
