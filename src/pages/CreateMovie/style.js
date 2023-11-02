import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  min-height: 90vh;
  padding: 40px 123px 100px;

  > button:first-child {
    background: transparent;
    border: none;

    display: flex;
    align-items: center;
    gap: 8px;

    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.PINK};

    font-size: 16px;

    svg {
      font-size: 16px;
    }
  }
`;

export const Form = styled.form`
  > h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_000};
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  > div {
    margin-top: 40px;

    display: flex;
    flex-direction: row;
    gap: 40px;
  }
`;

export const Bookmarks = styled.section`
  margin: 40px 0;

  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;

    margin-top: 24px;
    padding: 16px;

    border-radius: 8px;

    background: ${({ theme }) => theme.COLORS.GRAY_950};
  }
`;

export const Action = styled.section`
  display: flex;
  flex-direction: row;
  gap: 40px;

  > button {
    margin: 0;
  }
`;
