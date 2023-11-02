import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 8px;

  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    width: 100%;
    text-align: start;
    font-size: 24px;
    margin: 48px 0;
    font-weight: 500;
  }

  > p {
    width: 100%;
    text-align: start;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > a {
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 16px;

    svg {
      margin-right: 8px;
      font-size: 16px;
    }
  }

  > button {
    margin-top: 8px;
    width: 100%;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  opacity: 0.3;
`;
